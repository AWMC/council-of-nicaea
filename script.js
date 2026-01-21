// get data from geoJSON file
fetch('nicaean_bishops1-13.geojson')
  .then(response => {
    //check for errors and return data
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  })
  //proceed with data
  .then(data => {

//assign data to variable    
const geojsonFeature = data;

// create map
const map = L.map('map', {
  // give it inertia so it feels good
  inertia: true,
  // disable default zoom control so that we can change where it is
  zoomControl: false
// set view and zoom to correct area so (most of) the points are in frame when the map loads
}).setView([37, 28], 6);

// place zoom control in the bottom right corner of the screen
var zoomcontrol = L.control.zoom({position: "bottomright"}).addTo(map);

// create Open Street Map Layer from url
const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  // proper attribution
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// add OSM layer to the map layer
}).addTo(map);

// create Consortium of Ancient World Mappers layer (better for a map of the ancient world)
const overlay = L.tileLayer('https://cawm.lib.uiowa.edu/tiles/{z}/{x}/{y}.png', {
  // proper attribution
  attribution: '&copy; <a href="https://cawm.lib.uiowa.edu/index.html">Consortium of Ancient World Mappers</a>'
// add CAWM layer to the map layer (after adding OSM layer so CAWM is on top)
}).addTo(map);

// create icon for bishops that have a location (non-rural)
const locatedIcon = L.icon({
  // pull icon source  
  iconUrl: 'locatedIcon.png',
  // make symbol centered
  iconAnchor: [9,9]
});

// create icon for rural bishops
const ruralIcon = L.icon({
  // pull icon source
  iconUrl: 'ruralIcon.png',
  // make symbol centered
  iconAnchor: [9,9]
});

// create icon for Constantinople
const starIcon = L.icon({
  // pull icon source
  iconUrl: 'starIcon.png',
  // make symbol centered
  iconAnchor: [12, 11.5]
})

// create marker for Constantinople
const constantinople = L.marker([41.00659263,28.96532146], {
  // give the point the star icon
  icon: starIcon,
  // bring star to the top
  zIndexOffset: 1000,
  // give title for compatibility with search bar
  title: "Constantinople"
// give the point a popup and add it to the map
}).bindPopup("Constantinople").addTo(map);

// create empty array for names of eparchies to be placed in 
var eparchyList = [];
// create iterator to run through each bishop in the jeoGSON feature from the QGIS data
for (var i = 0; i < geojsonFeature.features.length; i++) {
  // grab the eparchy from the ith bishop in the data
  let current_eparchy = geojsonFeature.features[i].properties.eparchy;
  // if that eparchy is not in the array for the names of eparchies,
  if (!eparchyList.includes(current_eparchy)) {
    // add it to the array
    eparchyList.push(current_eparchy);
  }
};

// create empty object for layer objects that will eventually hold all datapoints within one eparchy
var eparchyLayers = {};
// create an iterator to run through each eparchy in the list of eparchy names
for (var i = 0; i < eparchyList.length; i++) {
  // create layer object from geoJSON data
  var eparchyBishops = L.geoJSON(geojsonFeature, {
    // filter data using a function
    filter: function (feature, layer) {
      /*  make the functionreturn t/f depending on if the bishop's eparchy matches the ith eparchy. 
          this makes it so only bishops in the ith eparchy are included in the layer being created
      */  
      return (feature.properties.eparchy === eparchyList[i]);  
    },
    /*  pointToLayer determines how points in a geoJSON feature show up on the map. 
        it wants a function that returns a marker object
    */      
    pointToLayer: function(feature, latlng) {
      // if the feature is a rural bishop   
      if (feature.properties.rural === 1.0) {
        // return a marker object at the bishop's coordinates     
        return L.marker(latlng, {
          // give it the rural icon
          icon: ruralIcon,
          // give title for compatibility with search bar
          title: feature.properties.name
        })
      // otherwise (if the feature is not a rural bishop)  
      } else {
        // return a marker object at the bishop's coordinates    
        return L.marker(latlng, {
          // give it the located icon    
          icon: locatedIcon,
          // give title for compatibility with search bar
          title: feature.properties.name+" of "+feature.properties.city          
        })};
      }
    // add a popup to each feature  
    }).bindPopup(function (layer) {
      // if the bishop is rural
      if (layer.feature.properties.rural === 1.0) {
        /* make the text in the popup include the bishop name and eparchy: 
            BISHOP
            Eparchy of EPARCHY
        */
        return layer.feature.properties.name+"<br />Eparchy of "+layer.feature.properties.eparchy;
      // if the bishop is not in an eparchy
      } else if (layer.feature.properties.eparchy === "None") {
        /* make the text in the popup include the bishop name and city: 
            BISHOP of CITY
        */
        return layer.feature.properties.name+" of "+layer.feature.properties.city;
      // otherwise (if the bishop is not rural and is in an eparchy)
      } else {
        /* make the text in the popup include the bishop name, city, and eparchy: 
            BISHOP of CITY
            Eparchy of EPARCHY
        */  
        return layer.feature.properties.name+" of "+layer.feature.properties.city+"<br />Eparchy of "+layer.feature.properties.eparchy;
      }
    // add popups to the map  
    }).addTo(map);
    // put the layer object in the eparchyLayers object with a key corresponding to the correct eparchy
    eparchyLayers[eparchyList[i]] = eparchyBishops;
}

// create interactive menu to switch between base layers
var baseLayers = {
  // add OSM layer
  "OpenStreetMap": osm,
  // add CAWM layer
  "Ancient World": overlay
};

// create layer control menu to select eparchies to show on the map
var layercontrol = L.control.layers(baseLayers, eparchyLayers).addTo(map);

// create searchbar with pinSearch plugin
var searchBar = L.control.pinSearch({
  // set searchbar in the top left, set filler text
  position: 'topleft',
  placeholder: 'Search...',
  buttonText: 'Search',
  // which function to run when a search happens
  onSearch: function(query) {
    // zoom in
    map.setZoom(12);
  },
  // set searchbar size and max search results
  searchBarWidth: '200px',
  searchBarHeight: '30px',
  maxSearchResults: 10
// add to the map
}).addTo(map);

// close then
});
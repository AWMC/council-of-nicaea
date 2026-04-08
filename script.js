//HTML for splash info & legend
const infoHTML = `
<h2>Nicaea Signatories</h2>
<p>This interactive map depicts the attendees at the First Council of Nicaea, summoned by the Emperor Constantine in 325 CE and generally considered to be one of the most important events in the history of the early Church.</p>
<p><strong>User Guide</strong></p>
<ul>
<li>Attendees are shown individually; where they cluster, a numbered circle indicates the count.</li>
<li>Hollow circles represent “rural bishops” (chorepiscopi) who did not have an urban see.</li>
<li>Click on any episcopal see to learn the name of the bishop or other member of the clergy who attended, and to link to the Pleiades page for their see.</li>
<li>Use the layers button in the upper-right corner to filter bishops by eparchy. Click “bishops by eparchy” to uncheck all layers, then choose the eparchies you wish to view.</li>
<li>Use the search bar in the upper-left corner to search by bishop name or see.</li>
</ul>
<p>&copy; Ancient World Mapping Center 2026<br>
<a href="https://creativecommons.org/licenses/by-nc/4.0/deed.en">CC-BY-NC 4.0</a><br>
<a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0</a></p>`;
const legendHTML = `
<h2>Legend</h2><br>
Nicaea: <img src=\"starIcon.png\" style=\"vertical-align: middle; width: auto; height: auto;\"><br><br>
Bishops: <img src=\"locatedIcon.png\" style=\"vertical-align: middle; width: auto; height: auto;\"><br><br>
Rural Bishops (Chorepiscopi): <img src=\"ruralIcon.png\" style=\"vertical-align: middle; width: auto; height: auto;\">
`;

// get data from geoJSON file
fetch('nicaean_bishops.geojson')
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
  zoomControl: false,
  // set max zoom because of CAWM limitations
  maxZoom: 11
// set view and zoom to correct area so (most of) the points are in frame when the map loads
}).setView([37, 28], 5);

// splash page
L.popup([37, 28],{
  //text  
  content: infoHTML,
  //declare class for css
  className: "infoPopup",
  //keep in view and pan
  keepInView: true,
  autoPan: true,
  // adjust width
  maxWidth: 500,
  //padding for when brought back into frame
  autoPanPadding: [250, 250]
//add to map
}).openOn(map);

// place zoom control in the bottom right corner of the screen
var zoomcontrol = L.control.zoom({position: "bottomright"}).addTo(map);

//create legend and place it in the bottom left corner of the screen
var mapLegend = L.control({position: "bottomleft"});

//customize Legend
mapLegend.onAdd = function (map) {
  //create html div
  var div = L.DomUtil.create('div', 'legend');
  //content
  div.innerHTML += legendHTML;
  return div;
};

//add legend to map
mapLegend.addTo(map);

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

// create icon for Nicaea
const starIcon = L.icon({
  // pull icon source
  iconUrl: 'starIcon.png',
  // make symbol centered
  iconAnchor: [12, 11.5]
})

// create marker for Nicaea
const nicaea = L.marker([40.428361244824998, 29.716146510449995], {
  // give the point the star icon
  icon: starIcon,
  // bring star to the top
  zIndexOffset: 1000,
  // give title for compatibility with search bar
  title: "Theognis of Nicaea"
// give the point a popup and add it to the map
}).bindPopup(`Theognis of <a href="https://pleiades.stoa.org/places/511268Nicaea" target="_blank">Nicaea</a><br/>Eparchy of Bithynia`).addTo(map);

// create empty array for names of eparchies to be placed in 
let eparchyList = [];
// create iterator to run through each bishop in the jeoGSON feature from the QGIS data
for (let i = 0; i < geojsonFeature.features.length; i++) {
  // grab the eparchy from the ith bishop in the data
  let currentEparchy = geojsonFeature.features[i].properties.eparchy;
  // if that eparchy is not in the array for the names of eparchies,
  if (!eparchyList.includes(currentEparchy)) {
    // add it to the array
    eparchyList.push(currentEparchy);
  }
};

// sort eparchies alphabetically
eparchyList.sort();

const masterCluster = L.markerClusterGroup({
  // disable polygon
  showCoverageOnHover: false,
  // decrease cluster radius so more points show up on load
  maxClusterRadius: 20,
  // function for icons
  iconCreateFunction: function(cluster) {
    // find cluster num
    var childCount = cluster.getChildCount();
    // beginning of class string
    var c = ' marker-cluster-';
    // bound for small class
    if (childCount < 5) {
        c += 'small';
    // ... for med class
    } else if (childCount < 12) {
        c += 'medium';
    // ... for large class
    } else {
        c += 'large';
    }
    // return icon
    return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
  } 
}).addTo(map);

// create empty array for layer objects that will eventually hold all datapoints within one eparchy
let eparchyLayers = [];
// create an iterator to run through each eparchy in the list of eparchy names
for (let i = 0; i < eparchyList.length; i++) {
  const currentEparchy = eparchyList[i];
  // create cluster group from markercluster plugin to help deal with collision detection
  const eparchySubgroup = L.featureGroup.subGroup(masterCluster);
  // create layer object from geoJSON data
  var eparchyBishops = L.geoJSON(geojsonFeature, {
    // filter data using a function
    filter: function (feature, layer) {
      // filter out Nicaea point, so it doesnt overlay with the star
      if (feature.properties.city === "Nicaea") return false;
      /*  make the functionreturn t/f depending on if the bishop's eparchy matches the ith eparchy. 
          this makes it so only bishops in the ith eparchy are included in the layer being created
      */  
      return (feature.properties.eparchy === currentEparchy);  
    },
    /*  pointToLayer determines how points in a geoJSON feature show up on the map. 
        it wants a function that returns a marker object
    */      
    pointToLayer: function(feature, latlng) {
      // if the feature is a rural bishop & not the bishop in Nicaea. We are excluding this one for special treatment.  
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
    },
    // use onEachFeature to give markers popups
    onEachFeature: function (feature, layer) {
      // create variable for popup text to be stored
      let popupText;
      // if the bishop is rural
      if (layer.feature.properties.rural === 1.0) {
        /* make the text in the popup include the bishop name and eparchy: 
            BISHOP
            Eparchy of EPARCHY
        */
        popupText = `${layer.feature.properties.name}<br/>Eparchy of ${layer.feature.properties.eparchy}`;
      // if the bishop is not in an eparchy
      } else if (layer.feature.properties.eparchy === "None") {
        /* make the text in the popup include the bishop name and city: 
            BISHOP of CITY
        */
        popupText = `${layer.feature.properties.name} of ${layer.feature.properties.city}`;
      // otherwise (if the bishop is not rural and is in an eparchy)
      } else if (layer.feature.properties.pleiades === null) {
        /* make the text in the popup include the bishop name, city, and eparchy: 
            BISHOP of CITY
            Eparchy of EPARCHY
        */  
        popupText = `${layer.feature.properties.name} of ${layer.feature.properties.city}<br/>Eparchy of ${layer.feature.properties.eparchy}`;
      } else {
        /* make the text in the popup include the bishop name, city, and eparchy: 
            BISHOP of CITY
            Eparchy of EPARCHY
           also a hyperlink in the city portion
        */  
        popupText = `${layer.feature.properties.name} of <a href=${layer.feature.properties.pleiades} target="_blank">${layer.feature.properties.city}</a><br />Eparchy of ${layer.feature.properties.eparchy}`;
      }
      // apply popup to marker
      layer.bindPopup(popupText);
    }});
    // add bishops to subgroup
    eparchyBishops.addTo(eparchySubgroup);
    // add the layer to clustering layer and the map
    eparchySubgroup.addLayer(eparchyBishops);
    eparchySubgroup.addTo(map);
    // format layer into object for compatability with tree plugin
    let treeLayer = {
      label: currentEparchy,
      layer: eparchySubgroup
    }
    // add object to layers array
    eparchyLayers.push(treeLayer);
}

// create overlays object
let overlaysTree = [
  {
    // Constantinople
    label:"Nicaea",
    layer: nicaea,
    /*  added empty children array to change the way the plugin renders Nicaea selection. 
        otherwise, it looks like eparchies live under Nicaea */
    children: []
  }, {
    // all of the eparchies
    label: "Bishops (by eparchy)",
    // unselect all button (main goal of the plugin)
    selectAllCheckbox: true,
    // array of eparchy layer objects we created earlier
    children: eparchyLayers
  }
];

// add overlays to control. baselayers left null for personal preference since toggling is not needed
L.control.layers.tree(null, overlaysTree).addTo(map);

// create searchbar with pinSearch plugin
var searchBar = L.control.pinSearch({
  // set searchbar in the top left, set filler text
  position: 'topleft',
  placeholder: 'Search...',
  buttonText: 'Search',
  // which function to run when a search happens
  onSearch: function(query) {
    // if Nicaea was searched for
    if (nicaea.options.title === query) {
      // pan to Nicaea
      map.setView(nicaea.getLatLng());
      // open the popup
      nicaea.openPopup();
    }
    // go through each cluster group
    eparchyLayers.forEach(obj => {
      const subGroup = obj.layer;
      if (map.hasLayer(subGroup)) {
        subGroup.eachLayer(geoJsonLayer => {
          geoJsonLayer.eachLayer( marker =>{
            if (marker.options.title === query) {
              masterCluster.zoomToShowLayer(marker, function() {
                marker.openPopup();
              });
            }
          }); 
        });
      }
    });
  },
  // set searchbar size and max search results
  searchBarWidth: '200px',
  searchBarHeight: '30px',
  maxSearchResults: 10
// add to the map
}).addTo(map);

// close then
});
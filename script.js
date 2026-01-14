// create geoJSON feature from QGIS data with all of the appropriate data for all the bishops
const geojsonFeature = {
"type": "FeatureCollection",
"name": "nicaean_bishops1-13",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 1, "name": "Hosius/Ossus", "city": "Cordoba", "eparchy": "None", "rural": null, "ba_ref": "26 F4", "mullen_ref": 254, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ -4.777868916666667, 37.885985083333324 ] } },
{ "type": "Feature", "properties": { "id": 2, "name": "Vitus", "city": "Rome", "eparchy": "None", "rural": null, "ba_ref": "43 B2", "mullen_ref": 197, "notes2": "Presbyter representing the Bishop of Rome" }, "geometry": { "type": "Point", "coordinates": [ 12.491969926099999, 41.890169788333317 ] } },
{ "type": "Feature", "properties": { "id": 3, "name": "Vincentius", "city": "Rome", "eparchy": "None", "rural": null, "ba_ref": "43 B2", "mullen_ref": 197, "notes2": "Presbyter representing the Bishop of Rome" }, "geometry": { "type": "Point", "coordinates": [ 12.491969926099999, 41.890169788333317 ] } },
{ "type": "Feature", "properties": { "id": 4, "name": "Alexander", "city": "Alexandria", "eparchy": "Egypt", "rural": null, "ba_ref": "74 B2", "mullen_ref": 271, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.909773, 31.201516380208322 ] } },
{ "type": "Feature", "properties": { "id": 6, "name": "Harpocration", "city": "Alphocranon", "eparchy": "Egypt", "rural": null, "ba_ref": "74 D2 Phragonis", "mullen_ref": 285, "notes2": "Mladjov suggests Naucratis" }, "geometry": { "type": "Point", "coordinates": [ 30.934522, 31.247944 ] } },
{ "type": "Feature", "properties": { "id": 7, "name": "Adamantius", "city": "Cynopolis", "eparchy": "Egypt", "rural": null, "ba_ref": "74 E3", "mullen_ref": 278, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.234453, 30.896044 ] } },
{ "type": "Feature", "properties": { "id": 5, "name": "Paphnutius", "city": "Rural", "eparchy": "Egypt", "rural": 1.0, "ba_ref": null, "mullen_ref": null, "notes2": "Omitted in some lists" }, "geometry": { "type": "Point", "coordinates": [ 31.1972032564627, 30.34693834071021 ] } },
{ "type": "Feature", "properties": { "id": 8, "name": "Arbition", "city": "Pharbaithus", "eparchy": "Egypt", "rural": null, "ba_ref": "74 F3", "mullen_ref": 285, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.620556, 30.734257 ] } },
{ "type": "Feature", "properties": { "id": 9, "name": "Philip", "city": "Panephysis", "eparchy": "Egypt", "rural": null, "ba_ref": "74 F2", "mullen_ref": 283, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.936, 31.160676166666669 ] } },
{ "type": "Feature", "properties": { "id": 10, "name": "Potomon", "city": "Heraclea", "eparchy": "Egypt", "rural": null, "ba_ref": "74 G2 Herakleopolis Mikra/Sethroe", "mullen_ref": 275, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.167572, 30.982139 ] } },
{ "type": "Feature", "properties": { "id": 11, "name": "Dorotheus", "city": "Pelusium", "eparchy": "Egypt", "rural": null, "ba_ref": "74 H2", "mullen_ref": 284, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.54734040000001, 31.0427587 ] } },
{ "type": "Feature", "properties": { "id": 12, "name": "Gaius", "city": "Thmuis", "eparchy": "Egypt", "rural": null, "ba_ref": "74 F3", "mullen_ref": 288, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.5168555, 30.933029333333334 ] } },
{ "type": "Feature", "properties": { "id": 13, "name": "Antiochus", "city": "Memphis", "eparchy": "Egypt", "rural": null, "ba_ref": "75 E1", "mullen_ref": 280, "notes2": "Omitted in some lists" }, "geometry": { "type": "Point", "coordinates": [ 31.255061, 29.849491 ] } },
{ "type": "Feature", "properties": { "id": 14, "name": "Tiberius", "city": "Tanis", "eparchy": "Egypt", "rural": null, "ba_ref": "74 F2", "mullen_ref": 286, "notes2": "Mullen 287 says Tiberius was Bishop of Tauthites" }, "geometry": { "type": "Point", "coordinates": [ 31.883619562399996, 30.975127316566667 ] } },
{ "type": "Feature", "properties": { "id": 15, "name": "Atthas", "city": "Schedia", "eparchy": "Egypt", "rural": null, "ba_ref": "74 C2", "mullen_ref": 286, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.202448666666669, 31.129233333333339 ] } },
{ "type": "Feature", "properties": { "id": 16, "name": "Tyrannus", "city": "Antinoopolis", "eparchy": "Thebaid", "rural": null, "ba_ref": "77 D1", "mullen_ref": 271, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.8810025, 27.815770833333342 ] } },
{ "type": "Feature", "properties": { "id": 17, "name": "Plusianus", "city": "Lycopolis", "eparchy": "Thebaid", "rural": null, "ba_ref": "77 E2", "mullen_ref": 279, "notes2": "Mladjov lists Volusianus as a potential alternate name" }, "geometry": { "type": "Point", "coordinates": [ 31.179929333333337, 27.183950166666666 ] } },
{ "type": "Feature", "properties": { "id": 18, "name": "Dachius", "city": "Berenice", "eparchy": "Libya", "rural": null, "ba_ref": "38 B1", "mullen_ref": 295, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 20.066854166666669, 32.121915833333347 ] } },
{ "type": "Feature", "properties": { "id": 19, "name": "Zopyrus", "city": "Barca", "eparchy": "Libya", "rural": null, "ba_ref": "38 B1", "mullen_ref": 295, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 20.87174333330001, 32.499653333300003 ] } },
{ "type": "Feature", "properties": { "id": 20, "name": "Serapion", "city": "Antipyrgus", "eparchy": "Libya", "rural": null, "ba_ref": "73 A1", "mullen_ref": 295, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 23.961389, 32.076111 ] } },
{ "type": "Feature", "properties": { "id": 21, "name": "Titus", "city": "Paraetonium", "eparchy": "Libya", "rural": null, "ba_ref": "73 E2", "mullen_ref": 296, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.2368445, 31.350136 ] } },
{ "type": "Feature", "properties": { "id": 22, "name": "Macarius", "city": "Jerusalem", "eparchy": "Palestine", "rural": null, "ba_ref": "70 G2", "mullen_ref": 27, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.229769666666662, 31.7771895 ] } },
{ "type": "Feature", "properties": { "id": 23, "name": "Germanus", "city": "Neapolis (Nablus)", "eparchy": "Palestine", "rural": null, "ba_ref": "69 B5", "mullen_ref": 29, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.262911, 32.219987083333301 ] } },
{ "type": "Feature", "properties": { "id": 24, "name": "Marinus", "city": "Sebaste (Samaria)", "eparchy": "Palestine", "rural": null, "ba_ref": "69 B5", "mullen_ref": 30, "notes2": "Per Mullen, two Bishops of Sebaste were present at the Council" }, "geometry": { "type": "Point", "coordinates": [ 35.190081438599989, 32.275794320833342 ] } },
{ "type": "Feature", "properties": { "id": 25, "name": "Gaianus", "city": "Sebaste (Samaria)", "eparchy": "Palestine", "rural": null, "ba_ref": "69 B5", "mullen_ref": 30, "notes2": "Per Mullen, two Bishops of Sebaste were present at the Council" }, "geometry": { "type": "Point", "coordinates": [ 35.190081438599989, 32.275794320833342 ] } },
{ "type": "Feature", "properties": { "id": 26, "name": "Eusebius", "city": "Caesarea", "eparchy": "Palestine", "rural": null, "ba_ref": "69 A4 Stratonos Pyrgos/Caesarea", "mullen_ref": 24, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.91527171, 32.57870084 ] } },
{ "type": "Feature", "properties": { "id": 27, "name": "Sabinus", "city": "Gadara", "eparchy": "Palestine", "rural": null, "ba_ref": "69 C4", "mullen_ref": 26, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.677262537599994, 32.657382409233335 ] } },
{ "type": "Feature", "properties": { "id": 28, "name": "Longinus", "city": "Ascalon", "eparchy": "Palestine", "rural": null, "ba_ref": "70 F2", "mullen_ref": 23, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.551172508366655, 31.665448253866664 ] } },
{ "type": "Feature", "properties": { "id": 29, "name": "Peter", "city": "Nicopolis", "eparchy": "Palestine", "rural": null, "ba_ref": "70 F2 Emmaus/Nicopolis", "mullen_ref": 30, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.989406833300002, 31.838969512466665 ] } },
{ "type": "Feature", "properties": { "id": 30, "name": "Macrinus", "city": "Jamnea", "eparchy": "Palestine", "rural": null, "ba_ref": "70 F2", "mullen_ref": 27, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.737122416666665, 31.8764615 ] } },
{ "type": "Feature", "properties": { "id": 31, "name": "Maximus", "city": "Eleutheropolis", "eparchy": "Palestine", "rural": null, "ba_ref": "70 F2 Beth Govrin/Eleutheropolis", "mullen_ref": 29, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.8910485, 31.619462333333331 ] } },
{ "type": "Feature", "properties": { "id": 32, "name": "Paul", "city": "Maximianopolis", "eparchy": "Palestine", "rural": null, "ba_ref": "69 B4 Legio/Caporcotani/Maximianopolis", "mullen_ref": 29, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.187680583333325, 32.575288 ] } },
{ "type": "Feature", "properties": { "id": 33, "name": "Januarius", "city": "Jericho", "eparchy": "Palestine", "rural": null, "ba_ref": "70 G2 Hierichous", "mullen_ref": 27, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.444141753799997, 31.8710168261 ] } },
{ "type": "Feature", "properties": { "id": 34, "name": "Aetius", "city": "Lydda", "eparchy": "Palestine", "rural": null, "ba_ref": "70 F2", "mullen_ref": 28, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.893680083333336, 31.959555583333334 ] } },
{ "type": "Feature", "properties": { "id": 35, "name": "Silvanus", "city": "Azotus", "eparchy": "Palestine", "rural": null, "ba_ref": "70 F2 Ashdod/Azotos (Mesogeios)", "mullen_ref": 23, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.658057066699996, 31.755937233299992 ] } },
{ "type": "Feature", "properties": { "id": 36, "name": "Patrophilus", "city": "Scythopolis (Beishan)", "eparchy": "Palestine", "rural": null, "ba_ref": "69 C4", "mullen_ref": 30, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.503091633299995, 32.506301766666652 ] } },
{ "type": "Feature", "properties": { "id": 37, "name": "Asclepias", "city": "Gaza", "eparchy": "Palestine", "rural": null, "ba_ref": "70 E2", "mullen_ref": 26, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.451719, 31.5202095 ] } },
{ "type": "Feature", "properties": { "id": 38, "name": "Peter", "city": "Aela (Elath)", "eparchy": "Palestine", "rural": null, "ba_ref": "76 F2 Aelana/Aila", "mullen_ref": 49, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.997394833333338, 29.530676 ] } },
{ "type": "Feature", "properties": { "id": 39, "name": "Antiochus", "city": "Capitolias", "eparchy": "Palestine", "rural": null, "ba_ref": "69 C4", "mullen_ref": 28, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.857642458333338, 32.597950458333329 ] } },
{ "type": "Feature", "properties": { "id": 40, "name": "Zeno", "city": "Tyre", "eparchy": "Phoenicia", "rural": null, "ba_ref": "69 B3", "mullen_ref": 38, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.209665910303301, 33.268461082796691 ] } },
{ "type": "Feature", "properties": { "id": 41, "name": "Philocalus", "city": "Paneas", "eparchy": "Phoenicia", "rural": null, "ba_ref": "69 C3", "mullen_ref": 37, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.693501243998348, 33.247484756001661 ] } },
{ "type": "Feature", "properties": { "id": 42, "name": "Aeneas", "city": "Ptolemaïs (Acre)", "eparchy": "Phoenicia", "rural": null, "ba_ref": "69 B4 Ake/Ptolemais", "mullen_ref": 37, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.082585192052981, 32.928333 ] } },
{ "type": "Feature", "properties": { "id": 43, "name": "Magnus", "city": "Damascus", "eparchy": "Phoenicia", "rural": null, "ba_ref": "69 C2", "mullen_ref": 36, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.303886768211925, 33.506396768211914 ] } },
{ "type": "Feature", "properties": { "id": 44, "name": "Theodore", "city": "Sidon", "eparchy": "Phoenicia", "rural": null, "ba_ref": "69 B2", "mullen_ref": 38, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.37657580794702, 33.560413 ] } },
{ "type": "Feature", "properties": { "id": 45, "name": "Hellanicus", "city": "Tripolis (Tripoli)", "eparchy": "Phoenicia", "rural": null, "ba_ref": "68 A5", "mullen_ref": 38, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.812, 34.449 ] } },
{ "type": "Feature", "properties": { "id": 46, "name": "Gregory", "city": "Berytus (Beirouth)", "eparchy": "Phoenicia", "rural": null, "ba_ref": "69 C2", "mullen_ref": 35, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.520980048013243, 33.899285 ] } },
{ "type": "Feature", "properties": { "id": 47, "name": "Marinus", "city": "Palmyra", "eparchy": "Phoenicia", "rural": null, "ba_ref": "68 F4", "mullen_ref": 37, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 38.264867215599992, 34.552809393799997 ] } },
{ "type": "Feature", "properties": { "id": 48, "name": "Taddhoneus", "city": "Emesa (Homs)", "eparchy": "Phoenicia", "rural": null, "ba_ref": "68 C4", "mullen_ref": 36, "notes2": "Mladjov lists Anatolius as a potential alternative name" }, "geometry": { "type": "Point", "coordinates": [ 36.724237, 34.751899 ] } },
{ "type": "Feature", "properties": { "id": 49, "name": "Eustathius", "city": "Antioch", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 C4", "mullen_ref": 41, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.165318, 36.200663 ] } },
{ "type": "Feature", "properties": { "id": 50, "name": "Zenobius", "city": "Seleucia", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 B4", "mullen_ref": 46, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.9285965, 36.1212645 ] } },
{ "type": "Feature", "properties": { "id": 51, "name": "Theodotus", "city": "Laodicea", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 A2", "mullen_ref": 45, "notes2": "Per Mullen, \"probably the one on the sea, not the one near Emesa\"" }, "geometry": { "type": "Point", "coordinates": [ 35.776629700000015, 35.51892275 ] } },
{ "type": "Feature", "properties": { "id": 52, "name": "Alphius", "city": "Apamea", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 B3 Pella/Apamea", "mullen_ref": 44, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.402087328213248, 35.421703095586757 ] } },
{ "type": "Feature", "properties": { "id": 53, "name": "Philoxenus", "city": "Hierapolis (Manbij)", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 F3", "mullen_ref": 45, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 37.950318268211923, 36.521006768211926 ] } },
{ "type": "Feature", "properties": { "id": 54, "name": "Selamanes", "city": "Germanicea (Marash)", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 D1", "mullen_ref": 45, "notes2": "Mladjov lists Solomon as a potential alternative name" }, "geometry": { "type": "Point", "coordinates": [ 36.931619731788075, 37.578921968211922 ] } },
{ "type": "Feature", "properties": { "id": 55, "name": "Piperius", "city": "Samosata", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 H1", "mullen_ref": 46, "notes2": "Mladjov lists Papirius as a potential alternative name" }, "geometry": { "type": "Point", "coordinates": [ 38.519926536423853, 37.525756 ] } },
{ "type": "Feature", "properties": { "id": 56, "name": "Archelaus", "city": "Doliche", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 E2", "mullen_ref": 44, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 37.350449809488076, 37.13300748928809 ] } },
{ "type": "Feature", "properties": { "id": 57, "name": "Euphratius", "city": "Balanea", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 A3", "mullen_ref": 44, "notes2": "Mladjov lists Euphrantius as a potential alternative name" }, "geometry": { "type": "Point", "coordinates": [ 35.9433145, 35.174692 ] } },
{ "type": "Feature", "properties": { "id": 58, "name": "Phaladus", "city": "Rural", "eparchy": "Coele-Syria", "rural": 1.0, "ba_ref": null, "mullen_ref": 41, "notes2": "Mladjov lists Palladius as a potential alternative name" }, "geometry": { "type": "Point", "coordinates": [ 36.68066426, 35.73111109 ] } },
{ "type": "Feature", "properties": { "id": 59, "name": "Zoïlus", "city": "Gabala", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 A3", "mullen_ref": 44, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.92265295198677, 35.378062 ] } },
{ "type": "Feature", "properties": { "id": 60, "name": "Bassus", "city": "Zeugma", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 F2", "mullen_ref": 46, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 37.872827726794043, 37.055125582805964 ] } },
{ "type": "Feature", "properties": { "id": 61, "name": "Basianus", "city": "Raphanea", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 B4", "mullen_ref": 46, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.393305951986747, 34.966351 ] } },
{ "type": "Feature", "properties": { "id": 62, "name": "Gerontius", "city": "Larisa (Shaizar)", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 C3", "mullen_ref": 45, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.583117466653285, 35.275485214501352 ] } },
{ "type": "Feature", "properties": { "id": 63, "name": "Manicius", "city": "Epiphanea (Hamath)", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 C3 Amathe/Epiphaneia", "mullen_ref": 44, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.75010500794702, 35.131670792052979 ] } },
{ "type": "Feature", "properties": { "id": 64, "name": "Eustathius", "city": "Arethusa", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 C4", "mullen_ref": 44, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.735273975993387, 34.960169 ] } },
{ "type": "Feature", "properties": { "id": 65, "name": "Paul", "city": "Neocaesarea", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "68 F2", "mullen_ref": 45, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 38.185219615894049, 35.965770615894051 ] } },
{ "type": "Feature", "properties": { "id": 66, "name": "Syricius", "city": "Cyrrhus", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 D3", "mullen_ref": 44, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.959167, 36.744167 ] } },
{ "type": "Feature", "properties": { "id": 67, "name": "Seleucus", "city": "Rural", "eparchy": "Coele-Syria", "rural": 1.0, "ba_ref": "69 E2", "mullen_ref": 41, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.68066426, 35.73111109 ] } },
{ "type": "Feature", "properties": { "id": 68, "name": "Peter", "city": "Gendarus", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 D4", "mullen_ref": 45, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.702106, 36.384102 ] } },
{ "type": "Feature", "properties": { "id": 69, "name": "Pegasius", "city": "Harba-Kedem", "eparchy": "Coele-Syria", "rural": 2.0, "ba_ref": null, "mullen_ref": 44, "notes2": "Mullen lists as Arbokadama.  Unlocated" }, "geometry": { "type": "Point", "coordinates": [ 36.68066426, 35.73111109 ] } },
{ "type": "Feature", "properties": { "id": 70, "name": "Bassones", "city": "Gabbula", "eparchy": "Coele-Syria", "rural": null, "ba_ref": "67 F4", "mullen_ref": 45, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 37.504654728476837, 36.08 ] } },
{ "type": "Feature", "properties": { "id": 71, "name": "Nicomachus", "city": "Bostra", "eparchy": "Arabia", "rural": null, "ba_ref": "69 D4", "mullen_ref": 49, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.481300751900008, 32.52045133619999 ] } },
{ "type": "Feature", "properties": { "id": 72, "name": "Cyrion", "city": "Philadelphia (Amman)", "eparchy": "Arabia", "rural": null, "ba_ref": "71 B2", "mullen_ref": 51, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.9346239387, 31.954951063899998 ] } },
{ "type": "Feature", "properties": { "id": 73, "name": "Gennadius", "city": "Heshbon", "eparchy": "Arabia", "rural": null, "ba_ref": "71 B2 Esbous", "mullen_ref": 50, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.809014291600008, 31.800741182099991 ] } },
{ "type": "Feature", "properties": { "id": 74, "name": "Severus", "city": "Soada/Dionysias", "eparchy": "Arabia", "rural": null, "ba_ref": "69 E4", "mullen_ref": 51, "notes2": "Mullen lists as Bishop of Sodom" }, "geometry": { "type": "Point", "coordinates": [ 36.5652865, 32.707083 ] } },
{ "type": "Feature", "properties": { "id": 75, "name": "Sopater", "city": "Errhe of Batanea", "eparchy": "Arabia", "rural": null, "ba_ref": "69 D3 Aere", "mullen_ref": 49, "notes2": "Mullen lists as Bishop of Beretane" }, "geometry": { "type": "Point", "coordinates": [ 36.185274, 33.071083848681923 ] } },
{ "type": "Feature", "properties": { "id": 76, "name": "Aeithalas", "city": "Edessa (Ruha, Urfa)", "eparchy": "Mesopotamia", "rural": null, "ba_ref": "67 H2", "mullen_ref": 56, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 38.78149832, 37.16233528 ] } },
{ "type": "Feature", "properties": { "id": 77, "name": "Jacob", "city": "Nisibis", "eparchy": "Mesopotamia", "rural": null, "ba_ref": "89 D3", "mullen_ref": 57, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 41.215055, 37.065767216059584 ] } },
{ "type": "Feature", "properties": { "id": 78, "name": "Antiochus", "city": "Resaïna", "eparchy": "Mesopotamia", "rural": null, "ba_ref": "89 C4", "mullen_ref": 57, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 40.049639666700003, 36.827118197538418 ] } },
{ "type": "Feature", "properties": { "id": 79, "name": "Mareas", "city": "Macedonopolis (Birtha)", "eparchy": "Mesopotamia", "rural": null, "ba_ref": "67 F2 Birtha", "mullen_ref": 57, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 37.979049421089236, 37.025154578910772 ] } },
{ "type": "Feature", "properties": { "id": 80, "name": "John", "city": "Perre", "eparchy": "Mesopotamia", "rural": null, "ba_ref": "67 G1 Perre", "mullen_ref": 45, "notes2": "Mladjov lists as Bishop of Persis.  Per Mullen 67, John was more likely Bishop of Perre" }, "geometry": { "type": "Point", "coordinates": [ 38.2865415, 37.778243 ] } },
{ "type": "Feature", "properties": { "id": 81, "name": "Theodore", "city": "Tarsus", "eparchy": "Cilicia", "rural": null, "ba_ref": "66 F3", "mullen_ref": 82, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.895794988400006, 36.912329701200015 ] } },
{ "type": "Feature", "properties": { "id": 82, "name": "Amphion", "city": "Ephiphania", "eparchy": "Cilicia", "rural": null, "ba_ref": "67 C3 Oeniandos/Epiphaneia", "mullen_ref": 78, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.152947882759598, 36.961892333299993 ] } },
{ "type": "Feature", "properties": { "id": 83, "name": "Narcissus", "city": "Neronias", "eparchy": "Cilicia", "rural": null, "ba_ref": "67 C2", "mullen_ref": 80, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.467700891970203, 37.2506341080298 ] } },
{ "type": "Feature", "properties": { "id": 84, "name": "Moses", "city": "Castabala", "eparchy": "Cilicia", "rural": null, "ba_ref": "67 C2 Hierapolis/Kastabala", "mullen_ref": 79, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.1880788919702, 37.175674608029802 ] } },
{ "type": "Feature", "properties": { "id": 85, "name": "Nicetas", "city": "Flavias", "eparchy": "Cilicia", "rural": null, "ba_ref": "67 C2 Phlaouiopolis/Flavias", "mullen_ref": 78, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.104501067880804, 37.363544932119204 ] } },
{ "type": "Feature", "properties": { "id": 86, "name": "Eudaemon", "city": "Rural", "eparchy": "Cilicia", "rural": 1.0, "ba_ref": "67 B2", "mullen_ref": 75, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.748475612757737, 37.255444725993065 ] } },
{ "type": "Feature", "properties": { "id": 87, "name": "Paulinus", "city": "Adana", "eparchy": "Cilicia", "rural": null, "ba_ref": "66 G3", "mullen_ref": 76, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.337943608029803, 36.985825608029813 ] } },
{ "type": "Feature", "properties": { "id": 88, "name": "Macedonius", "city": "Mopsuestia", "eparchy": "Cilicia", "rural": null, "ba_ref": "67 B3", "mullen_ref": 80, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.623155608029798, 36.957044608029797 ] } },
{ "type": "Feature", "properties": { "id": 89, "name": "Tarcondimantus", "city": "Aegae", "eparchy": "Cilicia", "rural": null, "ba_ref": "67 B3", "mullen_ref": 76, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.789487, 36.770042695985097 ] } },
{ "type": "Feature", "properties": { "id": 90, "name": "Hesychius", "city": "Alexandria (Alexandretta)", "eparchy": "Cilicia", "rural": null, "ba_ref": "67 C3", "mullen_ref": 76, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.174006391970202, 36.581981324089398 ] } },
{ "type": "Feature", "properties": { "id": 91, "name": "Leontius", "city": "Caesarea (Kayseri)", "eparchy": "Cappadocia", "rural": null, "ba_ref": "64 A3 Mazaka/Eusebeia/Caesarea", "mullen_ref": 121, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.4873214, 38.716041725 ] } },
{ "type": "Feature", "properties": { "id": 92, "name": "Eupsychius", "city": "Tyana", "eparchy": "Cappadocia", "rural": null, "ba_ref": "66 F1", "mullen_ref": 128, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.5736203, 37.8260608 ] } },
{ "type": "Feature", "properties": { "id": 93, "name": "Erythrius", "city": "Colonia", "eparchy": "Cappadocia", "rural": null, "ba_ref": "63 E4 Garsaura/Col. Claudia Archelais/Koloneia", "mullen_ref": 122, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.03862575, 38.35882285 ] } },
{ "type": "Feature", "properties": { "id": 94, "name": "Timothy", "city": "Cybistra", "eparchy": "Cappadocia", "rural": null, "ba_ref": "66 E1", "mullen_ref": 123, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.1527925, 37.589731 ] } },
{ "type": "Feature", "properties": { "id": 95, "name": "Ambrosius", "city": "Comana", "eparchy": "Cappadocia", "rural": null, "ba_ref": "64 C4", "mullen_ref": 122, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 36.321055148, 38.329860392050001 ] } },
{ "type": "Feature", "properties": { "id": 96, "name": "Stephen", "city": "Rural", "eparchy": "Cappadocia", "rural": 1.0, "ba_ref": "64 B2", "mullen_ref": 117, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.25013577, 38.398694955772477 ] } },
{ "type": "Feature", "properties": { "id": 97, "name": "Rhodon", "city": "Rural", "eparchy": "Cappadocia", "rural": 1.0, "ba_ref": "64 B2", "mullen_ref": 117, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.25013577, 38.39869496 ] } },
{ "type": "Feature", "properties": { "id": 98, "name": "Eulalius", "city": "Sebastea (Sivas)", "eparchy": "Armenia", "rural": null, "ba_ref": "64 E1", "mullen_ref": 127, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 37.016607, 39.7490195 ] } },
{ "type": "Feature", "properties": { "id": 99, "name": "Euethius", "city": "Satala", "eparchy": "Armenia", "rural": null, "ba_ref": "89 B1", "mullen_ref": 127, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 39.59791835, 40.033754525 ] } },
{ "type": "Feature", "properties": { "id": 100, "name": "Eudromius", "city": "Rural", "eparchy": "Armenia", "rural": 1.0, "ba_ref": "89 C1", "mullen_ref": 117, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 38.41605948, 39.86440038 ] } },
{ "type": "Feature", "properties": { "id": 101, "name": "Theophanes", "city": "Rural", "eparchy": "Armenia", "rural": 1.0, "ba_ref": "89 C1", "mullen_ref": 117, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 38.41605948, 39.86440038 ] } },
{ "type": "Feature", "properties": { "id": 102, "name": "Aristaces?", "city": "Rural", "eparchy": "Armenia", "rural": 1.0, "ba_ref": "89 C1", "mullen_ref": 137, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 38.41605948, 39.86440038 ] } },
{ "type": "Feature", "properties": { "id": 103, "name": "Eutychius", "city": "Amasia", "eparchy": "Diospontus", "rural": null, "ba_ref": "87 A4", "mullen_ref": 118, "notes2": "Omitted in some lists" }, "geometry": { "type": "Point", "coordinates": [ 35.82794385, 40.66680835 ] } },
{ "type": "Feature", "properties": { "id": 104, "name": "Elpidius", "city": "Comana", "eparchy": "Diospontus", "rural": null, "ba_ref": "87 B4 Comana Pontica/Hierocaesarea", "mullen_ref": 122, "notes2": "Mladjov lists Helpidius as an alternative name" }, "geometry": { "type": "Point", "coordinates": [ 36.6386890701, 40.3605371564 ] } },
{ "type": "Feature", "properties": { "id": 105, "name": "Heraclius", "city": "Zela", "eparchy": "Diospontus", "rural": null, "ba_ref": "87 A4", "mullen_ref": 129, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 35.8901884263, 40.302418246149998 ] } },
{ "type": "Feature", "properties": { "id": 106, "name": "Longinus", "city": "Neocaesarea", "eparchy": "Pontus Polemoniacus", "rural": null, "ba_ref": "87 B4 Kabeira/Neocaesarea/Diospolis/Sebaste/Hadriane", "mullen_ref": 134, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 37.0201215, 40.5892125 ] } },
{ "type": "Feature", "properties": { "id": 107, "name": "Domnus", "city": "Trebizond", "eparchy": "Pontus Polemoniacus", "rural": null, "ba_ref": "87 E4 Trapezus", "mullen_ref": 135, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 39.7233115, 41.0042695 ] } },
{ "type": "Feature", "properties": { "id": 108, "name": "Stratophilus", "city": "Pityous", "eparchy": "Pontus Polemoniacus", "rural": null, "ba_ref": "87 F1", "mullen_ref": 135, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 40.333311, 43.1615905 ] } },
{ "type": "Feature", "properties": { "id": 109, "name": "Philadelphus", "city": "Pompeiopolis", "eparchy": "Paphlagonia", "rural": null, "ba_ref": "86 E2", "mullen_ref": 127, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.189545607819362, 41.514510098369762 ] } },
{ "type": "Feature", "properties": { "id": 110, "name": "Petronius", "city": "Ionopolis", "eparchy": "Paphlagonia", "rural": null, "ba_ref": "86 D2 Abonouteichos/Ionopolis", "mullen_ref": 123, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 33.767512343749999, 41.973293078124996 ] } },
{ "type": "Feature", "properties": { "id": 111, "name": "Eupsychius", "city": "Amastris", "eparchy": "Paphlagonia", "rural": null, "ba_ref": "86 C2", "mullen_ref": 119, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.385648, 41.746236578125 ] } },
{ "type": "Feature", "properties": { "id": 112, "name": "Pancharius", "city": "Ancyra", "eparchy": "Galatia", "rural": null, "ba_ref": "63 B1", "mullen_ref": 119, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.862262687499999, 39.9437925 ] } },
{ "type": "Feature", "properties": { "id": 113, "name": "Dicasius", "city": "Tabia", "eparchy": "Galatia", "rural": null, "ba_ref": "63 F1 Taouion/Tabia", "mullen_ref": 128, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 34.51833, 39.859794843750002 ] } },
{ "type": "Feature", "properties": { "id": 114, "name": "Erechthius", "city": "Gdamaua", "eparchy": "Galatia", "rural": null, "ba_ref": "63 B3 Ekdaumaua/Egdava", "mullen_ref": 123, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.5613805, 38.613668315643061 ] } },
{ "type": "Feature", "properties": { "id": 115, "name": "Philadelphus", "city": "Juliopolis", "eparchy": "Galatia", "rural": null, "ba_ref": "86 B3 Gordioukome/Iuliopolis", "mullen_ref": 124, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.6450025, 40.101202625 ] } },
{ "type": "Feature", "properties": { "id": 116, "name": "Theonas", "city": "Cyzicus", "eparchy": "Asia", "rural": null, "ba_ref": "52 B4", "mullen_ref": 92, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.883191, 40.3855645 ] } },
{ "type": "Feature", "properties": { "id": 117, "name": "Menophantus", "city": "Ephesus", "eparchy": "Asia", "rural": null, "ba_ref": "61 E2", "mullen_ref": 93, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.342402982, 37.939981166531247 ] } },
{ "type": "Feature", "properties": { "id": 118, "name": "Orion", "city": "Ilium", "eparchy": "Asia", "rural": null, "ba_ref": "56 C2 Ilium/Troia", "mullen_ref": 97, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 26.239980460150001, 39.955973235849996 ] } },
{ "type": "Feature", "properties": { "id": 119, "name": "Eutychius", "city": "Smyrna", "eparchy": "Asia", "rural": null, "ba_ref": "56 E5", "mullen_ref": 106, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.140838157821531, 38.416647207821534 ] } },
{ "type": "Feature", "properties": { "id": 120, "name": "Mithres", "city": "Hypaepa", "eparchy": "Asia", "rural": null, "ba_ref": "56 F5", "mullen_ref": 96, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.971944, 38.231156776367186 ] } },
{ "type": "Feature", "properties": { "id": 121, "name": "Paul", "city": "Anaea", "eparchy": "Asia", "rural": null, "ba_ref": "61 E2", "mullen_ref": 88, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.269570065824997, 37.790763480525001 ] } },
{ "type": "Feature", "properties": { "id": 122, "name": "Artemidorus", "city": "Sardis", "eparchy": "Lydia", "rural": null, "ba_ref": "56 G5", "mullen_ref": 105, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.043215687499995, 38.488314 ] } },
{ "type": "Feature", "properties": { "id": 123, "name": "Seras", "city": "Thyatira", "eparchy": "Lydia", "rural": null, "ba_ref": "56 F4", "mullen_ref": 109, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.836253, 38.921554843750002 ] } },
{ "type": "Feature", "properties": { "id": 124, "name": "Hetoemasius", "city": "Philadelphia", "eparchy": "Lydia", "rural": null, "ba_ref": "56 H5", "mullen_ref": 104, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.513737312499998, 38.351464843750001 ] } },
{ "type": "Feature", "properties": { "id": 146, "name": "Heraclius", "city": "Baris", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 D2", "mullen_ref": 91, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.521186312499996, 37.758075312499997 ] } },
{ "type": "Feature", "properties": { "id": 126, "name": "Agogius", "city": "Tripolis", "eparchy": "Lydia", "rural": null, "ba_ref": "65 A1", "mullen_ref": 109, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.957946812500001, 38.051938843750008 ] } },
{ "type": "Feature", "properties": { "id": 127, "name": "Florentius", "city": "\"Iron\" Ancyra", "eparchy": "Lydia", "rural": null, "ba_ref": "62 A3", "mullen_ref": 88, "notes2": "Per Mullen, the Bishop of Ancyra Sideras" }, "geometry": { "type": "Point", "coordinates": [ 28.863997, 39.159202375 ] } },
{ "type": "Feature", "properties": { "id": 128, "name": "Antiochus", "city": "Aurelianopolis", "eparchy": "Lydia", "rural": null, "ba_ref": "56 F4 Tmolos/Aureliopolis", "mullen_ref": 91, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.877777, 38.476241 ] } },
{ "type": "Feature", "properties": { "id": 129, "name": "Mark", "city": "Standus", "eparchy": "Lydia", "rural": null, "ba_ref": "62 A4 Silandos", "mullen_ref": 106, "notes2": "Per Mullen, the Bishop of Silandus" }, "geometry": { "type": "Point", "coordinates": [ 28.8260256, 38.75151735 ] } },
{ "type": "Feature", "properties": { "id": 130, "name": "Nunechius", "city": "Laodicea", "eparchy": "Phrygia", "rural": null, "ba_ref": "65 B2", "mullen_ref": 99, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.107114357810762, 37.835664902810763 ] } },
{ "type": "Feature", "properties": { "id": 131, "name": "Flaccus", "city": "Sanaus", "eparchy": "Phrygia", "rural": null, "ba_ref": "65 C2 Anaua/Sanaos", "mullen_ref": 105, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.8094275, 37.890637343750001 ] } },
{ "type": "Feature", "properties": { "id": 132, "name": "Procopius", "city": "Synnada", "eparchy": "Phrygia", "rural": null, "ba_ref": "62 E4", "mullen_ref": 108, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.5461288, 38.533228778125 ] } },
{ "type": "Feature", "properties": { "id": 133, "name": "Pisticus", "city": "Aezani", "eparchy": "Phrygia", "rural": null, "ba_ref": "62 C3", "mullen_ref": 87, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.615304375, 39.201251 ] } },
{ "type": "Feature", "properties": { "id": 134, "name": "Anthenodorus", "city": "Dorylaeum", "eparchy": "Phrygia", "rural": null, "ba_ref": "62 E2", "mullen_ref": 93, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.518304843750002, 39.77489 ] } },
{ "type": "Feature", "properties": { "id": 135, "name": "Eugenius", "city": "Eucarpia", "eparchy": "Phrygia", "rural": null, "ba_ref": "62 D5", "mullen_ref": 94, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.10502055, 38.48383464 ] } },
{ "type": "Feature", "properties": { "id": 136, "name": "Flaccus", "city": "Hierapolis", "eparchy": "Phrygia", "rural": null, "ba_ref": "65 B1", "mullen_ref": 95, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.117879929711894, 37.914405272682913 ] } },
{ "type": "Feature", "properties": { "id": 137, "name": "Eulalius", "city": "Iconium", "eparchy": "Pisidia", "rural": null, "ba_ref": "66 B1", "mullen_ref": 96, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.492295012299991, 37.871723482225001 ] } },
{ "type": "Feature", "properties": { "id": 138, "name": "Telemachus", "city": "Adrianopolis", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 D3", "mullen_ref": 95, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.015479356202324, 37.491875047062599 ] } },
{ "type": "Feature", "properties": { "id": 139, "name": "Hesychius", "city": "Neapolis", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 F2", "mullen_ref": 102, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.409025910575348, 37.998963988246203 ] } },
{ "type": "Feature", "properties": { "id": 140, "name": "Eutychius", "city": "Seleucia", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 E2", "mullen_ref": 105, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.621286333299995, 37.899250354199999 ] } },
{ "type": "Feature", "properties": { "id": 141, "name": "Granius", "city": "Limenae", "eparchy": "Pisidia", "rural": null, "ba_ref": "62 E5 Ghaziri", "mullen_ref": 100, "notes2": "Location uncertain; Annuario Pontifico 2013, 917 places it at Ghaziri" }, "geometry": { "type": "Point", "coordinates": [ 30.885211, 38.227529625 ] } },
{ "type": "Feature", "properties": { "id": 142, "name": "Tarsicius", "city": "Apamea", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 D1", "mullen_ref": 89, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.168904363, 38.065437442499999 ] } },
{ "type": "Feature", "properties": { "id": 143, "name": "Patricius", "city": "Amblada", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 G2", "mullen_ref": 88, "notes2": "Omitted in some lists" }, "geometry": { "type": "Point", "coordinates": [ 31.732775125, 37.521507687499998 ] } },
{ "type": "Feature", "properties": { "id": 144, "name": "Polycarpus", "city": "Metropolis", "eparchy": "Pisidia", "rural": null, "ba_ref": "62 E5", "mullen_ref": 101, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.489134156250003, 38.239729156250007 ] } },
{ "type": "Feature", "properties": { "id": 145, "name": "Academius", "city": "Mustene/Pappa", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 G2 Pappa/Tiberiopolis", "mullen_ref": 102, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.923399, 37.905696843750007 ] } },
{ "type": "Feature", "properties": { "id": 125, "name": "Pollion", "city": "Baris (Bagis)", "eparchy": "Lydia", "rural": null, "ba_ref": "62 B4 Bagis", "mullen_ref": 91, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.158102139107658, 38.653141962572235 ] } },
{ "type": "Feature", "properties": { "id": 147, "name": "Theodore", "city": "Uasada", "eparchy": "Pisidia", "rural": null, "ba_ref": "65 G2", "mullen_ref": 81, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.920660639370389, 37.498747644890045 ] } },
{ "type": "Feature", "properties": { "id": 148, "name": "Eudemus", "city": "Patara", "eparchy": "Lycia", "rural": null, "ba_ref": "65 B5", "mullen_ref": 103, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.315416527343746, 36.258864979199998 ] } },
{ "type": "Feature", "properties": { "id": 149, "name": "Callicles", "city": "Perge", "eparchy": "Pamphylia", "rural": null, "ba_ref": "65 E4", "mullen_ref": 104, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.853258601299999, 36.970324980299992 ] } },
{ "type": "Feature", "properties": { "id": 150, "name": "Heuresius", "city": "Termessus", "eparchy": "Pamphylia", "rural": null, "ba_ref": "65 D4", "mullen_ref": 108, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.464404213350001, 36.982197435750003 ] } },
{ "type": "Feature", "properties": { "id": 151, "name": "Zeuxius", "city": "Uarbe", "eparchy": "Pamphylia", "rural": null, "ba_ref": "65 F4 Lyrbe", "mullen_ref": 100, "notes2": "According to Mullen, the Bishop of Lyrbe" }, "geometry": { "type": "Point", "coordinates": [ 31.467495155043448, 36.853797846742381 ] } },
{ "type": "Feature", "properties": { "id": 152, "name": "Domnus", "city": "Aspendus", "eparchy": "Pamphylia", "rural": null, "ba_ref": "65 F4", "mullen_ref": 91, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.164964328400018, 36.9421718527 ] } },
{ "type": "Feature", "properties": { "id": 153, "name": "Cyntianus", "city": "Seleucia", "eparchy": "Pamphylia", "rural": null, "ba_ref": "65 F4", "mullen_ref": 106, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.245839597964, 36.846717207098031 ] } },
{ "type": "Feature", "properties": { "id": 154, "name": "Patricius", "city": "Maximianopolis", "eparchy": "Pamphylia", "rural": null, "ba_ref": null, "mullen_ref": 101, "notes2": "Not in BAtlas.  Tentatively identified with mod. Döşeme Boğazı in Mitchell, Archaeological Reports 45 (1998-9), 125-192" }, "geometry": { "type": "Point", "coordinates": [ 30.589471231596523, 37.190019020965003 ] } },
{ "type": "Feature", "properties": { "id": 155, "name": "Aphrodisius", "city": "Magydus", "eparchy": "Pamphylia", "rural": null, "ba_ref": "65 E4", "mullen_ref": 100, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.800688851475002, 36.850999884624997 ] } },
{ "type": "Feature", "properties": { "id": 156, "name": "Euphrosynus", "city": "Rhodes", "eparchy": "Islands", "rural": null, "ba_ref": "60 F3", "mullen_ref": 105, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.227611, 36.443113 ] } },
{ "type": "Feature", "properties": { "id": 157, "name": "Meliphthongus", "city": "Cos", "eparchy": "Islands", "rural": null, "ba_ref": "61 E4 Kos", "mullen_ref": 92, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.289914, 36.893669605272301 ] } },
{ "type": "Feature", "properties": { "id": 158, "name": "Eusebius", "city": "Antiochea", "eparchy": "Caria", "rural": null, "ba_ref": "65 A2", "mullen_ref": 89, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.547660734800008, 37.872865401200002 ] } },
{ "type": "Feature", "properties": { "id": 159, "name": "Ammonius", "city": "Aphrodisias", "eparchy": "Caria", "rural": null, "ba_ref": "65 A2", "mullen_ref": 90, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.7238151978, 37.705572779100009 ] } },
{ "type": "Feature", "properties": { "id": 160, "name": "Eugenius", "city": "Apollonias", "eparchy": "Caria", "rural": null, "ba_ref": "65 B2 Apollonia Salbakes", "mullen_ref": 90, "notes2": "According to Mullen, the Bishop of Apollonia Salbakes" }, "geometry": { "type": "Point", "coordinates": [ 29.038331578124996, 37.51511 ] } },
{ "type": "Feature", "properties": { "id": 161, "name": "Letodorus", "city": "Cibrya", "eparchy": "Caria", "rural": null, "ba_ref": "65 B3", "mullen_ref": 92, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.49215475, 37.159805260937503 ] } },
{ "type": "Feature", "properties": { "id": 162, "name": "Eusebius", "city": "Miletus", "eparchy": "Caria", "rural": null, "ba_ref": "61 E2", "mullen_ref": 101, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.275878796399997, 37.531196861875003 ] } },
{ "type": "Feature", "properties": { "id": 163, "name": "Stephen", "city": "Batata", "eparchy": "Isauria", "rural": null, "ba_ref": "66 C1 Barata", "mullen_ref": 77, "notes2": "According to Mullen, the Bishop of Barata" }, "geometry": { "type": "Point", "coordinates": [ 33.113227237427751, 37.447137737427752 ] } },
{ "type": "Feature", "properties": { "id": 164, "name": "Athenaeus", "city": "Coropissus", "eparchy": "Isauria", "rural": null, "ba_ref": "66 C3 Alahan", "mullen_ref": 79, "notes2": "Per Mullen, \"probably modern Alahan\"" }, "geometry": { "type": "Point", "coordinates": [ 33.36583238927215, 36.820510013841741 ] } },
{ "type": "Feature", "properties": { "id": 165, "name": "Aedesius", "city": "Claudiopolis", "eparchy": "Isauria", "rural": null, "ba_ref": "66 C3 Ninica/Col. Iulia Augusta Felix/Claudiopolis", "mullen_ref": 79, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 33.439403333299992, 36.642524333300003 ] } },
{ "type": "Feature", "properties": { "id": 166, "name": "Agapius", "city": "Seleucia", "eparchy": "Isauria", "rural": null, "ba_ref": "66 D4", "mullen_ref": 81, "notes2": "According to Mullen, the Bishop of Seleucia Tracheia" }, "geometry": { "type": "Point", "coordinates": [ 33.9214625, 36.379274 ] } },
{ "type": "Feature", "properties": { "id": 169, "name": "Nestor", "city": "Syedra", "eparchy": "Isauria", "rural": null, "ba_ref": "66 A4", "mullen_ref": 81, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.147959586689232, 36.446241573589241 ] } },
{ "type": "Feature", "properties": { "id": 168, "name": "Antonius", "city": "Antiochea", "eparchy": "Isauria", "rural": null, "ba_ref": "66 A4 Antiocheia epi Krago", "mullen_ref": 77, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.429412771089233, 36.15302852891076 ] } },
{ "type": "Feature", "properties": { "id": 170, "name": "Hesychius", "city": "Rural", "eparchy": "Isauria", "rural": 1.0, "ba_ref": "66 A2", "mullen_ref": 76, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.90207568, 36.73951642 ] } },
{ "type": "Feature", "properties": { "id": 171, "name": "Cyril", "city": "Humanada", "eparchy": "Isauria", "rural": null, "ba_ref": "65 G3 Homonadeis65 G3 Homonadeis", "mullen_ref": 79, "notes2": "According to Mullen, the Bishop of Homonada.  BAtlas gives the tribe Homonadeis, not a city." }, "geometry": { "type": "Point", "coordinates": [ 31.9510795, 37.227444631286119 ] } },
{ "type": "Feature", "properties": { "id": 172, "name": "Anatolius", "city": "Rural", "eparchy": "Isauria", "rural": 1.0, "ba_ref": "66 A2", "mullen_ref": 76, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.90207568, 36.73951642 ] } },
{ "type": "Feature", "properties": { "id": 173, "name": "Gordianus", "city": "Rural", "eparchy": "Isauria", "rural": 1.0, "ba_ref": "66 A2", "mullen_ref": 117, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.90207568, 36.73951642 ] } },
{ "type": "Feature", "properties": { "id": 175, "name": "Quintus", "city": "Rural", "eparchy": "Isauria", "rural": 1.0, "ba_ref": "66 A2", "mullen_ref": 76, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.90207568, 36.73951642 ] } },
{ "type": "Feature", "properties": { "id": 177, "name": "Aquilas", "city": "Rural", "eparchy": "Isauria", "rural": 1.0, "ba_ref": "66 A2", "mullen_ref": 76, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.90207568, 36.73951642 ] } },
{ "type": "Feature", "properties": { "id": 174, "name": "Paul", "city": "Laranda", "eparchy": "Isauria", "rural": null, "ba_ref": "66 C2", "mullen_ref": 80, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 33.224515687500002, 37.178450666700002 ] } },
{ "type": "Feature", "properties": { "id": 176, "name": "Tiberius", "city": "Ilistra", "eparchy": "Isauria", "rural": null, "ba_ref": "66 C2", "mullen_ref": 79, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 33.0271738207, 37.199390039249998 ] } },
{ "type": "Feature", "properties": { "id": 167, "name": "Silvanus", "city": "Metropolis", "eparchy": "Isauria", "rural": null, "ba_ref": "66 A2 Isaura Vetus/Isauropolis?", "mullen_ref": 79, "notes2": "According to Mullen, the Bishop of Isaura Palaia/Vetus" }, "geometry": { "type": "Point", "coordinates": [ 32.24503, 37.192321368713877 ] } },
{ "type": "Feature", "properties": { "id": 178, "name": "Cyril", "city": "Paphus", "eparchy": "Cyprus", "rural": null, "ba_ref": "72 A3 (Nea) Paphos", "mullen_ref": 81, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 32.40657911, 34.75716406 ] } },
{ "type": "Feature", "properties": { "id": 179, "name": "Gelasius", "city": "Salamis", "eparchy": "Cyprus", "rural": null, "ba_ref": "72 D2", "mullen_ref": 81, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 33.902124544925002, 35.179581302 ] } },
{ "type": "Feature", "properties": { "id": 180, "name": "Eusebius", "city": "Nicomedia", "eparchy": "Bithynia", "rural": null, "ba_ref": "52 F3", "mullen_ref": 125, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.921351843750017, 40.766655343750003 ] } },
{ "type": "Feature", "properties": { "id": 181, "name": "Theognis", "city": "Nicaea", "eparchy": "Bithynia", "rural": null, "ba_ref": "52 F4 Helikore/Nicaea", "mullen_ref": 125, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.716146510449995, 40.428361244824998 ] } },
{ "type": "Feature", "properties": { "id": 182, "name": "Maris", "city": "Chalcedon", "eparchy": "Bithynia", "rural": null, "ba_ref": "53 B3", "mullen_ref": 122, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.026155210937493, 40.98320989453125 ] } },
{ "type": "Feature", "properties": { "id": 183, "name": "Cyrion", "city": "Cius", "eparchy": "Bithynia", "rural": null, "ba_ref": "52 E4 Prusias ad Mare/Kios", "mullen_ref": 124, "notes2": "According to Mullen, the Bishop of Kios" }, "geometry": { "type": "Point", "coordinates": [ 29.156573105468748, 40.432560552734373 ] } },
{ "type": "Feature", "properties": { "id": 184, "name": "Hesychius", "city": "Prusa", "eparchy": "Bithynia", "rural": null, "ba_ref": "52 E4", "mullen_ref": 127, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 29.063635394531246, 40.181708314453118 ] } },
{ "type": "Feature", "properties": { "id": 185, "name": "Gorgonius", "city": "Apollonias", "eparchy": "Bithynia", "rural": null, "ba_ref": "52 D4", "mullen_ref": 120, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.678608131286119, 40.177292368713879 ] } },
{ "type": "Feature", "properties": { "id": 186, "name": "George", "city": "Prusias", "eparchy": "Bithynia", "rural": null, "ba_ref": "86 B3", "mullen_ref": 127, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 31.120408666700001, 40.914191333300003 ] } },
{ "type": "Feature", "properties": { "id": 187, "name": "Euethius", "city": "Adrianopolis", "eparchy": "Bithynia", "rural": null, "ba_ref": "62 A2 Hadrianoi", "mullen_ref": 123, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.99446026257224, 39.906135 ] } },
{ "type": "Feature", "properties": { "id": 188, "name": "Theophanes", "city": "Rural", "eparchy": "Bithynia", "rural": 1.0, "ba_ref": "52 E4", "mullen_ref": 117, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.47447435, 40.71017794 ] } },
{ "type": "Feature", "properties": { "id": 190, "name": "Eulalius", "city": "Rural", "eparchy": "Bithynia", "rural": 1.0, "ba_ref": "52 E4", "mullen_ref": 117, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 30.47447435, 40.71017794 ] } },
{ "type": "Feature", "properties": { "id": 189, "name": "Rufus", "city": "Caesarea", "eparchy": "Bithynia", "rural": null, "ba_ref": "52 D4 Helge/Caesarea Germanice", "mullen_ref": 121, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.908028887499995, 40.17725495 ] } },
{ "type": "Feature", "properties": { "id": 191, "name": "Phaedrus", "city": "Heraclea", "eparchy": "Europa", "rural": null, "ba_ref": "52 B3 Perinthus/Heraclea", "mullen_ref": 148, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.952973, 40.973210265624999 ] } },
{ "type": "Feature", "properties": { "id": 192, "name": "Protogenes", "city": "Serdica (Sofia)", "eparchy": "Dacia", "rural": null, "ba_ref": "21 F7", "mullen_ref": 174, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 23.342707894531252, 42.722642894531248 ] } },
{ "type": "Feature", "properties": { "id": 193, "name": "Mark", "city": "Tomis (in Scythia Minor?)", "eparchy": "Dacia", "rural": null, "ba_ref": "22 F4", "mullen_ref": 150, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 28.650103710937501, 44.172948052734377 ] } },
{ "type": "Feature", "properties": { "id": 194, "name": "Pistus", "city": "Marcianopolis", "eparchy": "Mysia", "rural": null, "ba_ref": "22 E5", "mullen_ref": 149, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 27.585033, 43.21332125 ] } },
{ "type": "Feature", "properties": { "id": 195, "name": "Alexander", "city": "Thessalonica", "eparchy": "Macedonia", "rural": null, "ba_ref": "50 C3", "mullen_ref": 165, "notes2": "Mladjov gives Budis as a potential alternative name." }, "geometry": { "type": "Point", "coordinates": [ 22.952885, 40.629806843750004 ] } },
{ "type": "Feature", "properties": { "id": 196, "name": "Pudens", "city": "Stobi", "eparchy": "Macedonia", "rural": null, "ba_ref": "50 A1", "mullen_ref": 165, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 21.974401113900001, 41.553061772675001 ] } },
{ "type": "Feature", "properties": { "id": 197, "name": "Pistus", "city": "Athens", "eparchy": "Achaea", "rural": null, "ba_ref": "59 B3", "mullen_ref": 159, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 23.723194592699997, 37.971879450899998 ] } },
{ "type": "Feature", "properties": { "id": 198, "name": "Strategius", "city": "Hephaestias (Lemnos)", "eparchy": "Achaea", "rural": null, "ba_ref": "56 A2", "mullen_ref": 162, "notes2": null }, "geometry": { "type": "Point", "coordinates": [ 25.318503321089231, 39.964307078910764 ] } },
{ "type": "Feature", "properties": { "id": 199, "name": "Cleonicus", "city": "Thebes (in Phthiotis)", "eparchy": "Thessaly", "rural": null, "ba_ref": "55 D2", "mullen_ref": 165, "notes2": "Mladjov specifies Thebes in Phthiotis.  Mullen argues contra that Cleonicus was Bishop of Thebes in Achaea (mod. Thivai)" }, "geometry": { "type": "Point", "coordinates": [ 22.76113799, 39.27265465 ] } }
]
}

// create map
const map = L.map('map', {
  // give it inertia so it feels good
  inertia: true
// set view and zoom to correct area so (most of) the points are in frame when the map loads
}).setView([37, 28], 6);

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
  icon: starIcon
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
          icon: ruralIcon 
        })
      // otherwise (if the feature is not a rural bishop)  
      } else {
        // return a marker object at the bishop's coordinates    
        return L.marker(latlng, {
          // give it the located icon    
          icon: locatedIcon          
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

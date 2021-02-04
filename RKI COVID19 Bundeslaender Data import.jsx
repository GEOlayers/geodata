//Dieses Script importiert einen aktuellen Datensatz des Robert-Koch-Instituts zu COVID19 Erkrankungen. Mehr infos zur Quelle gibt es hier: https://npgeo-corona-npgeo-de.hub.arcgis.com/
//Quellenanganbe: "Bundesamt für Kartographie und Geodäsie / Robert Koch-Institut"

geolayers3.addToBrowser("https://opendata.arcgis.com/datasets/ef4b445a53c1406892257fe63129a8ea_0.geojson", {namingProp:"LAN_ew_GEN", name:"RKI Bundesländer " + (new Date).toDateString()})
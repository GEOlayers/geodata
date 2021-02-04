//Dieses Script importiert einen aktuellen Datensatz des Robert-Koch-Instituts zu COVID19 Erkrankungen. Mehr infos zur Quelle gibt es hier: https://npgeo-corona-npgeo-de.hub.arcgis.com/
//Quellenanganbe: "Bundesamt für Kartographie und Geodäsie / Robert Koch-Institut"

geolayers3.addToBrowser("https://opendata.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0.geojson", {namingProp:"GEN", name:"RKI Landkreise " + (new Date).toDateString()})
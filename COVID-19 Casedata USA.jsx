//Imports COVID19 Casedata for the USA. Find more info on the data here: https://coronavirus-disasterresponse.hub.arcgis.com/#get-data
(function(){
    var featureServiceUrl = "https://opendata.arcgis.com/datasets/628578697fb24d8ea4c32fa0c5ae1843_0.geojson"
    geolayers3.fetchJson(featureServiceUrl, function(err, data){
        if(err){
            alert(err.message)
        }else{
            data.features.forEach(function(feature){
                feature.properties["confirmed:latest"] = feature.properties.Confirmed
                feature.properties["deaths:latest"] = feature.properties.Deaths
                feature.properties["deathsrate:latest"] = Math.round(feature.properties.Deaths / feature.properties.Confirmed * 10000) / 100
                feature.properties["name"] = feature.properties.Combined_Key || feature.properties.Province_State || feature.properties.Country_Region
            })
            data.properties = (data.properties || {})
            data.properties.source = "https://coronavirus-disasterresponse.hub.arcgis.com/datasets/628578697fb24d8ea4c32fa0c5ae1843_0"
            data.properties.GEOlayersDisplayName = "COVID19 US Latest" + ((data.features[0].properties && data.features[0].properties.Last_Update)?" (" + data.features[0].properties.Last_Update.split("T")[0] + ")":"")
        geolayers3.addToBrowser(data)
        }
    })
})()

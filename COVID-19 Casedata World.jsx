//Import COVID19 Casedata for all Countries. Find more info on the data here: https://coronavirus-disasterresponse.hub.arcgis.com/#get-data
(function(){
    var featureServiceUrl = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/2/query?outFields=*&where=1%3D1&f=geojson"
    geolayers3.fetchJson(featureServiceUrl, function(err, data){
            if(err){
                alert(err.message)
            }else{
                data.features.forEach(function(feature){
                    feature.properties["confirmed:latest"] = feature.properties["confirmed:timeline"] = feature.properties.Confirmed
                    feature.properties["deaths:latest"] = feature.properties["deaths:timeline"] = feature.properties.Deaths
                    feature.properties["deathsrate:latest"] = feature.properties["deathsrate:timeline"] = Math.round(feature.properties.Deaths / feature.properties.Confirmed * 10000) / 100
                    feature.properties["name"] = feature.properties.Combined_Key || feature.properties.Province_State || feature.properties.Country_Region
                })
                data.properties = (data.properties || {})
                data.properties.source = "https://coronavirus-disasterresponse.hub.arcgis.com/datasets/bbb2e4f589ba40d692fab712ae37b9ac"
                data.properties.GEOlayersDisplayName = "COVID19 World Latest" + ((data.features[0].properties && data.features[0].properties.Last_Update)?" (" + new Date(data.features[0].properties.Last_Update).toDateString() + ")":"")
            geolayers3.addToBrowser(data)
            }
    })
})()

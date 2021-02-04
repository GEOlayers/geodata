//imports charging stations inside the current view
geolayers3.addToBrowser({
        type:"overpass",
        query:'[out:json][timeout:25];(node["amenity"="charging_station"]({{bbox}}););out body;>;out skel qt;'
})

//Imports charging stations inside the current view. You should zoom to city level.
geolayers3.addToBrowser({
        type:"overpass",
        query:'[out:json][timeout:25];(node["amenity"="charging_station"]({{bbox}}););out body;>;out skel qt;'
})

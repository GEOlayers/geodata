//Imports hospitals inside the current view. You should zoom to country level at least.
geolayers3.addToBrowser({
        type:"overpass",
        query:'[out:json][timeout:25];(node["amenity"="hospital"]({{bbox}});relation["amenity"="hospital"]({{bbox}}););out body;>;out skel qt;'
})

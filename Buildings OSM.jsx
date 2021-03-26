//Imports OSM Building data for the current view.
geolayers3.addToBrowser({
    type: 'overpass',
    query: '[out:json][timeout:25];(way["building"]({{bbox}});relation["building"]({{bbox}});way["building:part"]({{bbox}});relation["building:part"]({{bbox}}););out body;>;out skel qt;'
})

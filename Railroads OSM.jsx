//Imports OpenStreetMap Railroad features of the current view
geolayers3.addToBrowser({
    type: 'overpass', 
    query: '[out:json][timeout:25];\
    (\
        relation["route"="railway"]({{bbox}});\
        relation["railway"]({{bbox}});\
    );\
    out body;>;out skel qt;'
},function(err, data){
    if(err){
        alert(err.message || "An Error occured!")
    }
})

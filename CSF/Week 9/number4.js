var map = {
    b : "naughty",
    f : "naughty",
    k : "naughty",
    g : "nice",
    s : "nice",
    n : "nice"
};

function whatListAmIOn(actions){
    var total = {
        naughty : 0,
        nice : 0
    };
    
    for(var i=0;i<actions.length;i++){
        var firstLetter = actions[i].charAt(0);
        if(map.hasOwnProperty(firstLetter)){
            total[map[firstLetter]]++;
        }
    }
    return total.naughty >= total.nice ? "naughty" : "nice";
}
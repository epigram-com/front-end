
$(document).on('DOMNodeInserted', function(element) {
    var node = element.target;
    var post_nodes = $(node).find("div._29_4");
    for(elt of post_nodes){
        var z = elt.childNodes;
        if (z[0]) {
            var m = z[0].getElementsByClassName("_59tj _2iau");
            if (m.length) {
                var mbs = z[0].getElementsByClassName("mbs");
                console.log(mbs);
                var child = elt.querySelector("a");
                var y = child.getAttribute("href");
                var link = y.toString();
                chrome.storage.sync.set({ link : link ,post : mbs}, function() {
                    console.log('Value is set to ' + mbs);
                });
                chrome.storage.sync.get([ 'post' ], function(result) {
                    console.log('Value currently is ' + result.link);
                });

            }
        }
    }

});
// var elements = document.getElementsByClassName("_3ekx _29_4");
// for(elt of elements){
//     var z = elt.childNodes;
//     if(z[0]) {
//         var m = z[0].getElementsByClassName("_59tj _2iau");
//         if (m.length) {
//             var child = elt.querySelector("a");
//             var y = child.getAttribute("href");
//             console.log(y.toString());
//         }
//     }
// }
var script = document.createElement('script');
script.src = 'jquery-3.3.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


$(document).on('DOMNodeInserted', function(elt) {
    if(elt.className == "_3ekx _29_4"){
        var z = elt.childNodes;
        if(z[0]) {
            var m = z[0].getElementsByClassName("_59tj _2iau");
            if (m.length) {
                var child = elt.querySelector("a");
                var y = child.getAttribute("href");
                console.log(y.toString());
            }
        }
    }
});
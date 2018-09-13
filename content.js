let HTTP_SERVER = "http://localhost:8081/";
function main(node) {
    var post_nodes = $(node).find("div._29_4").filter("._3ekx").find("._3n1k").find(".mbs");
    var queries = {};
    for (i = 0; i < post_nodes.length; i++) {
        var http_query = new XMLHttpRequest();
        queries[i] = http_query;
    }

    for (j = 0; j < post_nodes.length; j++) {
        var current_post = post_nodes[j];
        queries[j].onreadystatechange =
            get_callback_for_http(current_post);
    }

    for (k = 0; k < post_nodes.length; k++) {
        var link = get_link(post_nodes[k]);
        queries[k].open("GET",HTTP_SERVER + "?link=" + link,true);
        queries[k].send();
    }
}

$(document).each(function() {
    main(this);
});

$(document).on('DOMNodeInserted', function(event) {
    main(event.target);
});
// chrome.storage.sync.set({ link : link ,post : mbs}, function() {
//     console.log('Value is set to ' + mbs);
// });
// chrome.storage.sync.get([ 'post' ], function(result) {
//     console.log('Value currently is ' + result.link);
// });

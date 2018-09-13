$.fn.exists = function () {
    return this.length !== 0;
}

function get_title_node(post_node) {
    return $(post_node).children("a")[0];
}

function get_epigram_node(post_node) {
    var epigram_nodes = $(post_node).children(".epigram");
    if (!epigram_nodes.length) {
        epigram_node = document.createElement("a");
        epigram_node.className = "epigram";
        post_node.append(epigram_node);
    }
    var epigram_node = epigram_nodes[0];
    return epigram_node;
}

function get_link(post_node) {
    return get_title_node(post_node).getAttribute("href");
}

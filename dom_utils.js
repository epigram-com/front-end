$.fn.exists = function () {
    return this.length !== 0;
}

function get_title_node(post_node) {
    return $(post_node).children("a");
}

function get_epigram_node(post_node) {
    var epigram_node = $(post).children(".epigram");
    if (!epigram_node.exists()) {
        epigram_node = document.createElement("a");
        epigram_node.className = "epigram";
        post_node.append(epigram_node);
    }
    return epigram_node;
}

function get_link(post_node) {
    return get_title_node(post_node).getAttribute("href");
}

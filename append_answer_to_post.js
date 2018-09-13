function get_callback_for_http(post) {
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            var epigram_node = get_epigram_node(post);
            var text_node = document.createTextNode(" | " + this.responseText);
            epigram_node.appendChild(text_node);
        }
    };
}

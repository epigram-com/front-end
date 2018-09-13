function append_answer_to_post(post, answer) {
    var epigram_node = get_epigram_node(post);
    var text_node = document.createTextNode(" | " + answer);
    epigram_node.appendChild(text_node);
}
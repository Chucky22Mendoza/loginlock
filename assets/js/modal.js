function setValModal(getURL, getNameProyect) {
    $('#modalTitle').text(getNameProyect);
    $('#modalImage').attr("src", getURL);
}

$('.modal-change').click(function(){
    var url = $(this).attr('src');
    var alt = $(this).attr('alt');
    setValModal(url, alt);
});
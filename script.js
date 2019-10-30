// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yFYR8aMLojbJbkXNqaCi4kS0HdHLDRUb
$('#submitBtn').click(function (e) {
    e.preventDefault();
    var searchQuery = $('#searchTerm');
    var startYear = $('#startYear');
    var endYear = $('#endYear');
    var dateQuery = '&begin_date=' + startYear + '&';
    var dateQuery2 = '&end_date=' + endYear + '&';
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchQuery + '&' + dateQuery + dateQuery2 + 'api-key=yFYR8aMLojbJbkXNqaCi4kS0HdHLDRUb';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

});

$("#clearBttn").on("click", function(){
    $("#articles").html("")
})
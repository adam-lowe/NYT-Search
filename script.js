// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yFYR8aMLojbJbkXNqaCi4kS0HdHLDRUb
$('#submitBtn').click(function (e) {
    e.preventDefault();
    var searchQuery = $('#searchTerm').val().trim();
    var startYear = $('#startYear').val().trim();
    var endYear = $('#endYear').val().trim();
    var dateQuery = '&begin_date=' + startYear + "0101";
    var dateQuery2 = '&end_date=' + endYear +"1231";
    console.log(searchQuery, startYear, endYear, dateQuery, dateQuery2)
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchQuery + dateQuery + dateQuery2 + '&api-key=s0Vby540JbknjxqnoyJ4i7cw5u8mwQ09';
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
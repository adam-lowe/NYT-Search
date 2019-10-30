// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yFYR8aMLojbJbkXNqaCi4kS0HdHLDRUb
$('#searchBtn').click(function (e) { 
    e.preventDefault();
    var searchQuery = $('#searchParam')
    var startDate = $('#start')
    var EndDate = $('#end')
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchQuery + '&api-key=yFYR8aMLojbJbkXNqaCi4kS0HdHLDRUb'
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(response.Runtime);
      });
    
});
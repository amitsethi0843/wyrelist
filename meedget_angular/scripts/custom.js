function getQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(update)
        .fail(handleErr);

    function update(data) {
        $("#quoteText").html(data.quoteText);
        $("#quoteAuthor").html(data.quoteAuthor);
    }

    function handleErr(data) {
        console.log(data);
    }
}
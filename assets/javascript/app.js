let APIkey = "&api_key=WFWKuEi7c2nOXtzy42TUXMkcLKkB0jsS",

gifbtns = []



$("#submitItem").on("click", function(event){
    query = $("input").val(),
    queryUrl = "https://api.giphy.com/v1/gifs/random?" + APIkey + "&q="+query

    event.preventDefault()

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response.data.image_original_url)
        let gifImg = $("<img>")
        gifImg.attr("value", query)
        gifImg.attr("src", response.data.image_original_url)
        $("#gifHolder").append(gifImg)
    })
    if(query !== "") {
    gifbtns.push(query)
    $("#addItem").val("")
}


console.log(gifbtns)

})
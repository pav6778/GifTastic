$(document).ready(function(){
  let APIkey = "&api_key=WFWKuEi7c2nOXtzy42TUXMkcLKkB0jsS"

  $("#submitItem").on("click", function(e){
    e.preventDefault()
    query = $("#addItem").val()
    if(query !== ""){
      var btns = $("<button>")
      btns.attr("value", query)
      btns.addClass("btns")
      $("#btnHolder").append(btns)
      btns.text(query)
      $("#addItem").val("")
    }
  })
  $(document).on("click", ".btns", function(){
    $("#gifHolder").text("")
    query = $(this).val()  
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q="+query+APIkey+"&limit=10"
          $.ajax({
              url: queryUrl,
              method: "GET"
          }).then(function(response){
            for(var i = 0; i < response.data.length; i++) {
            var imgsrc = response.data[i].images.downsized_medium.url
            var gifs = $("<img>")
            gifs.attr("id", query)
            gifs.attr("src", imgsrc)
            .width("250px")
            $("#gifHolder").prepend(gifs)
          }
            console.log(response.data)
          });
      })
  
  });
  
  
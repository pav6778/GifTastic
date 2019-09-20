$(document).ready(function(){
  let APIkey = "&api_key=WFWKuEi7c2nOXtzy42TUXMkcLKkB0jsS"
var num = 0;
  $("#submitItem").on("click", function(e){
    num = 0
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
    let offset = "&offset=" + num
    query = $(this).val()  
    let queryUrl = "https://api.giphy.com/v1/gifs/search?q="+query+APIkey+"&limit=10"+offset
          $.ajax({
              url: queryUrl,
              method: "GET"
          }).then(function(response){
            for(let i = 0; i < response.data.length; i++) {
            let imgsrc = response.data[i].images.downsized_medium.url
            let gifs = $("<img>")
            gifs.attr("id", query)
            gifs.attr("src", imgsrc)
            .width("250px")
            $("#gifHolder").prepend(gifs)
          }
          });
          num+= 10;
        
      })
  
  });
  
  
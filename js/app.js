/*
  Please add all Javascript code to this file.
*/

$(function () {

    $.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=8da72323d5d14430bb987b68ae63e07f",
        function (res) {
            console.log(res.articles);

            res.articles.forEach(ele => {
                console.log(ele.title);
                console.log(ele.url);
                $("#main").find(".article").append(`
           
           <section class="featuredImage">
           <img src="${ele.urlToImage}" alt="" />
           </section>
           <section class="articleContent">
            <a href="${ele.url}"><h3>${ele.title}</h3></a>
            <h6>${ele.description}</h6>
           </section>

       <section class="impressions">
         526
       </section>

       <div class="clearfix"></div>
       
           `)

            })

        });
    $('.loader').hide();
});


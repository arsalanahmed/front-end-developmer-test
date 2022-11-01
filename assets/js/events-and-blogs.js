var czgEvents = $('#events .owl-carousel');
czgEvents.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})



// getting data
$(document).ready(function () {

  $.ajax({
    url: "https://www.creativezone.ae/api/?data_type=event", success: function (result) {
      //these 3 lines kill the owl, and returns the markup to the initial state
      czgEvents.trigger('destroy.owl.carousel');
      czgEvents.find('.owl-stage-outer').children().unwrap();
      czgEvents.removeClass("owl-center owl-loaded owl-text-select-on");
      content = '';
      if (result != "undefined") {
        for (var i = 0; i < 10; i++) {
          // console.log(result[i]);
          // console.log(result[i].title);
          var descp = jQuery.trim(result[i].description).substring(0, 80).split(" ").slice(0, -1).join(" ") + "...";
          // console.log(descp);
          // console.log(result[i].original_photo);

          content += '<div class="card item h-100">'
          content += '<img src="' + result[i].photo + '" class="card-img-top" alt="' + result[i].name + '">'
          content += '<div class="card-body">'
          content += '<h5 class="card-title ff-arvo text-primary-color owl-card-heading" alt="' + result[i].name + '">' + result[i].name + '</h5>'
          content += '<p class="card-text ff-arvo owl-card-excerpts">' + descp + '</p>'
          content += '</div>'
          content += '</div>'
        }
      } else {
        console.log('undefined');
      }
      czgEvents.html(content);

      //reinitialize the carousel (call here your method in which you've set specific carousel properties)
      czgEvents.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
  });
});

var czgBlogs = $('#blogs .owl-carousel');
czgBlogs.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
// getting data
$(document).ready(function () {

  $.ajax({
    url: "https://www.creativezone.ae/api/?data_type=blog", success: function (result) {
      //these 3 lines kill the owl, and returns the markup to the initial state
      czgBlogs.trigger('destroy.owl.carousel');
      czgBlogs.find('.owl-stage-outer').children().unwrap();
      czgBlogs.removeClass("owl-center owl-loaded owl-text-select-on");
      var blogContent = '';
      if (result != null || result != "undefined") {
        for (var i = 0; i < 10; i++) {
          // console.log(result[i]);
          // console.log(result[i].title);
          var descp = jQuery.trim(result[i].short_description).substring(0, 80).split(" ").slice(0, -1).join(" ") + "...";
          // console.log(descp);
          // console.log(result[i].original_photo);

          blogContent += '<div class="card item h-100">'
          blogContent += '<img src="' + result[i].original_photo + '" class="card-img-top" alt="' + result[i].title + '">'
          blogContent += '<div class="card-body">'
          blogContent += '<h5 class="card-title ff-arvo text-primary-color owl-card-heading" alt="' + result[i].title + '">' + result[i].title + '</h5>'
          blogContent += '<p class="card-text ff-arvo owl-card-excerpts">' + descp + '</p>'
          blogContent += '</div>'
          blogContent += '</div>'
        }
      }
      czgBlogs.html(blogContent);

      //reinitialize the carousel (call here your method in which you've set specific carousel properties)
      czgBlogs.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
  });
});
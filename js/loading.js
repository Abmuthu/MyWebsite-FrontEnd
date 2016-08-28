$(function(){
      $('#home').addClass('active');
      $("#middle").load("html/middlebox.html");
      alert("For best experience please view the site in fullscreen Desktop environment. Mobile support coming soon...");
      $("#skills").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
      	$("#middle").load("html/skillchart.html", function(){
            $("#middle").find("#chart_div").each(function(){
                drawChart();
            });
        });

  	  });
      $("#home").click(function(){
        $("#myprofile").removeClass('active');
        $("#home").addClass('active');
        $("#middle").load("html/middlebox.html");
      });
      $("#brand").click(function(){
        $("#myprofile").removeClass('active');
        $("#home").addClass('active');
        $("#middle").load("html/middlebox.html");
      });
      $("#brand_img").click(function(){
        $("#myprofile").removeClass('active');
        $("#home").addClass('active');
        $("#middle").load("html/middlebox.html");
      });
      $("#image").click(function(){
        $('#github').tooltip('close');
      });
      $("#interests").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
        $("#middle").load("html/interests.html", function(){
          $('.carousel').carousel({
            interval: 2000
           });
        });
      });
      $("#experience").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
        $("#middle").load("html/experience.html");
            
      });
      $("#projects").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
        $("#middle").load("html/projects.html");
      });
});


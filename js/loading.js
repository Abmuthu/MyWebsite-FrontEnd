$(function(){
      // Initially make home active, load middlebox.html and alert User
      $('#home').addClass('active');
      $("#middle").load("html/middlebox.html");
      alert("For best experience please view the site in fullscreen Desktop environment. Mobile support coming soon...");
      // Onclick Skills goto skills.html
      $("#skills").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
      	$("#middle").load("html/skillchart.html", function(){
            $("#middle").find("#chart_div").each(function(){
                drawChart();
            });
        });

  	  });
      // Onclick Home goto home.html
      $("#home").click(function(){
        $("#myprofile").removeClass('active');
        $("#home").addClass('active');
        $("#middle").load("html/middlebox.html");
      });
      // Onclick brand name goto home.html
      $("#brand").click(function(){
        $("#myprofile").removeClass('active');
        $("#home").addClass('active');
        $("#middle").load("html/middlebox.html");
      });
      // Onclick brand image goto home.html
      $("#brand_img").click(function(){
        $("#myprofile").removeClass('active');
        $("#home").addClass('active');
        $("#middle").load("html/middlebox.html");
      });
      // Onclick Interests goto interests.html
      $("#interests").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
        $("#middle").load("html/interests.html", function(){
          $('.carousel').carousel({
            interval: 2000
           });
        });
      });
      // Onclick Experience goto experience.html
      $("#experience").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
        $("#middle").load("html/experience.html");
            
      });
      // Onclick Projects goto projects.html
      $("#projects").click(function(){
        $("#home").removeClass('active');
        $("#myprofile").addClass('active');
        $("#middle").load("html/projects.html");
      });
      // Script for tooltip(hint while hoverin social network images)
      $("[data-toggle = 'tooltip']").tooltip({
          trigger : 'hover'
      });
      // Onclick social networking icons close the tooltip
      $("#image").click(function(){
        $('#github').tooltip('close');
      });
});


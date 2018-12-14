$(document).ready(function()  {
  
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    
    if(scroll >= 400) {
      document.getElementById("Navbar").style.marginTop = 0;
      document.getElementById("Navbar").style.position = "fixed";
      document.getElementById("navbar-underly").style.marginTop = 0;
      document.getElementById("navbar-underly").style.position = "fixed";
    }
    
    if(scroll < 400)  {
      document.getElementById("Navbar").style.marginTop = 400;
      document.getElementById("Navbar").style.position = "absolute";
      document.getElementById("navbar-underly").style.marginTop = 400;
      document.getElementById("navbar-underly").style.position = "absolute";
    }
  });
  
});
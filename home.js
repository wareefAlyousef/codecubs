document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.getElementById('navbarToggle');
    var navbarMenu = document.getElementById('navbarMenu');
  
    navbarToggle.addEventListener('click', function () {
      navbarMenu.classList.toggle('show');
    });

    // Close the menu if a menu item is clicked
  navbarMenu.addEventListener('click', function () {
    navbarMenu.classList.remove('show');
  });
  
});

  


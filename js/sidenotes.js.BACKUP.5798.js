$(function() {
  
  var main = document.getElementById('main');
  
  $(main).blur(function() {
    localStorage.setItem('mainData', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('mainData') ) {
    main.innerHTML = localStorage.getItem('mainData'); 
  }
<<<<<<< HEAD
  
=======

>>>>>>> master
  var sidebar = document.getElementById('sidebar');
  
  $(sidebar).blur(function() {
    localStorage.setItem('sidebarData', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('sidebarData') ) {
    sidebar.innerHTML = localStorage.getItem('sidebarData'); 
  }
<<<<<<< HEAD



=======
  
>>>>>>> master
  // to reset
  // localStorage.clear();
  
});
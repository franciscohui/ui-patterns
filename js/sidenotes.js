$(function() {
  
  var main = document.getElementById('main');
  
  $(main).blur(function() {
    localStorage.setItem('mainData', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('mainData') ) {
    main.innerHTML = localStorage.getItem('mainData'); 
  }

  var sidebar = document.getElementById('sidebar');
  
  $(sidebar).blur(function() {
    localStorage.setItem('sidebarData', this.innerHTML);
  });
  
  // when the page loads
  if ( localStorage.getItem('sidebarData') ) {
    sidebar.innerHTML = localStorage.getItem('sidebarData'); 
  }
  
  // to reset
  // localStorage.clear();
  
});
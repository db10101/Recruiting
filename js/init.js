(function($){
  $(function(){

    $('.sidenav').sidenav();
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, options);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('select').formSelect();
    });
          
  }); // end of document ready
})(jQuery); // end of jQuery name space

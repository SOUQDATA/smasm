jQuery(document).ready(function(){
	jQuery("a img").hover(function() {
			jQuery(this).stop().animate({ opacity: ".7"}, 400);
		},function(){
			jQuery(this).stop().animate({ opacity: "1"}, 300);	
	});
     jQuery('.right_menu ul a').hover(function(event) {      $(this).stop().animate( {
         textIndent : "55px" }
      , {
         duration : 'fast', 
         easing : 'easeOutElastic'}
      ); }
   , function() {
     jQuery(this).stop().animate( {
         textIndent : "30px" }
      , {
         duration : 'fast', 
         easing : 'easeOutElastic'}
      ); }
   ); 
jQuery
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

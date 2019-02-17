$(document).ready(function (){
  var a = $('.pdf-js').click(function(event){
      
     var g=  ga('send', 'event', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: event.target.href
      });
    // console.log(event.target.href);
    return g;
  });
  return a;
});
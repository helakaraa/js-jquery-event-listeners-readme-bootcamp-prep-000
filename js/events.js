//define functions here
function getIt(){
 $('p').on('click',function(){
   alert("Hey!");
 }); 
  
}
function frameIt(){
  $('.tasty').on('load',function(){
   alert("Hey!");
 }); 
}
 function pressIt(){
   
   $(document).on('keydown',function(){
 function(key) {
  if (key.which == 82){
    alert('r was pressed');
  }
 }); 
 }
 
 function submitIt(){
    $(document).on('submit',function(){
   alert("Your form is going to be submitted now.");
    });
 }

$(document).ready(function(){

// call functions here

});

$(function(){
  
  if(window.location == "https://subdued-pendulum.glitch.me/join.html"){
     window.location = "https://subdued-pendulum.glitch.me/index.html"
    window.open('https://www.change.org/p/environmentalists-waste-cleanup-campaign-wcc', '_blank');
  }
    $("#aboutPic").fadeOut(1);
     $("#aboutPic").fadeIn(1500);
  
     $("header img").click(function(){
  window.location = "index.html";  
   });
       $("#collapse1").fadeOut(1);
   $("#small1").css("visibility", "hidden");
      
     
    $("#expand1").click(function(){
 $("#small1").css({visibility: "visible"});  
      
         $("object").animate({width: "90%"});  
         $("object").animate({height: "100vh"}, 2000); 
      
     $("#expand1").fadeOut();
      $("#collapse1").css("color", "white");
           $("#collapse1").fadeIn(1000);
   });
  
     
    $("#collapse1").click(function(){
 $("#small1").css({visibility: "hidden"});  
      
         $("object").animate({width: "600"});  
         $("object").animate({height: "800"}, 2000); 
      
     $("#expand1").fadeIn();
           $("#collapse1").fadeOut(1000);
   });
  
     if(window.location.href.indexOf("index") > -1){
 $("a").parent().eq(0).css({borderBottom:"0.1px solid #368BC1"});
  }else if(window.location.href.indexOf("about") > -1){
           $("a").parent().eq(2).css({borderBottom:"0.1px solid #368BC1"});
  } else if(window.location.href.indexOf("trebleclef") > -1){
           $("a").parent().eq(1).css({borderBottom:"0.1px solid #368BC1"});
   } else if(window.location.href.indexOf("piano") > -1){
           $("a").parent().eq(3).css({borderBottom:"0.1px solid #368BC1"});
     } else if(window.location.href.indexOf("about") > -1){
           $("a").parent().eq(4).css({borderBottom:"0.1px solid #368BC1"});
           }else{
           $("a").parent().eq(0).css({borderBottom:"0.1px solid #368BC1"});
           } 
 
  $("#up").click(function(){
 $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });
  
   
   $("#learnPianoBtn").click(function(){
  window.location = "action.html";  
   });
  
  
   $("#learnPianoBtn5").click(function(){
  window.location = "join.html";  
   });
 
  $("#learnPianoBtn, #learnPianoBtn3").hover(testing, outTesting);

  function testing(){
  
  $("#learnPianoBtn, #learnPianoBtn3").animate({backgroundColor: "white", color: "#3881af"}, "fast"); 
}
  
  function outTesting(){
     $("#learnPianoBtn, #learnPianoBtn3").animate({backgroundColor: "transparent", color: "white"}, "fast"); 
    
  }
       
  
  $("#learnPianoBtn5").hover(testing, outTesting);

  function testing(){
  
  $("#learnPianoBtn5").animate({backgroundColor: "white", color: "#3881af"}, "fast"); 
}
  
  function outTesting(){
     $("#learnPianoBtn5").animate({backgroundColor: "#333", color: "white"}, "fast"); 
    
  }
       

  
  $('.jerry img').click(function(e) {
    e.preventDefault();
    window.open('https://www.instagram.com/officialjerrynoel/');
    
  });
  
  $('.jerry img').click(function(e) {
    e.preventDefault();
     
      window.open('https://www.instagram.com/hernxndezzz_/');
    
 });
   
  
  
  $('.jerry img').click(function(e) {
    e.preventDefault();
     
      window.open('https://www.instagram.com/jennamisztuk/');
      
 });
   
  
  
  $('.jerry img').click(function(e) {
    e.preventDefault();
   
      window.open('https://www.instagram.com/numbuhfive/');
 });
   
 
  
  
  
});
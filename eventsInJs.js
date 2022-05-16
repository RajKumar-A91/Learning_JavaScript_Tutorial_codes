//Events in JavaScript:
//Everything the user interacting with the webpage is an event.
//we made listen to clicking event
//  function clicked() {
//      console.log("the button was clicked")
//      //alert("you have clicked the button");
//  }

//  window.onload=function() {
//      console.log("The document was loaded");
//  }
// // //we can use this window.onload when we want to perform some actions when ever a document was loaded.

//  firstcontainer.addEventListener("click",function(){
//      console.log("clicked either on container or click button");
//  });
// // //the above even is click when we click on particular element this gets executed.

// // //mouseover event: when we move our mouse to particular element this gets executed.
//  firstcontainer.addEventListener('mouseover',function(){
//      console.log("The mouse moved over the container!!");
//  });


// // //mouseout event:when we move our mouse out of the particular element this gets executed.
//  firstcontainer.addEventListener('mouseout',function(){
//      console.log("The mouse moved out of the container!!");
//  });

// // //mouseup event:when we click the mouse on a particular element this gets executed.
// let previousHtml=document.querySelectorAll('.container')[0].innerHTML;
//  firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[0].innerHTML=previousHtml;
//      console.log("The mouse up or clicked on the container!!");
//  });

// // //mousedown event:when we clicked the mouse and hold it on a particular element this gets executed.
//  firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[0].innerHTML="<b>We have Clicked The Element with Id firstcontainer</b>";
//     //here we are changing the content in a particular element when it is clicked.
//     console.log("The mosue down or mouse clicked and holded!!")
//  });


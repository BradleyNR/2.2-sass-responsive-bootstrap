(function(){
  'use strict';


  var left = document.getElementById('bottomsection').clientHeight;
  var right = document.getElementById('bigform').clientHeight;


function matchSizes(){
   left = document.getElementById('bottomsection').clientHeight;
   right = document.getElementById('bigform').clientHeight;

  if(left>right){
    document.getElementById('bigform').style.height=left + 'px';
  }else{
    document.getElementById('bottomsection').style.height=right + 'px';
  }
 console.log('hello');
  // setTimeout(matchSizes, 500);
}


console.log(left);
console.log(right);




matchSizes()

window.addEventListener("resize", matchSizes);


    }());

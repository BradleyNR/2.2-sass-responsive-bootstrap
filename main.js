(function(){
  'use strict';


var left = document.getElementById('bottomsection').clientHeight;
var right = document.getElementById('bigform').clientHeight;


function matchSizes(){
  if(left>right){
    document.getElementById('bigform').style.height=left + 'px';
  }else{
    document.getElementById('bottomsection').style.height=right + 'px';
  }

  setTimeout(matchSizes, 500);
}


console.log(left);
console.log(right);


matchSizes()

    }());

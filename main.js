(function(){
  'use strict';
//Experimental Javascript used to resize container sizes. Only a test.



  var leftContainer = document.getElementById('bottomsection');
  var rightContainer = document.getElementById('bigform');
  // var left = document.getElementById('bottomsection').clientHeight;
  // var right = document.getElementById('bigform').clientHeight;


  //the following function will replace the values for the left and right column height
  //with the current height according to window resize. Then, it will replace the smaller
  ///div's height with the larger div's height

  function matchSizes(){
    leftContainer.style.height = 'auto';
    rightContainer.style.height = 'auto';

    var leftContainerHeight = leftContainer.clientHeight
    , rightContainerHeight = rightContainer.clientHeight;

    if(window.innerWidth <= 768){
      return;
    }

    if(leftContainerHeight > rightContainerHeight){
      rightContainer.style.height = leftContainerHeight + 'px';
    }else{
      leftContainer.style.height = rightContainerHeight + 'px';
    }
   console.log('hello');
    // setTimeout(matchSizes, 500);
  }

  // register resize and run on page load
  window.addEventListener("resize", matchSizes);
  matchSizes();
}());

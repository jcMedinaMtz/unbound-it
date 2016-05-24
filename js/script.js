$(document).ready(function(){
  var vid = document.getElementById( "bgvid" );
  var pauseButton = document.querySelector( "button" );
  function vidFade()
    vid.classList.add( "stopfade" );
  }
  vid.addEventListener( 'ended', function () {
    // only functional if "loop" is removed
    vid.pause();
    // to capture IE10
    vidFade();
  } );


})

/*$( '#zopimPrompt' ).click( function () {
  $zopim(function(){
    $zopim.livechat.window.show();
  });
} )*/


/*pauseButton.addEventListener("click", function() {
vid.classList.toggle("stopfade");
if (vid.paused) {
  vid.play();
  pauseButton.innerHTML = "Pause";
} else {
  vid.pause();
  pauseButton.innerHTML = "Paused";
}
})*/

/*$zopim( function() {
window.setTimeout( function() {
  $zopim.livechat.window.show();
}, 10000 ); //time in milliseconds

} );*/

//  $zopim(function() {
//    $zopim.livechat.button.hide();
//  });

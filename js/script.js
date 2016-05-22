var ua = navigator.userAgent.toLowerCase(),
  platform = navigator.platform.toLowerCase();
platformName = ua.match( /ip(?:ad|od|hone)/ ) ? 'ios' : ( ua.match( /(?:webos|android)/ ) || platform.match( /mac|win|linux/ ) || [ 'other' ] )[ 0 ],
  isMobile = /ios|android|webos/.test( platformName );
if ( isMobile ) {
  $zopim( function () {
    $zopim.livechat.badge.hide();
  } );
}
else {
  $zopim( function () {
    $zopim.livechat.window.hide();
  } );
}


var vid = document.getElementById( "bgvid" );
var pauseButton = document.querySelector( "button" );

function vidFade() {
  vid.classList.add( "stopfade" );
}

vid.addEventListener( 'ended', function () {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();
} );


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

$( '#zopimPrompt' ).click( function () {
  $zopim.livechat.window.show();
} )

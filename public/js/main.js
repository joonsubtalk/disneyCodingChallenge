var nameOfLibs = 'libCustom';
console.log('hey a lib: ' + nameOfLibs);

// fillers
var header = document.getElementById("header");
header.style.backgroundImage = 'url(https://unsplash.it/'+screen.width+'/'+screen.height+')';
function getWidth() {
  var myWidth = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
  } else if( document.documentElement && ( document.documentElement.clientWidth ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
  } else if( document.body && ( document.body.clientWidth) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
  }
  return myWidth;
}

// Footer's Year
setCurrentYearOnFooter();
function setCurrentYearOnFooter(){
  var year = document.getElementById("footerYear");
  year.innerHTML = getFourDigitYear();
}
function getFourDigitYear() {
  var d = new Date();
  return d.getFullYear();
}

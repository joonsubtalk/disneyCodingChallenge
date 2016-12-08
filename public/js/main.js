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

// should be hidden
var API_KEY = "aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM";
var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+getYesterdayDate()+"&api_key="+API_KEY;
// Get images
var listOfImages = [];

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
function getYesterdayDate() {
  var d = new Date();
  var yesterday = new Date(d);
  yesterday.setDate(d.getDate() - 1);
  return yesterday.getFullYear()+"-"+(('0' + (yesterday.getMonth()+1)).slice(-2)) + "-" + ('0' + yesterday.getDate()).slice(-2);
}
$(document).ready(function(){
  var luckyNum = 0;
  if (true || !localStorage.imageOfTheDayUrl && localStorage.imageOfTheDayDate !== getYesterdayDate()){
    $.ajax({
      url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+getYesterdayDate()+"&api_key="+API_KEY,
      success: function(result){
        listOfImages = result;
        luckyNum = Math.round(Math.random() * listOfImages.photos.length+1);
        localStorage.imageOfTheDayUrl = listOfImages.photos[luckyNum].img_src;
        localStorage.imageOfTheDayDate = listOfImages.photos[luckyNum].earth_date;
        localStorage.imageOfTheDayCameraName = listOfImages.photos[luckyNum].camera.full_name;
        displayImageOfTheDay();
    }});
  }else{
    // no need to refetch, just use what's cached.
    displayImageOfTheDay();
  }
});

function displayImageOfTheDay(){
  document.getElementById("imageOfDay").src = localStorage.imageOfTheDayUrl;
  document.getElementById("imageOfDayName").innerHTML = localStorage.imageOfTheDayCameraName;
  document.getElementById("imageOfDayDate").innerHTML = "Captured on " + localStorage.imageOfTheDayDate;
}

function shallowCloneObj(obj) {
  var newObj = {};
  for (var i in obj){
    if(typeof(obj[i]) === 'object')
      newObj[i] = shallowCloneObj(obj[i]);
    else
     newObj[i] = obj[i];
   }
  return newObj;
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}



var a = document.getElementById("logo");
var countyIdArray = ["_x30_01_Alameda","_x30_69_San_Benito", "_x30_81_San_Mateo","_x30_87_Santa_Cruz", "_x30_53_Monterey", "_x30_85_Santa_Clara", "_x30_13_Contra_Costa", "_x30_75_San_Francisco"];


            // It's important to add an load event listener to the object,
            // as it will load the svg doc asynchronously
        $(a).on("load", function(){

            console.log("yes");

            var svgDoc = a.contentDocument;

            svgDoc.getElementsByTagName("svg")[0].setAttribute("viewBox","10 325 800 300");
            svgDoc.getElementsByTagName("svg")[0].setAttribute("height", 500);

            /*for (var i = 0; i <= countyIdArray.length; i++){
                svgDoc.getElementById(countyIdArray[i])
            };*/

            //onclick return the id of the clicked county
            svgDoc.addEventListener("click", function(e){
                    for (var i = 0; i <= countyIdArray.length; i++){
                        if (e.target.id == countyIdArray[i]){
                            console.log("yes that is " + e.target.id);
                        }else{
                            //console.log("no");
                        }
                    };
            });

            console.log(svgDoc);
            });

$("#alamedabtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#alameda").offset().top}, 'slow');
});

$("#contraCostabtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#contracosta").offset().top}, 'slow');
});

$("#montereybtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#monterey").offset().top}, 'slow');
});

$("#sanBenitobtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#sanbenito").offset().top}, 'slow');
});

$("#sanFranciscobtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#sanfrancisco").offset().top}, 'slow');
});

$("#sanMateobtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#sanmateo").offset().top}, 'slow');
});

$("#santaClarabtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#santaclara").offset().top}, 'slow');
});

$("#santaCruzbtn").click( function() {
  $('html,body').animate({
    scrollTop: $("#santacruz").offset().top}, 'slow');
});

// from https://github.com/ehsalazar/art101/blob/master/groupproject/js/lab.js

//button group
$("#alameda_button").click(function(){$("#alameda").toggleClass("hidden")})
$("#contracosta_button").click(function(){$("#contracosta").toggleClass("hidden")})
$("#monterey_button").click(function(){$("#monterey").toggleClass("hidden")})
$("#sanbenito_button").click(function(){$("#sanbenito").toggleClass("hidden")})
$("#sanfrancisco_button").click(function(){$("#sanfrancisco").toggleClass("hidden")})
$("#sanmateo_button").click(function(){$("#sanmateo").toggleClass("hidden")})
$("#santaclara_button").click(function(){$("#santaclara").toggleClass("hidden")})
$("#santacruz_button").click(function(){$("#santacruz").toggleClass("hidden")})

// Alameda info buttons
$("#testing_button_alameda").click(function(){$("#testing_alameda").toggleClass("unhideTest")});
$("#vaccination_button_alameda").click(function(){$("#vaccination_alameda").toggleClass("unhideVaccine")});
$("#additional_button_alameda").click(function(){$("#additional_alameda").toggleClass("unhideAdditional")});

// Contra Costa info buttons
$("#testing_button_contracosta").click(function(){$("#testing_contracosta").toggleClass("unhideTest")});
$("#vaccination_button_contracosta").click(function(){$("#vaccination_contracosta").toggleClass("unhideVaccine")});
$("#additional_button_contracosta").click(function(){$("#additional_contracosta").toggleClass("unhideAdditional")});

// Monterey info buttons
$("#testing_button_monterey").click(function(){$("#testing_monterey").toggleClass("unhideTest")});
$("#vaccination_button_monterey").click(function(){$("#vaccination_monterey").toggleClass("unhideVaccine")});
$("#additional_button_monterey").click(function(){$("#additional_monterey").toggleClass("unhideAdditional")});

// San Benito info buttons
$("#testing_button_sanbenito").click(function(){$("#testing_sanbenito").toggleClass("unhideTest")});
$("#vaccination_button_sanbenito").click(function(){$("#vaccination_sanbenito").toggleClass("unhideVaccine")});
$("#additional_button_sanbenito").click(function(){$("#additional_sanbenito").toggleClass("unhideAdditional")});

// San Francisco info buttons
$("#testing_button_sanfrancisco").click(function(){$("#testing_sanfrancisco").toggleClass("unhideTest")});
$("#vaccination_button_sanfrancisco").click(function(){$("#vaccination_sanfrancisco").toggleClass("unhideVaccine")});
$("#additional_button_sanfrancisco").click(function(){$("#additional_sanfrancisco").toggleClass("unhideAdditional")});

// San Mateo info buttons
$("#testing_button_sanmateo").click(function(){$("#testing_sanmateo").toggleClass("unhideTest")});
$("#vaccination_button_sanmateo").click(function(){$("#vaccination_sanmateo").toggleClass("unhideVaccine")});
$("#additional_button_sanmateo").click(function(){$("#additional_sanmateo").toggleClass("unhideAdditional")});

// Santa Clara info buttons
$("#testing_button_santaclara").click(function(){$("#testing_santaclara").toggleClass("unhideTest")});
$("#vaccination_button_santaclara").click(function(){$("#vaccination_santaclara").toggleClass("unhideVaccine")});
$("#additional_button_santaclara").click(function(){$("#additional_santaclara").toggleClass("unhideAdditional")});

// Santa Cruz info buttons
$("#testing_button_santacruz").click(function(){$("#testing_santacruz").toggleClass("unhideTest")});
$("#vaccination_button_santacruz").click(function(){$("#vaccination_santacruz").toggleClass("unhideVaccine")});
$("#additional_button_santacruz").click(function(){$("#additional_santacruz").toggleClass("unhideAdditional")});

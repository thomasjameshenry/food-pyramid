document.getElementsByTagName("h1");
//Vegetable layer 1
 var veg = 0;
    function addbuttonClickVeg() {
        document.getElementById('vegNum').value = ++veg;
    }
function subbuttonClickVeg() {
  if(document.getElementById('vegNum').value >= 1){
        document.getElementById('vegNum').value = --veg;}
    }
//Cereal layer 2
 var cereal = 0;
    function addbuttonClickCereal() {
        document.getElementById('cerealNum').value = ++cereal;
    }
function subbuttonClickCereal() {
  if(document.getElementById('cerealNum').value >= 1){
        document.getElementById('cerealNum').value = --cereal;}
    }
//Dairy layer 3
var dairy = 0;
    function addbuttonClickDairy() {
        document.getElementById('dairyNum').value = ++dairy;
    }
function subbuttonClickDairy() {
  if(document.getElementById('dairyNum').value >= 1){
        document.getElementById('dairyNum').value = --dairy;}
    }
//Proteins layer 4
var protein = 0;
    function addbuttonClickProtein() {
        document.getElementById('proteinNum').value = ++protein;
    }
function subbuttonClickProtein() {
  if(document.getElementById('proteinNum').value >= 1){
        document.getElementById('proteinNum').value = --protein;}
    }
//Fats layer 5
var fats = 0;
    function addbuttonClickFats() {
        document.getElementById('fatsNum').value = ++fats;
    }
function subbuttonClickFats() {
  if(document.getElementById('fatsNum').value >= 1){
        document.getElementById('fatsNum').value = --fats;
  }
    }
//Sugar layer 5
var sugar = 0;
  function addbuttonClickSugar() {
        document.getElementById('sugarNum').value = ++sugar;
    }
function subbuttonClickSugar() {
  if(document.getElementById('sugarNum').value >= 1){
        document.getElementById('sugarNum').value = --sugar;
  }
}
 function myFunction() {
            var x =
                document.getElementById("myText").value;

            document.getElementById(
              "day").innerHTML = x + "/";
            var y =
                document.getElementById("myText2").value;

            document.getElementById(
              "month").innerHTML = y + "/";
            var z =
                document.getElementById("myText3").value;

            document.getElementById(
              "year").innerHTML = z;

        }

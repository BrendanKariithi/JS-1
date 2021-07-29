
function main() {
  var geniusName = "Brendan Kariithi";

  var favColor1 = "Turquoise";
  var favColor2 = "Gold";
  var favColor3 = "Gray";

  updateParagraphContent(geniusName);
  changeWebPageTheme(favColor1, favColor2, favColor3);

}

function updateParagraphContent(geniusParam) {

  document.getElementById("demo").innerHTML = "Great Job " + geniusParam + "!!!! <br> You Added Your Name.";

}

function changeWebPageTheme(colorParam1, colorParam2, colorParam3) {

  document.body.style.backgroundColor = colorParam1;
  document.getElementsByTagName("h1")[0].style.color = colorParam2;
  document.getElementById("demo").style.color = colorParam3;
}

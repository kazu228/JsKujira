
var calBtn = document.getElementById("calBtn");

calBtn.addEventListener('click', () => {
    var inchValue = document.getElementById("inch").value;
    var cm = Number(inchValue) * 2.54;
    var p = document.querySelector('p');
    p.innerHTML = "答えは..." + cm + "cmです";

});



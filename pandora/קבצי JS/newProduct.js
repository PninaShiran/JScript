document.addEventListener('DOMContentLoaded', function () {
    var arr1 = JSON.parse(localStorage.getItem('arr1'));

    var product = arr1[arr1.length - 1];
    document.querySelector("title").innerHTML = product.name;
    document.querySelector("h1").innerHTML = product.name;
    document.getElementById("myimage").setAttribute("src", "../images/" + product.img);
    var zoomImg = document.getElementById("myresult");
    zoomImg.style.backgroundImage = 'url(../images/' + product.img + ")";

    document.getElementById("p_txt").innerHTML = product.description;

});


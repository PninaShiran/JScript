document.addEventListener('DOMContentLoaded', function () {
    var arr1 = JSON.parse(localStorage.getItem("arr1"));
    var row = document.getElementById('row3');
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i].category == 'rings') {
            var col = document.createElement("div");
            col.setAttribute("class", "col-md 6 col-xl 3");
            row.appendChild(col);
            var image = document.createElement("img");
            image.style.width = '200px';
            image.style.height = '200px';
            image.style.display = 'block';
            image.style.marginRight = 'auto';
            image.style.marginLeft = 'auto';
            var btn = document.createElement("input");
            btn.type = 'image';
            btn.src = arr1[i].img;
            btn.addEventListener('click', navigate);
            btn.setAttribute("class", "displayImages");
            col.appendChild(btn);
            image.setAttribute("src", arr1[i].img);
            var br = document.createElement("br");
            col.appendChild(br);
            var h6 = document.createElement("h6");
            h6.style.textAlign = 'center';
            h6.innerHTML = arr1[i].name;
            var br = document.createElement("br");
            h6.appendChild(br);
            h6.innerHTML += arr1[i].price + ' ש"ח';
            col.appendChild(h6);
            var btn = document.createElement("button");
            btn.addEventListener('click', addProduct);
            btn.setAttribute("class", "btn btn-default");
            btn.innerHTML = "הוספה לסל";
            col.appendChild(btn);
        }
    }
});

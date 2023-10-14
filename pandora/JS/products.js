document.addEventListener("DOMContentLoaded", function () {
  var arr1 = JSON.parse(localStorage.getItem("arr1"));
  var row = document.getElementById("rows");

  if (arr1) {
    arr1.forEach(function (productData) {
      var col = createProductCard(productData);
      row.appendChild(col);
    });
  }
});

function createProductCard(productData) {
  var col = document.createElement("div");
  col.classList.add("col-md", "col-xl", "3");

  var image = createImage(productData.img);
  col.appendChild(image);

  var h6 = createHeading(productData.name, productData.price + ' ש"ח');
  col.appendChild(h6);

  var btn = createButton("הוספה לסל", addProduct);
  col.appendChild(btn);

  return col;
}

function createImage(src) {
  var image = document.createElement("img");
  image.style.width = "200px";
  image.style.height = "200px";
  image.style.display = "block";
  image.style.margin = "0 auto";
  image.src = src;
  return image;
}

function createHeading(name, price) {
  var h6 = document.createElement("h6");
  h6.style.textAlign = "center";
  h6.innerHTML = name + "<br>" + price;
  return h6;
}

function createButton(text, clickHandler) {
  var btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add("btn", "btn-default");
  btn.innerHTML = text;
  btn.addEventListener("click", clickHandler);
  return btn;
}

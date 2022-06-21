document.addEventListener('DOMContentLoaded', function () {
    showShopping();
});


//הסרת מוצר מהסל
function removeProduct(e) {
    var s = e.target.parentElement.firstChild.src;
    var image = s.substr(s.indexOf("img"));
    var arr2 = JSON.parse(localStorage.getItem("arr2"));
    for (var i = 0; i < arr2.length && arr2[i].img != "../images/" + image; i++);
    arr2.splice(i, 1);
    var sum = JSON.parse(localStorage.getItem("sum"));
    var arr1 = JSON.parse(localStorage.getItem("arr1"));
    for (var i = 0; i < arr1.length && arr1[i].img != "../images/" + image; i++);
    sum -= arr1[i].price;
    alert('סה"כ לתשלום: ' + sum + ' ש"ח');
    localStorage.setItem("sum", JSON.stringify(sum));
    localStorage.setItem("arr2", JSON.stringify(arr2));
    showShopping();
}


//הצגת המוצרים בסל קניות
function showShopping() {
    var arr2 = JSON.parse(localStorage.getItem("arr2"));
    var row = document.getElementById('all_rows');
    while (row.firstChild) {
        row.removeChild(row.lastChild);
    }
    console.log(arr2);
    var categories = [];
    var categoryCount = [];
    var inSale = false;
    for (var i = 0; i < arr2.length; i++) {
        var c = categories.find(cat => cat === arr2[i].category);
        if (!c) {
            categories.push(arr2[i].category);
            categoryCount.push(0);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        var c = categories.findIndex(cat => cat === arr2[i].category);
        categoryCount[c]++;
    }
    console.log(categoryCount)

    for (var i = 0; i < categoryCount.length; i++) {
        if (categoryCount[i] > 2) {
            inSale = true;
            setTimeout(function () {
                $(".modal").modal();
            },1000)
        }
    }

    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] == null)
            continue;
        var col = document.createElement("div");
        col.setAttribute("class", "col-md 6 col-xl 3");
        var image = document.createElement("img");
        image.style.width = '200px';
        image.style.height = '200px';
        image.style.display = 'block';
        image.style.marginRight = 'auto';
        image.style.marginLeft = 'auto';
        row.appendChild(col);
        image.setAttribute("src", arr2[i].img);
        col.appendChild(image);
        var br = document.createElement("br");
        col.appendChild(br);
        var price = document.createElement("p");
        price.style.textAlign = 'center';
        price.innerHTML = arr2[i].price + ' ש"ח';
        col.appendChild(price);
        var btn = document.createElement("button");
        btn.addEventListener('click', removeProduct);
        btn.setAttribute("class", "btn btn-default");
        btn.innerHTML = "הסרה מהסל";
        col.appendChild(btn);
    }
    var row1 = document.getElementById('allRows');
    var h5 = document.createElement("h5");
    var sum = JSON.parse(localStorage.getItem("sum"));
    if (inSale)
        sum *= 0.8;
    h5.innerHTML = 'סכום לתשלום:  ' + sum + ' ש"ח';
    localStorage.setItem("sum", JSON.stringify(sum));
    row1.appendChild(h5);
    if (document.addEventListener("onclick", btn))
        showShopping();

}

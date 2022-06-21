function add() {
    var category;
    if (document.getElementById('necklaces').checked) {
        category = 'necklaces';
    } else if (document.getElementById('bangles').checked) {
        category = 'bangles';
    } else if (document.getElementById('rings').checked) {
        category = 'rings';
    }

    var newItem = new product(document.getElementById("name").value, Number(document.getElementById("price").value), "../images/"+document.getElementById("img").value, document.getElementById("description").value, category);
    var arr1 = JSON.parse(localStorage.getItem("arr1"));
    arr1.push(newItem);
    localStorage.setItem("arr1", JSON.stringify(arr1));
    localStorage.setItem("image", newItem.img);
    window.location.href = 'product.html';
   
}


function product(name, price, img, description, category) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.description = description;
    this.category = category;
}

function add() {
  var name = document.getElementById("name");
  var price = Number(document.getElementById("price").value);
  var img = "../images/" + document.getElementById("img").value;
  var description = document.getElementById("description").value;
  var category;
  name.addEventListener("input", function () {
    console.log("Name input on focus.");
  });
  var categoryRadioButtons = document.querySelectorAll(
    "input[name='category']"
  );
  categoryRadioButtons.forEach(function (radio) {
    radio.addEventListener("input", () => {
      alert("קטגוריה: " + radio.value);
    });
  });

  if (!name.value.match(/.{3,}/)) {
    alert("שם המוצר חייב להכיל לפחות 3 תווים.");
    return;
  }
  if (price <= 0 || isNaN(price)) {
    alert("מחיר המוצר חייב להיות מספר חיובי.");
    return;
  }
  if (!img.match(/.{1,}/)) {
    alert("יש להזין קוד תמונה.");
    return;
  }
  if (!description.match(/.{10,}/)) {
    alert("תיאור המוצר חייב להכיל לפחות 10 תווים.");
    return;
  }

  var newItem = new product(name.value, price, img, description, category);
  var arr1 = JSON.parse(localStorage.getItem("arr1"));
  arr1.push(newItem);
  localStorage.setItem("arr1", JSON.stringify(arr1));
  localStorage.setItem("image", newItem.img);
  window.location.href = "product.html";
}

function product(name, price, img, description, category) {
  this.name = name;
  this.price = price;
  this.img = img;
  this.description = description;
  this.category = category;
}

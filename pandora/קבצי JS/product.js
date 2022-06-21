function navigate(e) {
    var s = e.target.parentElement.firstChild.src;
    var image = s.substr(s.indexOf("img"));
    localStorage.setItem('image', image);
    window.location.href = 'product.html';
}

function showProductDetails () {
    console.log("here");
    var image = localStorage.getItem('image');
    if (image == null)
        return;
    if (!image.includes("images")) {
        image = "../images/" + image
    }
    var arr1 = JSON.parse(localStorage.getItem('arr1'));
    var i;
    for ( i = 0; i < arr1.length && arr1[i].img != image; i++);
    var product = arr1[i];
    document.querySelector("title").innerHTML = product.name;
    document.querySelector("h1").innerHTML = product.name;
    document.getElementById("myimage").setAttribute("src", "../images/" + product.img);
    var zoomImg = document.getElementById("myresult");
    zoomImg.style.backgroundImage = 'url(../images/' + product.img+")";

    document.getElementById("p_txt").innerHTML = product.description;

    imageZoom("myimage", "myresult");
}


//הוספת מוצר לסל
function addProduct(e) {
    var s = e.target.parentElement.firstChild.src;
    var image = s.substr(s.indexOf("img"));
    var arr2 = JSON.parse(localStorage.getItem("arr2"));
    if (arr2 == null)
        arr2 = [];
    var arr1 = JSON.parse(localStorage.getItem("arr1"));
    for (var i = 0; i < arr1.length && arr1[i].img != "../images/" + image; i++);
    arr2.push(arr1[i]);
    localStorage.setItem("arr2", JSON.stringify(arr2));
    var sum = JSON.parse(localStorage.getItem("sum"));
    sum += arr1[i].price;
    alert('סה"כ לתשלום: ' + sum + ' ש"ח');
    localStorage.setItem("sum", JSON.stringify(sum));
    window.open("shopping.html");
}


function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}









function openImage(image){
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image")

    popupImage.src = image.src;
    popup.style.display = "flex";

}

function closeImage(event){
    var popup = document.getElementById("popup");
    if((event.target === popup) || (event.target.className = "close")){
        popup.style.display = "none";

    }

}
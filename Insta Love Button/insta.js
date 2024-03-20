let box = document.querySelector("#container");
let heart = document.querySelector("i");


box.addEventListener("dblclick", function(){
    // dbl ---- doubleclick
     
    heart.style.transform = "translate(-50%, -50%) scale(1)"
    heart.style.opacity = "0.8" //opacity -- how much darker and lighter need for love icon

    // For love effect in logic
    setTimeout(function(){
        heart.style.opacity = "0";
    },1000)

    // For Love effect out logic
    setTimeout(function(){
        heart.style.transform = "translate(-50%, -50%) scale(2)" //scale --- size of love icon
    },2000)
})
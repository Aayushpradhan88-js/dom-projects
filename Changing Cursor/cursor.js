const box = document.querySelector("#main");
const mouse = document.querySelector("#cursor");

box.addEventListener("mousemove", (dets) => {
    // dets -- dets gives details about where the cursor goes in how many degrees or px ...
    mouse.style.left = dets.x + "px"
    mouse.style.top = dets.y + "px"
})

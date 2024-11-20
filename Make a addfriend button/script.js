var isStatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var stranger = document.querySelector("#Unfriend");
addFriend.addEventListener("click", function(){
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "blue"
});

stranger.addEventListener("click", function(){
    isStatus.innerHTML = "Undost";
    isStatus.style.color =  "rgb(111, 104, 104)";

})
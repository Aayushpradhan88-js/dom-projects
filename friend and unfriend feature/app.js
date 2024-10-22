let friendButton = document.querySelector('#friendButton');
let isFriend = true
function toogleFriend() {
    isFriend = !isFriend
    friendButton.style.backgroundColor = isFriend? 'green' : 'red'
    friendButton.innerHTML = isFriend? friend : unfriend
}
friendButton.addEventListener("click", toogleFriend)

//Next Method
let friend = document.querySelector("#friendButton");
let isStatus = document.querySeletor("h5");
check = 0;

friend.addEventListener("click", () => {
    if(check == 0){
        isStatus.innerHTML = "friend";
        isStatus.style.color = "blue";
        console.log("Friend request has been send");
        check = 1;
    }
    else{
        isStatus.innerHTML = "unfriend";
        isStatus.style.color = "red";
        console.log("Friend request has been cancelled");
        check = 0;
    }
});

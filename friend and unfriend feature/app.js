let friendButton = document.querySelector('#friendButton');

let isFriend = true

function toogleFriend() {

    isFriend = !isFriend

    friendButton.style.backgroundColor = isFriend? 'green' : 'red'
    friendButton.innerHTML = isFriend? friend : unfriend


}

friendButton.addEventListener("click", toogleFriend)
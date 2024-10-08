let userInEl = document.getElementById("userIn");
let randomNum = Math.ceil(Math.random() * 100);

function onChangeUserIn() {
    let userVal = parseInt(userInEl.value);
    
    if(userVal > randomNum) {
        console.log("Its too high!!!");
    } else if(userVal < randomNum) {
        console.log("Its too low!!!");
    } else {
        console.log("You Won!!!");
    }
}
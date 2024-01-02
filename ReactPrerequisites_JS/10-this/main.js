// this in events
function clickHandler(param) {
    console.log(param); //<button onclick="clickHandler(this)">Click Me !</button>
    param.style.background = "red"
    param.style.color = "white"

}

function showValue(params) {
    console.log(this);
}
showValue() // print window object with methods and properties

let user = {
    name:"reza",
    age:21 ,
    showAge: function (params) {
        console.log(this);
    }
}
console.log(user);//log object
console.log(user.age);// 21
user.showAge()//log object
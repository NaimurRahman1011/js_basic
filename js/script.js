//basic js//
function textChange1(){

    document.getElementsByClassName("h2font")[0].innerHTML = Date();
}

function textChange2(){

    var text = "welcome to ssb. "
    document.getElementById('hola').innerHTML=text.repeat(3);
}

function textChange3(){

    document.getElementsByClassName('h2font')[2].style.color = "red";
    document.getElementsByClassName('h2font')[2].style.border = "1px solid red";
}
//clickable img example//
function img1(){

    document.getElementById("img").src = "images/work_member2.jpg";
}
function img2(){

    document.getElementById("img").src = "images/work_member3.jpg";
}
//alert example//
function alertbtn(){
    window.alert("welcome")
}
//basic js//

//jquery//
$(document).ready(function(){
    alert("welcome to this website");

    $('#jqalert').click(function(){
        alert("jq alert")
    })
})
//jquery//
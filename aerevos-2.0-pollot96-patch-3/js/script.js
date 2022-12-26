
//==================================================================NAVBAR================================================================


  function mobilbutton(){
    if(document.getElementById("menu-slide").style.width=="0px"){
      document.getElementById("menu-slide").style.width="250px";
    }else{
      document.getElementById("menu-slide").style.width="0px";
    }
  }




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
   
  } else {
    document.getElementById("navbar").style.top = "-90px";
  
  }
  prevScrollpos = currentScrollPos;
}

function responsiveness() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  }

//==================================================================SIDER================================================================

let arrowIconLeft = '<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'><svg height="50px" id="Layer_1" style="enable-background:new 0 0 50 50;" version="1.1" viewBox="0 0 512 512" width="50px" color="#fff" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/></svg>';

let slides = document.querySelectorAll('.slide-ana div');
let slideSayisi = slides.length;


let prev = document.getElementById('prev');
let next = document.getElementById('next');
prev.innerHTML = arrowIconLeft;
next.innerHTML = arrowIconLeft;
next.querySelector('svg').style.transform = 'rotate(180deg)';


for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX("+100*(index)+"%)";
}
let loop = 0 + 1000*slideSayisi;

function goNext(){
    loop++;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
            }
}

function goPrev(){
    loop--;
            for (let index = 0; index < slides.length; index++) {
                const element = slides[index];
                element.style.transform = "translateX("+100*(index-loop%slideSayisi)+"%)";
            }
}

next.addEventListener('click',goNext);
prev.addEventListener('click',goPrev);
document.addEventListener('keydown',function(e){
    if(e.code === 'ArrowRight'){
        goNext();
    }else if(e.code === 'ArrowLeft'){
        goPrev();
    }
});

setInterval(goNext, 5000  );


//==========================================================FORM + JSON===================================================================

function mobilbuttonjson(){
  if(document.getElementById("json-form").style.width=="0px"){
    document.getElementById("json-form").style.width="350px";
  }else{
    document.getElementById("json-form").style.width="0px";
  }
}



function jsonshow(){
  
  let myobj=[{name:"", email:"", message:""}];
  let i=0;
myobj[i].name=document.getElementById("album").value;
myobj[i].email=document.getElementById("artist").value;
myobj[i].message=document.getElementById("textarea").value;
const myJSON = JSON.stringify(myobj[i]);
document.getElementById("user-json").innerHTML = myJSON;
//  return (myJSON,myobj);
//document.getElementById("user-json").innerHTML = myobj.name;
// let text = localStorage.getItem("album");
// let obj = JSON.parse(text);

//  document.getElementById("user-json").innerHTML=obj.name;
 
// document.getElementById("email-json").innerHTML=myobj.email;
// document.getElementById("message-json").innerHTML=myobj.message;
// if(document.getElementById("album").value==null){
//   document.getElementById("json-aera").style.width="0px";

// }
}

setInterval(jsonshow, 200 );

function writejson(){
  let i;
  let myobjjson=[{id:"",name:"", email:"", message:""}];
  
  for(i=0;i<myobjjson.length;i++){
    myobjjson[i].id=i;
    myobjjson[i].name=document.getElementById("album").value;
    myobjjson[i].email=document.getElementById("artist").value;
    myobjjson[i].message=document.getElementById("textarea").value;
  }
  
const myJSON = JSON.stringify(myobjjson);





console.log(myJSON);


}


//--------------------------------COLOR-----------------------------------------------------------

function lightwhite(){
 

  document.getElementById("navbar").style.backgroundColor="white";
  document.getElementById("logo").src="images/logolight.png";
  document.getElementById("logo").style.height="80px";
  document.getElementById("light").style.color="black";
  document.getElementById("lightone").style.color="black";
  document.getElementById("lighttwo").style.color="black";
  document.getElementById("lightthree").style.color="black";
  document.getElementById("lightfour").style.color="black";
  document.getElementById("lightfive").style.color="black";
  document.getElementById("lightsix").style.color="black";
  document.getElementById("lightseven").style.color="black";
  document.getElementById("lighteight").style.color="black";
  document.getElementById("lightnine").style.color="black";
  document.getElementById("lightten").style.color="black";
  document.getElementById("dropdown").style.backgroundColor="white";
  document.getElementById("dropdowntwo").style.backgroundColor="white";
  document.getElementById("lightsix").style.backgroundColor="white";
  document.getElementById("lighttwo").style.backgroundColor="white";
  document.getElementById("lightthree").style.backgroundColor="white";
  document.getElementById("lightfour").style.backgroundColor="white";
  document.getElementById("lightfive").style.backgroundColor="white";
  document.getElementById("lightnine").style.backgroundColor="white";
  document.getElementById("lightten").style.backgroundColor="white";
  document.getElementById("lighter").style.color="black";
  document.getElementById("lighterone").style.color="black";
  document.getElementById("lightertwo").style.color="black";
  document.getElementById("lighterthree").style.color="black";
  document.getElementById("lighterfour").style.color="black";
  document.getElementById("lighterfive").style.color="black";
  document.getElementById("lightersix").style.color="black";
  document.getElementById("lighterseven").style.color="black";
  document.getElementById("lightereight").style.color="black";
  document.getElementById("lighternine").style.color="black";
  document.getElementById("menu-slide").style.backgroundColor="white";
  document.getElementsByClassName("form-image")[0].style.backgroundImage = "url('/images/bg-form-img.jpg')";
 document.getElementsByClassName("json-mobile")[0].style.backgroundColor="white";
document.getElementsByClassName("container")[0].style.backgroundColor = "white";
document.getElementsByClassName("fa-sun")[0].style.color = "black";
document.getElementsByClassName("fa-moon")[0].style.color = "black";
document.getElementsByClassName("json-aera")[0].style.backgroundColor="rgba(200, 200, 200, 0.9)";
document.getElementsByClassName("pricing")[0].style.backgroundImage = "url('/images/bg-pricing-2.jpg')";
document.getElementsByClassName("cart")[0].style.color="black";
document.getElementsByClassName("title-cart")[0].style.color="#5c5c5c";
document.getElementsByClassName("menu")[0].style.color="black";
document.getElementsByClassName("videoc-enter")[0].style.backgroundImage = "url('./images/bg-videocenter.jpg')";
document.getElementsByClassName("cart")[0].style.backgroundColor = "white";
document.getElementsByClassName("fa-cart-shopping")[0].style.color = "#007bff";
document.getElementsByClassName("hovered-button")[0].style.backgroundColor = "white";

}

function lightdark(){
  document.getElementById("navbar").style.backgroundColor="#26272b";
  document.getElementById("light").style.color="white";
  document.getElementById("logo").src="images/logo-two.gif";
  document.getElementById("logo").style.height="80px";
  document.getElementById("light").style.color="white";
  document.getElementById("lightone").style.color="white";
  document.getElementById("lighttwo").style.color="white";
  document.getElementById("lightthree").style.color="white";
  document.getElementById("lightfour").style.color="white";
  document.getElementById("lightfive").style.color="white";
  document.getElementById("lightsix").style.color="white";
  document.getElementById("lightseven").style.color="white";
  document.getElementById("lighteight").style.color="white";
  document.getElementById("lightnine").style.color="white";
  document.getElementById("lightten").style.color="white";
  document.getElementById("dropdown").style.backgroundColor="#5f5f5f";
  document.getElementById("dropdowntwo").style.backgroundColor="#5f5f5f";
  document.getElementById("lightsix").style.backgroundColor="#5f5f5f";
  document.getElementById("lighttwo").style.backgroundColor="#5f5f5f";
  document.getElementById("lightthree").style.backgroundColor="#5f5f5f";
  document.getElementById("lightfour").style.backgroundColor="#5f5f5f";
  document.getElementById("lightfive").style.backgroundColor="#5f5f5f";
  document.getElementById("lightnine").style.backgroundColor="#5f5f5f";
  document.getElementById("lightten").style.backgroundColor="#5f5f5f";
  document.getElementById("lighter").style.color="white";
  document.getElementById("lighterone").style.color="white";
  document.getElementById("lightertwo").style.color="white";
  document.getElementById("lighterthree").style.color="white";
  document.getElementById("lighterfour").style.color="white";
  document.getElementById("lighterfive").style.color="white";
  document.getElementById("lightersix").style.color="white";
  document.getElementById("lighterseven").style.color="white";
  document.getElementById("lightereight").style.color="white";
  document.getElementById("lighternine").style.color="white";
  document.getElementsByClassName("form-image")[0].style.backgroundImage = "url('/images/bg-form-img-dark.jpg')";
  document.getElementById("menu-slide").style.backgroundColor="rgba(0, 0, 0, 0.7)";
  document.getElementsByClassName("container")[0].style.backgroundColor = "#26272b";
  document.getElementsByClassName("fa-sun")[0].style.color = "white";
  document.getElementsByClassName("fa-moon")[0].style.color = "white";
  document.getElementsByClassName("json-aera")[0].style.backgroundColor="rgba(29, 29, 29, 0.7)";
  document.getElementsByClassName("pricing")[0].style.backgroundImage = "url('/images/bg-pricing.jpg')";
  document.getElementsByClassName("cart")[0].style.color="#bbbbbb";
  document.getElementsByClassName("menu")[0].style.color="#bbbbbb";
  document.getElementsByClassName("title-cart")[0].style.color="#5c5c5c";
  document.getElementsByClassName("videoc-enter")[0].style.backgroundImage = "url('./images/bg-videocenter.jpg')";
  document.getElementsByClassName("cart")[0].style.backgroundColor = "#222222";
  document.getElementsByClassName("fa-cart-shopping")[0].style.color = "white";
document.getElementsByClassName("hovered-button")[0].style.backgroundColor = "#222222";

}

setTimeout(lightwhite);


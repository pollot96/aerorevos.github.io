//==================================================================NAVBAR================================================================


function mobilbutton(){
  document.getElementById("menuslide").style.display=block;
    // if(document.getElementById("menuslide").style.width=="0px"){
    //   console.log("hello");
    //   document.getElementById("menuslide").style.width="250px";
    // }else{
    //   document.getElementById("menuslide").style.width="0px";
    // }
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
//==================================================================pricing================================================================

  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
let x;
let b;
  function incremetation(x,b){
let a = document.getElementsByClassName("inputquantity")[b].value;
a=parseInt(a);
console.log(a);
a+=x;
 if(Number.isNaN(a)==true){
a=1;
}else if(a<1){
    a=1;
}
document.getElementsByClassName("inputquantity")[b].value=a;
  }
let y;
let z;



  function sizeshow(y,z){

  document.getElementsByClassName("size-input")[z].innerHTML=document.getElementsByClassName("size-content")[y].innerHTML;
    

   
    for(let i=0;i<9;i++){
      document.getElementsByClassName("size-overlay")[i].style.display="none";
    }
    
  

}
function sizeshowwomen(y){

  for(let j=9;j<18;j++){
    document.getElementsByClassName("size-input")[j].innerHTML=document.getElementsByClassName("size-content")[y].innerHTML;
      
   }
      document.getElementsByClassName("size-overlay-men")[0].style.display="none";
      document.getElementsByClassName("size-overlay-women")[0].style.display="none";
    
}
function sizeshowmen(y){

  for(let j=0;j<9;j++){
    document.getElementsByClassName("size-input")[j].innerHTML=document.getElementsByClassName("size-content")[y].innerHTML;
      
   }
    document.getElementsByClassName("size-overlay-men")[0].style.display=none;
    
}
function overlayshowmen(){
 
if(document.getElementsByClassName("size-overlay-men")[0].style.display=="none"){
  document.getElementsByClassName("size-overlay-men")[0].style.display="block";
}
else{
  document.getElementsByClassName("size-overlay-men")[0].style.display="none";
}
}
function overlayshowwomen(){

  if(document.getElementsByClassName("size-overlay-women")[0].style.display=="none"){
    document.getElementsByClassName("size-overlay-women")[0].style.display="block";
    
}else {
 
document.getElementsByClassName("size-overlay-women")[0].style.display="none";
}
}

function overlayshow(z){
    if(document.getElementsByClassName("size-overlay")[z].style.display=="none"){
        document.getElementsByClassName("size-overlay")[z].style.display="block";
        
    }else{
      for(let i=0;i<9;i++){
        document.getElementsByClassName("size-overlay")[i].style.display="none";
      }
      
}

}

 

let a=0;
function addcart(z){
  const division = document.createElement("div");
                  document.getElementsByClassName("products")[0].appendChild(division);                  
                  division.style.display="flex";
                  division.style.justifyContent="space-between";
                  division.className="divicart";
                  // division.style.marginTop="-20px";
                  division.style.marginBottom="10px";
    const imagediv = document.createElement("div");
                  division.appendChild(imagediv);                  
                  imagediv.style.height="80px";
                  imagediv.style.width="80px";
      const img=document.createElement("img");
                  img.src=document.getElementsByClassName("pct")[z].src;
                  imagediv.appendChild(img);
                  img.style.height="80px";
                  img.style.width="80px";
                  division.style.marginBottom="10px";
    const product = document.createElement("div");
                  division.appendChild(product);
                  product.style.display="block";
                  product.style.marginTop="-7px";
                  product.style.marginLeft="-65px";
                  product.style.textAlign="left";
                  
                  product.style.width="300px";
      const prodtitle = document.createElement("h4");
                  product.appendChild(prodtitle);
                  prodtitle.innerHTML=document.getElementsByClassName("model")[z].innerHTML;
                  prodtitle.style.marginBottom="-5px";
                  prodtitle.style.fontSize="14px";
                  prodtitle.className="prodtitle";
      const prodsize = document.createElement("h4");
                  product.appendChild(prodsize);
                  prodsize.innerHTML=document.getElementsByClassName("size-input")[z].innerHTML;
                  prodsize.style.marginBottom="4px";
                  prodsize.style.fontSize="14px";
                  prodsize.className="prodsize";
      const prodremove =document.createElement("button");
                  product.appendChild(prodremove);
                  prodremove.type="button";
                  prodremove.innerHTML= "remove";
                  prodremove.style.border="1px #818181 solid";
                  prodremove.style.padding="4px 6px";
                  prodremove.style.backgroundColor="white";
                  prodremove.className="removed";
                  
                  let c = document.getElementsByClassName("divicart").length;
                  prodremove.value=c;
                   prodremove.onclick= function() {removecart(prodremove.value-1)};
    const quantity = document.createElement("h4");
                  division.appendChild(quantity);
                  quantity.className="quantite";
                  let y = parseFloat(document.getElementsByClassName("inputquantity")[z].value);                 
                  quantity.innerHTML=document.getElementsByClassName("inputquantity")[z].value;
                  quantity.style.textAlign="center";
                  quantity.className="quantity";
                  quantity.style.border="none";
                  quantity.style.right="220px";
    let price = document.createElement("h4");
                 
                  division.appendChild(price);
                  let x=parseFloat(document.getElementsByClassName("price")[z].innerHTML.replace('$',""));
                  x=x*y;
                  console.log(x);
                  price.style.right="30px";
                  price.className="prices-cart";
                  price.innerHTML="$"+x;
                  price.style.marginRight="10px";
      let a=0;
      for(let i=0;i<document.querySelectorAll('.divicart').length;i++){
        x=parseFloat(document.getElementsByClassName("prices-cart")[i].innerHTML.replace('$',""))
        a=a+x;
      }
      document.getElementsByClassName("sum-total-one")[0].innerHTML="$"+a;
}
function removecart(z){
  document.getElementsByClassName("divicart")[z].style.display="none";
  
  let a = parseFloat(document.getElementsByClassName("prices-cart")[z].innerHTML.replace('$',""));
  let b = parseFloat(document.getElementsByClassName("sum-total-one")[0].innerHTML.replace('$',""));
  b=b-a;
  document.getElementsByClassName("sum-total-one")[0].innerHTML="$"+b;
document.getElementsByClassName("prices-cart")[z].innerHTML="$0.00";
}

function showcart(){
 
  document.getElementsByClassName("cart")[0].style.display="block";
  document.getElementsByClassName("hovered-button-off")[0].style.display="block";
  document.getElementsByClassName("hovered-button-on")[0].style.display="none";


}
function hidecart(){
 
  document.getElementsByClassName("cart")[0].style.display="none";
  document.getElementsByClassName("hovered-button-off")[0].style.display="none";
  document.getElementsByClassName("hovered-button-on")[0].style.display="block";


}


function mobilpricing(m){
  document.getElementsByClassName("container-fluid")[0].style.display="block";
  document.getElementsByClassName("col-sm-4")[0].style.display="none";
  document.getElementsByClassName("col-sm-4")[1].style.display="none";
  document.getElementsByClassName("col-sm-4")[2].style.display="none";
  document.getElementsByClassName("btn-men-return")[0].style.display="block";
  document.getElementsByClassName("col-sm-4")[a].style.display="block";
  document.getElementsByClassName("mobil-menu-pricing")[0].style.display="none";
  document.getElementsByClassName("col-sm-4")[a].style.marginLeft="0px";

}
function mobilpricingreturn(){
  document.getElementsByClassName("container-fluid")[0].style.display="none";
  document.getElementsByClassName("mobil-menu-pricing")[a].style.display="block";
  document.getElementsByClassName("btn-men-return")[0].style.display="none";
}
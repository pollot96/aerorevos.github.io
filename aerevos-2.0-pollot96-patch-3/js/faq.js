
//============================================================NAVBAR===================================================================
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

  function depl(){
    
    document.getElementsByClassName("carrt")[0].style.paddingLeft="160px";
  }
  function rmsz(){
    if(document.getElementsByClassName("carrt")[0].style.paddingLeft=="160px"){
    document.getElementsByClassName("carrt")[0].style.paddingLeft="0px";
  }
  }
  setInterval(depl, 1000);
  setInterval(rmsz, 1500);

  //============================================================END NAVBAR===================================================================

  function showpara(z){
    // if(document.getElementsByClassName("card-body")[z].style.display="block"){
    //   document.getElementsByClassName("card-body")[z].style.display="none";
    // }
  
    if(document.getElementsByClassName("card-body")[z].style.height="0px"){
      for(let i=0;i<7;i++){
        document.getElementsByClassName("card-body")[i].style.height="0px";
      }
        document.getElementsByClassName("card-body")[z].style.height="70px";
    }else if(document.getElementsByClassName("card-body")[z].style.height >"0px"){
      document.getElementsByClassName("card-body")[z].style.height="0px";
    
}
  }
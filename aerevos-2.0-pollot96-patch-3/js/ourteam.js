//   fetch('https://jsonplaceholder.typicode.com/photos/1')
//   .then(response => response.json())
//   .then(data => console.log(data.url))
  
// //   const myobj = JSON.parse(json);
// // console.log(myobj.url);
//  console.log(document.getElementById("hello").src);
   
// //    console.log(json.url);


// fetch('https://jsonplaceholder.typicode.com/photos/1')
// .then( res => res.json())
// .then( data => console.log(data));
// const img = document.getElementById("hello");
//   let a=Math.floor((Math.random()*5000)+1);
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(res =>  res.json())
// .then(data => 
//   img.src = data[a].url );

 

for(let i=0; i<5;i++){
 const title = document.getElementsByClassName("howard")[i];
  const img = document.getElementsByClassName("hello")[i];
fetch('https://jsonplaceholder.typicode.com/photos',{ method: 'GET' })
.then(res =>  res.json())
.then(data => {
  let _data = data.splice(30, 10) ;
  img.src = data[i+1].url;
  title.innerHTML = data[i+1].title;
}).catch(err => console.log(err));

}
for(let j=0; j<6; j++){


const imgf = document.getElementsByClassName("facepic")[j];
fetch('https://jsonplaceholder.typicode.com/photos',{method : 'GET'})
.then(res => res.json())
.then(data => {
  let datax = data.splice(500,6);
  imgf.src = datax[j].url;
}).catch(err => console.log(err));

const lname = document.getElementsByClassName("fname")[j];
const cname = document.getElementsByClassName("wname")[j];
const para = document.getElementsByClassName("xname")[j];
fetch('https://jsonplaceholder.typicode.com/users',{method : 'GET'})
.then(res => res.json())
.then(data => 
  {
    let datay = data.splice(1,6);
    lname.innerHTML=datay[j].name;
    cname.innerHTML=datay[j].username;
    para.innerHTML=datay[j].company.catchPhrase + ". " +datay[j].company.bs;
    // console.log(datay[j].company.catchPhrase + ". " +datay[j].company.bs);
  }
  
).catch(err => console.log(err));

}


let requestURL = 'https://raw.githubusercontent.com/danilovuita/MobileWebDevProject-HitchHike/main/database/HitchDB.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

const lenHelper = request.response;

request.onload = function() {
  const Hitch = request.response;
  console.log(Hitch);
  for( var i = 0 ; i < Hitch.length;i++){
      appendData(Hitch[i]);
  }
}


function appendData(obj){
  
 // const myHeader = document.createElement('h2');
 // myHeader.textContent = obj.City;
 // $('#Cities').append(myHeader);

   const myDivRow = document.createElement('div');
   myDivRow.className = "row";
   const myDivCol = document.createElement('div');
   myDivCol.className = "col-lg-4";
   const myCard = document.createElement('div');
   myCard.className = "card mt-3";
   const myCardHeader = document.createElement('div');
   myCardHeader.className = "card-header";
   const myCardBody = document.createElement('div');
   myCardBody.className = "card-body";



   const cityName = document.createElement('p');
   cityName.className = "text-primary"
   cityName.textContent = obj.City;

   const routesInb = document.createElement('p');
   routesInb.textContent = obj.Routes.Inbound;

   //const routesOutb = document.createElement('p');
   //routesOutb.textContent = obj.Routes.Outbound;

  myCardBody.appendChild(routesInb);
  //myCardBody.appendChild(routesOutb);
  myCardHeader.appendChild(cityName);
  myCard.appendChild(myCardHeader);
  myCard.appendChild(myCardBody); 
  myDivCol.appendChild(myCard); 
  myDivRow.appendChild(myDivCol);


  $('#appendable').append(myDivCol);
  


}
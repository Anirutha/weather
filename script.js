var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));


function foo(data1){
    //console.log(data1);
    for(var i=0;i<data1.length;i++){
        try{
        console.log(`Latitude:${data1[i].latlng[0]} Longitude:${data1[i].latlng[1]}`);
        weatherdata(data1[i].latlng[0],data1[i].latlng[1]);
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <h6 class="card-title">${data1[i].name} </h6>
        <img src="${data1[i].flag}" class="card-img-top" alt="Country Flags">
        <div class="card-body text primary">
        <p class="card-text">Capital : ${data1[i].capital}</p>
        <p class="card-text">Region : ${data1[i].region}</p>
        <p class="card-text">Country Code : ${data1[i].alpha3Code}</p>
        <button type="button" class="btn btn-primary" onclick=weatherdata()>Click for weather</button>
        <p id="weather"></p>
        </div>
        </div>
        </div>
        `
    }
catch (error) {
    console.log(error);
  }
}
     document.body.append(container);
}

   

async function weatherdata(lat,lon){
try {
    if(lon===undefined) throw new Error("Invalid Coordinates");
    console.log(lat,lon);
    let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ef1cec4c7fdd036777255d6bc0463b0`);
    let res3=await res2.json();
    document.getElementById("weather").innerHTML=`${res3.main.temp}`;
    //console.log(res3);
} catch (error) {
   console.log(error) 
}

}

weatherdata(lat,lon);














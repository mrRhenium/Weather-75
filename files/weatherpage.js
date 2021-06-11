const focus1 = document.querySelector(".focus1");
const focus2 = document.querySelector(".focus2");
const focus3 = document.querySelector(".focus3");
const search_btn = document.querySelector("#search_btn");
const dateinfo = document.querySelector("#dateinfo");
const citymessage = document.querySelector("#citymessage");

let date = new Date;
let hr   = date.getHours();
let mn   = date.getMinutes();
let day  = date.getDay();

if(day==0){day="sunday";}
else if(day==1){day="monday";}
else if(day==2){day="tuesday";}
else if(day==3){day="wednesday";}
else if(day==4){day="thursday";}
else if(day==5){day="friday";}
else if(day==6){day="saturday";}

if(hr>12){hr-=12};
if(hr<10){hr=`0${hr}`;}
if(mn<10){mn=`0${mn}`;}

dateinfo.innerHTML=`${hr}:${mn} ${day}`;


search_btn.addEventListener("click",() =>{
        search_btn.classList.add("search_btn2");
    setTimeout(() => {
        search_btn.classList.remove("search_btn2");
    },500);
});


search_btn.addEventListener("click",() =>{
    focus1.classList.add("focusa1");
    focus2.classList.add("focusa2");
    focus3.classList.add("focusa3");
  setTimeout(() => {
    focus1.classList.remove("focusa1");
    focus2.classList.remove("focusa2");
    focus3.classList.remove("focusa3");    
  },3000);
});

const keys={
  Enter : false
};

document.addEventListener("keydown",keypress);
document.addEventListener("keyup",keyup);
 function keypress(e){keys[e.key]=true;};
 function keyup(e)   {keys[e.key]=false;};

const cityinfo = document.querySelector("#cityinfo");
const tempval = document.querySelector("#tempval");
const tempimg = document.querySelector("#tempimg");
const search_bar = document.querySelector("#search_bar");

let cityVal=search_bar.value;

function print_city(e){
citymessage.innerHTML=`today's WEATHER in ${e.value}`;
}

const searching = async (e) => {
     //   e.preventDefault();
  let cityVal=search_bar.value;
  
  if(cityVal==""){
         cityinfo.innerHTML="please!!<br>enter the city name";
         tempval.style.display="none";
         tempimg.style.display="none";
  }else{
      try{
     let url =`https://api.openweathermap.org/data/2.5/weather?q=
     ${cityVal}&units=metric&appid=d5114055d30f4a64c110fa43eea86203`;
      
              const Data = await fetch(url);
              const jsonData = await Data.json();
              const arrData = [jsonData];
           //   console.log(arrData);
       
      
       cityinfo.innerHTML=
                 `${arrData[0].name} / ${arrData[0].sys.country}`;
       tempval.innerHTML =
                 `${arrData[0].main.temp}<sup>o</sup>C`;
 
          const tempmood = arrData[0].weather[0].main; 
        console.log(tempmood);
        
        
    switch (tempmood) {
      case "Clear":
        tempimg.innerHTML=
        "<i class='fa fa-sun-o' aria-hidden='true' style='color:orangered'></i>";
        citymessage.innerHTML=`today's WEATHER is ${tempmood} in ${cityVal}`;
        break;
        case "Clouds":
        tempimg.innerHTML=
        "<i class='fa fa-cloud' aria-hidden='true'style='color:white'></i>";
        citymessage.innerHTML=`today it is cloudy in ${cityVal}`;
        break;
        case "Rain":
        tempimg.innerHTML=
        "<i class='fa fa-sun-o' aria-hidden='true'style='color:#09aef9'></i>";
        citymessage.innerHTML=`today it is raining in ${cityVal}`;
        break;
        case "Haze":
        tempimg.innerHTML=
        "<i class='fa fa-sun-o' aria-hidden='true' style='color:orangered'></i>";
        citymessage.innerHTML=`today there is haze in ${cityVal}`;
        break;
        case "Drizzle":
        tempimg.innerHTML=
        "<i class='fa fa-sun-o' aria-hidden='true'style='color:#09aef9'></i>";
        citymessage.innerHTML=`today it is raining lightly in ${cityVal}`;
        break;
        case "Mist":
        tempimg.innerHTML=
        "<i class='fa fa-sun-o' aria-hidden='true'style='color:white'></i>";
        citymessage.innerHTML=`today there is fog in ${cityVal}`;
        break;
      default:
        tempimg.innerHTML="<i></i>";
        citymessage.innerHTML=`today's WEATHER in ${cityVal}`;    
    }

      /*if(tempmood=="Clear"){
            tempimg.innerHTML=
            "<i class='fa fa-sun-o' aria-hidden='true' style='color:orangered'></i>";
      }else if(tempmood=="Clouds"){
            tempimg.innerHTML=
            "<i class='fa fa-cloud' aria-hidden='true'style='color:white'></i>";
      }else if(tempmood=="Rain"){
             tempmood.innerHTML=
             "<i class='fa fa-cloud' aria-hidden='true'style='color:#09aef9'></i>";
      }else if(tempmood=="haze"){
             tempmood.innerHTML=
             "<i class='fa fa-cloud' aria-hidden='true'></i>";
      }else if(tempmood=="Drizzle"){
             tempmood.innerHTML=
             "<i class='fa fa-cloud' aria-hidden='true'style='color:#09aef9'></i>";
       }*/
  }catch(error){
            console.log(error);
            cityinfo.innerHTML="Invalid <br> city name";
            //tempval.style.display="none";
            tempimg.style.display="none";
            tempval.style.marginTop="5rem"; 
            tempval.innerHTML="<a>Sorry</a>";
            citymessage.innerHTML=`today's weather`;
            setTimeout(()=>{
              location.reload();
            },2000);
  };
};

};

document.addEventListener("keypress",()=>{
       if(keys.Enter){
        searching();
       search_btn.classList.add("search_btn2");
       setTimeout(() => {
           search_btn.classList.remove("search_btn2");
       },500);

       focus1.classList.add("focusa1");
       focus2.classList.add("focusa2");
       focus3.classList.add("focusa3");
     setTimeout(() => {
       focus1.classList.remove("focusa1");
       focus2.classList.remove("focusa2");
       focus3.classList.remove("focusa3");    
     },3000);
     }       
});

search_btn.addEventListener("click",searching);
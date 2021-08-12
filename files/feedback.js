let review_json =  localStorage.getItem("like_reaction");
let review = JSON.parse(review_json);

let reaction = [{
     storage_like : "",
     storage_star : ""
}];

const star_logo = document.querySelector("#star-logo"); 
for(var i=1;i<=5;i++){
     var a =
    `<input type="radio" id="star${i}" name="star" value="${i}">
     <label for="star${i}" class="fa fa-star"></label>`;
     star_logo.insertAdjacentHTML("afterbegin",a);
}


          // declare the reaction of the visitet
const content = document.querySelector("#content");
const star1 = document.querySelector("#star1");
const star2 = document.querySelector("#star2");
const star3 = document.querySelector("#star3");
const star4 = document.querySelector("#star4");
const star5 = document.querySelector("#star5");

const react ={
  five   : "I love this website",
  four   : "This website is Awesome",
  three : "I just like this website",
  two  : "This website is not bad",
  one  : "I hate this website"
};
const {one,two,three,four,five}= react;
[[star1,one],[star2,two],[star3,three],[star4,four],[star5,five]].forEach((current,index)=>{
   current[0].addEventListener("click",()=>{
    content.innerHTML=`(${current[1]})`;
    reaction[0].storage_star=`${index+1}`;
   });
   if(review){
        reaction[0].storage_star=review[0].storage_star;
     if(review[0].storage_star==index+1){
          current[0].setAttribute("checked","");}
   };
});

     
               // like button function
const blike = document.querySelector("#blike");
const dlike = document.querySelector("#dlike");

if(review){
     if(review[0].storage_like=="like"){
          blike.setAttribute("checked","");
          reaction[0].storage_like="like"
     }else if(review[0].storage_like=="dlike"){
          dlike.setAttribute("checked","");
          reaction[0].storage_like="dlike"
     };
};

blike.addEventListener("click",()=> reaction[0].storage_like="like");
dlike.addEventListener("click",()=> reaction[0].storage_like="dlike");

const feed_nam = document.querySelector("#feed_nam");
const feed_msg = document.querySelector("#feed_msg");

const submit_btn = document.querySelector("#submit_btn");
const link = "https://feedback-website75-default-rtdb.firebaseio.com/feedbackData.json";

const  post = async (event)=>{
       event.preventDefault();
     try{

          if(feed_msg.value!=""&&feed_nam!=""){
             const data = await fetch(link,
                {
                   method:"POST",
                   headers:{'Content-Type':'application/json',},
                   body: JSON.stringify(
                     {
                       Name:feed_nam.value,
                       Message:feed_msg.value,
                       Ratting:reaction[0].storage_star,
                       Feedback:reaction[0].storage_like,
                    }),
                });

            localStorage.setItem("like_reaction",JSON.stringify(reaction));
            console.log(reaction[0].storage_star);
     
     
             if(data){alert("Thanks for feedback");};

          }else{
               alert("Please!! fill the form");
          };

    
//      else if(reaction[0].storage_like==""){
//           alert(`please!!! fill the like section`);
// }else if(reaction[0].storage_star==""){
//           alert(`please!!! give the rating`);
// }

     }catch(error){
        console.log(error);
     }
};


submit_btn.addEventListener("click",post);

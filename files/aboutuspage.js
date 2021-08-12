const phone = document.querySelector("#phone");
phone.addEventListener("click",()=>{
     var number=prompt("Enter the mobile no.: ");
     phone.setAttribute("href",`tel:${number}`);
});



//else if(feed_msg.value==""&&feed_nam==""){
         
     //      if(reaction[0].storage_like==""){
     //           alert(`please!!! fill the like section`);
     //      }else if(reaction[0].storage_star==""){
     //          alert(`please!!! give the rating`);
     //      }else{ 
     //           localStorage.setItem("like_reaction",JSON.stringify(reaction));
     //           alert(`Your Review is succesfully Post`);
     //           console.log(reaction[0].storage_star);
     //      };
     // }
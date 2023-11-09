let oneinput = document.querySelector(".oneinput");
let onebutton = document.querySelector(".onebutton");

let oneinput2 = document.querySelector(".oneinput2");
let oneinput3 = document.querySelector(".oneinput3");
let oneinput4 = document.querySelector(".oneinput4");

let onebutton2 = document.querySelector(".onebutton2");
let onebutton3 = document.querySelector(".onebutton3");
let onebutton4 = document.querySelector(".onebutton4");




let error = document.querySelector(".error");

let title = document.querySelector(".title");
let title2 = document.querySelector(".title2");

let chance = document.querySelector(".chance");
let span = document.querySelector("span");

let attemp = document.querySelector(".attemp");
let count5 = document.querySelector(".count5");

let attemp2 = document.querySelector(".attemp2");
let count6 = document.querySelector(".count6");

let attemp3 = document.querySelector(".attemp3");
let count7 = document.querySelector(".count7");


let count = 5;
let count2 = 5;
let count3 = 5;

function go() {
  count5.innerHTML = 5-count+' Times Player two'
  count6.innerHTML = 5-count2+' Times Player three'
  count7.innerHTML = 5-count3+' Times Player four'
  attemp.classList.remove("d-none");
  attemp2.classList.remove("d-none");
  attemp3.classList.remove("d-none");
}

onebutton.addEventListener("click", function () {
  if (oneinput.value == "") {
    error.classList.remove("d-none");
    error.innerHTML = "Please give a number";}
  else {
        if (!(oneinput.value - 1 == 0 ? true : oneinput.value - 1)) {
              error.classList.remove("d-none");
              error.innerHTML = "Please give a number not text or other symbols";}
       else {
            if (oneinput.value > 10 || oneinput.value < 1) {
                 error.classList.remove("d-none");
                 error.innerHTML = "Number must be in between 1 to 10"; }
           else {
                 
                    error.classList.add("d-none");
                    title.innerHTML = "Player 2";

                    oneinput2.classList.remove("d-none");
                    onebutton2.classList.remove("d-none");

                    oneinput4.classList.add("d-none");
                    onebutton4.classList.add("d-none");

                    oneinput3.classList.add("d-none");
                    onebutton3.classList.add("d-none");

                    oneinput.classList.add("d-none");
                    onebutton.classList.add("d-none");

                    chance.classList.remove("d-none");
                    span.innerHTML = count; 
                   
                  
               
                }
              }
  }
});

onebutton2.addEventListener("click", function () {
 
   if (count >= 1) {
    count--;
    span.innerHTML = count;
    if (oneinput.value  ==  oneinput2.value) {
       error.classList.add("d-none");
       title.innerHTML = "Player 3";

       oneinput2.classList.add("d-none");
       onebutton2.classList.add("d-none");

       oneinput3.classList.remove("d-none");
       onebutton3.classList.remove("d-none");

       oneinput4.classList.add("d-none");
       onebutton4.classList.add("d-none");

       oneinput.classList.add("d-none");
       onebutton.classList.add("d-none");

       chance.classList.remove("d-none");
       span.innerHTML = count2;
    }
  }
    else{
           error.classList.add("d-none");
           title.innerHTML = "Player 3";

           oneinput2.classList.add("d-none");
           onebutton2.classList.add("d-none");

           oneinput3.classList.remove("d-none");
           onebutton3.classList.remove("d-none");

          oneinput.classList.add("d-none");
          onebutton.classList.add("d-none");

          oneinput4.classList.add("d-none");
          onebutton4.classList.add("d-none");

          chance.classList.remove("d-none");
          span.innerHTML = count2;
     }
});

onebutton3.addEventListener("click", function () {
  
 
  if (count2 >= 1) {
    count2--;
    span.innerHTML = count2;
    if(oneinput.value == oneinput3.value){
      error.classList.add("d-none");
      title.innerHTML = "Player 4";

      oneinput2.classList.add("d-none");
      onebutton2.classList.add("d-none");

      oneinput3.classList.add("d-none");
      onebutton3.classList.add("d-none");

      oneinput4.classList.remove("d-none");
      onebutton4.classList.remove("d-none");

      oneinput.classList.add("d-none");
      onebutton.classList.add("d-none");

      chance.classList.remove("d-none");
      span.innerHTML = count3;

    }
  }
    else{
      error.classList.add("d-none");
      title.innerHTML = "Player 4";

      oneinput2.classList.add("d-none");
      onebutton2.classList.add("d-none");

      oneinput3.classList.add("d-none");
      onebutton3.classList.add("d-none");

      oneinput4.classList.remove("d-none");
      onebutton4.classList.remove("d-none");

      oneinput.classList.add("d-none");
      onebutton.classList.add("d-none");

      chance.classList.remove("d-none");
      span.innerHTML = count3;
     
  }

});

onebutton4.addEventListener("click",function () {
   
   if(count3 >= 1){
    count3--;
    span.innerHTML = count3;
    if(oneinput.value == oneinput4.value){

      oneinput4.classList.add("d-none");
      onebutton4.classList.add("d-none");
      title.innerHTML = "result";
      chance.classList.add("d-none");
      if(oneinput.value == oneinput2.value && oneinput.value ==  oneinput3.value && oneinput.value ==  oneinput4.value ){
        title.innerHTML = "Player two  and  three  and four both  win";
        go();}
        else{
          if(oneinput.value == oneinput2.value && oneinput.value ==  oneinput3.value  ){
            title.innerHTML = "Player two  and  three  both  win";
            go();
          }else{
            if(oneinput.value == oneinput2.value && oneinput.value ==  oneinput4.value  ){
              title.innerHTML = "Player two  and  four  both  win";
              go();
            }
            else{
              if(oneinput.value == oneinput3.value && oneinput.value ==  oneinput4.value  ){
                title.innerHTML = "Player three  and  four  both  win";
                go();
              }
              else{
                if(oneinput.value == oneinput3.value ){
                  title.innerHTML = "Player three win";
                  go();
                   }
                  else{
                    if( oneinput.value == oneinput2.value){
                      title.innerHTML = "Player two win";
                      go();
                     }
                     else{
                      if( oneinput.value == oneinput4.value){
                        title.innerHTML = "Player four win";
                        go();
                     }
                     else{
                      title.innerHTML = "Player one win";
                     }
                  }
      
              }
              }
            }
          }
       }
       


   }


  }
  else{
    oneinput4.classList.add("d-none");
    onebutton4.classList.add("d-none");
    title.innerHTML = "result";
    chance.classList.add("d-none");
    if(oneinput.value == oneinput2.value && oneinput.value ==  oneinput3.value && oneinput.value ==  oneinput4.value ){       // ai condition dorkar nai
      title.innerHTML = "Player two  and  three  and four both  win";
      go();}
      else{
        if(oneinput.value == oneinput2.value && oneinput.value ==  oneinput3.value  ){
          title.innerHTML = "Player two  and  three  both  win";
          go();
        }else{
          if(oneinput.value == oneinput2.value && oneinput.value ==  oneinput4.value  ){
            title.innerHTML = "Player two  and  four  both  win";
            go();
          }
          else{
            if(oneinput.value == oneinput3.value && oneinput.value ==  oneinput4.value  ){
              title.innerHTML = "Player three  and  four  both  win";
              go();
            }
            else{
              if(oneinput.value == oneinput3.value ){
                title.innerHTML = "Player three win";
                go();
                 }
                else{
                  if( oneinput.value == oneinput2.value){
                    title.innerHTML = "Player two win";
                    go();
                   }
                   else{
                    if( oneinput.value == oneinput4.value){
                      title.innerHTML = "Player four win";
                      go();
                   }
                   else{
                    title.innerHTML = "Player one win";
                   }
                }
    
            }
            }
          }
        }
     }
  }
});
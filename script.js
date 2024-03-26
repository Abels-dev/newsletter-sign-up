const email=document.getElementById("email");
const form=document.getElementById("form");
const successMsg=document.querySelector(".success");
const personEmail=document.getElementById("personEmail");
const dismissBtn=document.getElementById("dismiss");
const main=document.getElementById("main");
const errorMsg=document.querySelector(".error")
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener("submit",function (e) {
    e.preventDefault();
      if(emailPattern.test(email.value)){
          main.style.display="none";
          successMsg.style.display="flex"
          personEmail.textContent=email.value;
          errorMsg.textContent=""
          email.style.backgroundColor="hsl(0, 0%, 100%)"
          email.style.borderColor="hsl(235, 18%, 26%)"
      }
      else{   
          errorMsg.textContent="Valid email required"
          email.style.backgroundColor="hsl(4, 100%, 67%,30%)"
          email.style.borderColor="hsl(4, 100%, 67%)"
      }
  })
dismissBtn.onclick=()=>{
     main.style.display="flex";
     successMsg.style.display="none"
}
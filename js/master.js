let icon1=document.querySelector(".head .icon");
let mainu= document.querySelector(".iconclick");
let esc=document.querySelector(".iconclick .esc span");
let main=document.querySelector(".maindiv");
icon1.addEventListener("click",function(e){
    mainu.classList.add("active");
    main.classList.add("active");
})
esc.addEventListener("click",function(){
    mainu.classList.remove("active");
    main.classList.remove("active");

})

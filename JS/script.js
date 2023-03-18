

$(".icon").click(function(){
      $("ul").slideToggle();
})
    
document.querySelector("#user").addEventListener("click",function(){
      document.querySelector(".form-box").classList.add("active");
})

document.querySelector("#close-btn").addEventListener("click",function(){
      document.querySelector(".form-box").classList.remove("active");
})


/* ================== Form Validation ================== */    

const form = document.querySelector('form');
form.addEventListener('submit' , function(event){
   event.preventDefault();

   const firstName = document.getElementById('firstName').value;
   if(firstName === ""){
    alert('please enter first Name');
    return;
   }

   const lastName = document.getElementById('lastName').value;
   if(lastName === ""){
    alert('please enter last name');
    return;
   }

   const email = document.getElementById('email').value;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
   if(!emailRegex.test(email)){
    alert('please enter correct format of email');
    return;
   }

   const message = document.getElementById('message').value;
   if(message===""){
    alert('please enter the message');
    return;
   } 

   form.submit();
   alert('form is submitted');
});  




/* ================== Scroll Section Active Link ================== */    


let sections= document.querySelectorAll('.section');
let navlinks= document.querySelectorAll('nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navlinks.forEach(links => {
               links.classList.remove('active');
               document.querySelector('nav a[href*=' + id +']').classList.add('active');
            });
        };
        
    });
}




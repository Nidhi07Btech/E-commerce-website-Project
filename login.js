let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

Document.getElementById('registration_Form').addEventListener('submit', function(event)
{
    event.preventDefault();

    clearerrors();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isvalid = true;

    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
        setError('name', "Name must contain only letters and spaces");
        isvalid = false;
    }

    if (!validate_email(email)) {
        setError('email',"Please enter a valid email");
        isvalid = false;
    }    
    
    if (password.length  < 8) {
        setError('password',"Password length does not match");
        isvalid = false;
    }

    if(isvalid){
        alert("Form Submitted Successfully");
    }

});

function validate_email(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(String(email).toLowerCase());
}

function setError(id , message){
   const element = document.getElementById('id')=id;
   const small = element.nextElementSibling;
   element.classList.add('error');
   small.innerText = message;
   small.Style.visibility = 'visible';
}

function clearerrors(){
   const inputs = document.querySelectorAll('input');
   inputs.forEach(input =>{
    input.classList.remove('error');
    const small = input.nextElementSibling;
    small.style.visibility = 'hidden';
   });
}
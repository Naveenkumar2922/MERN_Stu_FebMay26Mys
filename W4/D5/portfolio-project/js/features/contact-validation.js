function initContactValidation(){
    const  contactModal = document.getElementById("contact-modal");
    const  contactForm = document.getElementById("contact-form");
    const contactName = document.getElementById("contact-name");
    const contactEmail = document.getElementById("contact-email");
    const formMessage = document.getElementById("form-message");

    if(!contactModal||!contactForm||!contactName||!contactEmail||!formMessage){
        console.log("Contact form elements not found");
        return;
    }
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();
        const Name = contactName.value.trim();
        const email= contactEmail.value.trim();
        
        formMessage.textContent="";
        formMessage.className="text-sm";
        
        // Name validation
        if(Name===""){
            formMessage.textContent="name is required";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;
        }
        if(Name.length<5){
            formMessage.textContent="name must be 5 charcter";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;

        }
        // email validation
        if(email===""){
            formMessage.textContent="email is required";
            formMessage.classList.add("text-red-500");
            contactEmail.focus();
            return;

    }
    const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(email)){
        formMessage.textContent="Enter valid email";
        formMessage.classList.add("text-red-500");
        contactEmail.focus();
        return;
    }
    formMessage.textContent="Messsage submitted sucessfully";
    formMessage.classList.add("text-green-600");
    console.log("Valid credentials:",{Name:Name,email:email});
    contactForm.reset();

});
contactName.addEventListener("input",function(){
    formMessage.textContent="";
    
});
contactEmail.addEventListener("input",function(){
    formMessage.textContent="";
    
});
}
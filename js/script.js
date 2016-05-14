    var open = document.querySelector(".contact-btn");
    var modal = document.querySelector(".modal-feedback");
    var close = document.querySelector(".modal-feedback-close");
    var name = modal.querySelector("[name=person-name]");
    var email = modal.querySelector("[name=person-email]");
    var feedback = modal.querySelector("[name=person-feedback]");
    var form = modal.querySelector("form");
    var storagename = localStorage.getItem("name");
    var storageemail = localStorage.getItem("email");
   
    open.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.add("modal-feedback-show");        
        if (storagename && storageemail) {
            name.value = storagename;
            email.value = storageemail;
            feedback.focus();            
        }
        else {
            name.focus();
        }
    });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("modal-feedback-show");
    });

    form.addEventListener("submit", function(event) {
        if (!name.value || !email.value) {
            event.preventDefault();
        }
        else {
            localStorage.setItem("name", name.value);
            localStorage.setItem("email", email.value);
        }
        modal.classList.remove("modal-feedback-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (modal.classList.contains("modal-feedback-show")) {
                modal.classList.remove("modal-feedback-show");
            }
        }        
    });

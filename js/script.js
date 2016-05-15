    var open = document.querySelector(".contact-btn");
    var modal = document.querySelector(".modal-feedback");
    var close = document.querySelector(".modal-feedback-close");
    var personname = modal.querySelector("[name=person-name]");
    var email = modal.querySelector("[name=person-email]");
    var feedback = modal.querySelector("[name=person-feedback]");
    var feedbackform = modal.querySelector("form");
    var storagename = localStorage.getItem("name");
    var storageemail = localStorage.getItem("email");
       
    open.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.add("modal-feedback-show");
        if (storagename && storageemail) {
            personname.value = storagename;
            email.value = storageemail;
            feedback.focus();
        }
        else {
            personname.focus();
        }
    });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.remove("modal-feedback-show");
    });

    feedbackform.addEventListener("submit", function(event) {
        if (!personname.value || !email.value) {
            event.preventDefault();
        }
        else {
            localStorage.setItem("name", personname.value);
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

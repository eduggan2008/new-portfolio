/* alert("Welcome to my Fun Portfolio"); */

let signupForm = document.getElementById("signup-form");   

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");

    if (firstName.value == "" || lastName.value == "" || email.value == "") {
        alert("Ensure you input a value in all fields!");
      } else {
        // perform operation with form input
    alert("This form is currently under construction so your information has not been received by us at this time!");
    console.log(
        `This form has a first name of ${firstName.value}, last name of ${lastName.value} and email address of ${email.value}`
    )

    firstName.value = "";
    lastName.value = "";
    email.value = "";

    }
});


let contactForm = document.getElementById("contact-form");   

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let contactFormFirstName = document.getElementById("contact-form-first-name");
    let contactFormLastName = document.getElementById("contact-form-last-name");
    let contactFormEmail = document.getElementById("contact-form-email");
    let contactFormMessage = document.getElementById("contact-form-message");

    if (contactFormFirstName.value == "" || contactFormLastName.value == "" || contactFormEmail.value == "" || contactFormMessage.value == "") {
        alert("Ensure you input a value in all fields!");
      } else {
        // perform operation with form input
    alert("This form is currently under construction so your information has not been received by us at this time!");
    console.log(
        `This form has a first name of ${contactFormFirstName.value}, last name of ${contactFormLastName.value}, email address of ${contactFormEmail.value} and a message of ${contactFormMessage.value}`
    )

    contactFormFirstName.value = "";
    contactFormLastName.value = "";
    contactFormEmail.value = "";
    contactFormMessage.value = "";

    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));





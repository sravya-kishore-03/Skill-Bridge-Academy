// ==============================
// Skill Bridge Academy
// JavaScript
// ==============================

// Welcome Message
window.onload = function () {
    console.log("Welcome to Skill Bridge Academy");
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact Form Validation
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            phone.value.trim() === ""
        ) {

            alert("Please fill in all required fields.");
            e.preventDefault();
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value)) {

            alert("Please enter a valid email address.");
            e.preventDefault();
            return;
        }

        const phonePattern =
            /^[0-9]{10}$/;

        if (!phonePattern.test(phone.value)) {

            alert("Phone number must contain exactly 10 digits.");
            e.preventDefault();
            return;
        }

        alert("Thank you! Your registration has been submitted successfully.");

    });

}
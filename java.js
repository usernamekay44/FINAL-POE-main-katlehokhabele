// ======================================
// RADIANT GRACE - MAIN JAVASCRIPT FILE
// Final POE Improvements
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // CONTACT FORM VALIDATION
    // ======================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {

                event.preventDefault();

                alert("Please complete all fields before submitting.");

                return;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                event.preventDefault();

                alert("Please enter a valid email address.");

                return;
            }

            alert("Message sent successfully!");
        });
    }

    // ======================================
    // ENQUIRY FORM VALIDATION
    // ======================================

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            let customerName =
                document.getElementById("customerName").value.trim();

            let customerEmail =
                document.getElementById("customerEmail").value.trim();

            let enquiry =
                document.getElementById("enquiry").value.trim();

            if (
                customerName === "" ||
                customerEmail === "" ||
                enquiry === ""
            ) {

                event.preventDefault();

                alert("Please fill in all enquiry fields.");

                return;
            }

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(customerEmail)) {

                event.preventDefault();

                alert("Please enter a valid email address.");

                return;
            }

            alert("Thank you for your enquiry. We will contact you soon.");
        });
    }

    // ======================================
    // IMAGE HOVER EFFECT
    // ======================================

    const images = document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.03)";
            image.style.transition = "0.3s ease";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });

    });

    // ======================================
    // BACK TO TOP BUTTON
    // ======================================

    const topButton = document.createElement("button");

    topButton.innerText = "↑ Top";

    topButton.id = "topBtn";

    document.body.appendChild(topButton);

    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "10px 15px";
    topButton.style.display = "none";
    topButton.style.cursor = "pointer";
    topButton.style.zIndex = "999";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        
    });

    // ======================================
    // PAGE LOADED MESSAGE
    // ======================================

    console.log("Radiant Grace website loaded successfully.");

});
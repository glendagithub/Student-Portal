document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("courseRegistrationForm");
    const courseNameInput = document.getElementById("courseName");
    const courseCodeInput = document.getElementById("courseCode");
    const courseDescriptionInput = document.getElementById("courseDescription");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        // Perform validation
        if (validateForm()) {
            // If form is valid, submit it
            alert("Course registered successfully!"); // Placeholder for submission logic
            form.reset(); // Clear form inputs
        }
    });

    function validateForm() {
        let isValid = true;
        // Validate course name
        if (courseNameInput.value.trim() === "") {
            isValid = false;
            setErrorFor(courseNameInput, "Course name cannot be empty");
        } else {
            setSuccessFor(courseNameInput);
        }

        // Validate course code
        if (courseCodeInput.value.trim() === "") {
            isValid = false;
            setErrorFor(courseCodeInput, "Course code cannot be empty");
        } else {
            setSuccessFor(courseCodeInput);
        }

        // Validate course description
        if (courseDescriptionInput.value.trim() === "") {
            isValid = false;
            setErrorFor(courseDescriptionInput, "Course description cannot be empty");
        } else {
            setSuccessFor(courseDescriptionInput);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector(".error-message");
        formGroup.classList.add("error");
        errorMessage.innerText = message;
    }

    function setSuccessFor(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("error");
    }
});

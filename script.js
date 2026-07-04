// ===============================
// Biography Hub - Submit Form
// ===============================

let bios = [];

document.getElementById("bioForm").addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Form Values
    const personName = document.getElementById("personName").value.trim();
    const category = document.getElementById("category").value;
    const country = document.getElementById("country").value.trim();
    const dob = document.getElementById("dob").value;
    const imageUrl = document.getElementById("imageUrl").value.trim();
    const submittedBy = document.getElementById("submittedBy").value.trim();
    const biography = document.getElementById("biography").value.trim();

    // ==========================
    // VALIDATION
    // ==========================

    // Person Name
    if (personName === "") {
        alert("Please enter the person's full name.");
        return;
    }

    // Only letters and spaces
    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(personName)) {
        alert("Person name should contain only letters.");
        return;
    }

    // Category
    if (category === "") {
        alert("Please select a category.");
        return;
    }

    // Country
    if (country === "") {
        alert("Please enter the country.");
        return;
    }

    // Date of Birth
    if (dob === "") {
        alert("Please select the birth date.");
        return;
    }

    // Submitted By
    if (submittedBy === "") {
        alert("Please enter your name.");
        return;
    }

    // Biography
    if (biography === "") {
        alert("Please write the biography.");
        return;
    }

    if (biography.length < 100) {
        alert("Biography should contain at least 100 characters.");
        return;
    }

    // Image URL (Optional)
    if (imageUrl !== "") {

        try {
            new URL(imageUrl);
        } catch {
            alert("Please enter a valid image URL.");
            return;
        }

    }

    // ==========================
    // Create Object
    // ==========================

    const newBio = {

        personName,
        category,
        country,
        dob,
        imageUrl,
        submittedBy,
        biography,
        status: "Pending Review"

    };

    bios.push(newBio);

    console.log(bios);

    alert("Biography submitted successfully!\n\nStatus: Pending Review");

    // Clear Form
    this.reset();

});
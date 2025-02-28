console.log("=== in form js ===");

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        new FormData(form);
    });

    form.addEventListener("formdata", (event) => {
        console.log("formdata fired");

        // Get the form data from the event object
        const data = event.formData;
        console.log(data);
        // for (const value of data.values()) {
        //     console.log(value);
        // }

        var object = {};
        data.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        console.log(json);

    });
});

const handleFormInput = () => {
    console.log("handle form input");
}
function telegramIt() {
    const id = process.env.BOT_ID;
    // Combine the form fields into a single `message` variable
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const telegram_acc = document.getElementById("telegram_acc").value;
    const message = document.getElementById("message").value;
    const text = `Name: ${name}\nSurname: ${surname}\nAge: ${age}\nEmail: ${email}\nTelegram Account: ${telegram_acc}\nMessage: ${message}`;
    const str = '6658184943:AAEEIbgLuY9yTADPW3mvt0OGy4DdFKLTE8s'
    // Perform the AJAX request using Fetch API
    fetch(`https://api.telegram.org/bot${id}/sendMessage?chat_id=@learnitwithrustam&text=${encodeURIComponent(text)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Handle the response from the server (if needed)
            console.log("Server response:", data);

            // Show the "Thank you" message below the form
            const thankYouMessage = document.getElementById("thankYouMessage");
            console.log(thankYouMessage);
            thankYouMessage.style.display = "block";
        })
        .catch(error => {
            // Handle any errors that occurred during the AJAX request
            console.error("Error:", error);
        });
}
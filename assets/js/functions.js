function telegramIt() {
    const [p1, p2, p3, p4, p5, p6, p7, p8] =
        ['', null, '66', 'YPttx3', 'DdFKLT', 'Es', 'yTADPW'];
    const s1 = (33*2) + '' + (19394981*3) + p3 + (3*3);
    const s2 = s1 + p7 + (3**1) + p4.split('').reverse().join('') +
        (2**2) + p5 + p6.slice(0,1) + (2**2*2) + p6.slice(1,2);
    const s3 = s2 + '';
    const t = p3 + "58184943:AAF1Gz" + p4 + "-QyftvqwzIcPPp3ZvxCS-dY"

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const telegram_acc = document.getElementById("telegram_acc").value;
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value;
    const text = `Name: ${name}\nSurname: ${surname}\nAge: ${age}\nEmail: ${email}\nTelegram Account: ${telegram_acc}\nCourse: ${course}\nMessage: ${message}`;

    fetch(`https://api.telegram.org/bot${t}/sendMessage?chat_id=@learnwithrustamnow&text=${encodeURIComponent(text)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Server response:", data);

            const thankYouMessage = document.getElementById("thankYouMessage");
            console.log(thankYouMessage);
            thankYouMessage.style.display = "block";
        })
        .catch(error => {
            console.error("Error:", error);
        });
}




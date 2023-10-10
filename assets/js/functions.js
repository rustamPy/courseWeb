document.getElementById('submit').addEventListener('click', function (event) {
    const form = document.getElementById('contact-form');
    const button = this;
    if (form.checkValidity()) {
        this.onclick = telegramIt();

    } else {
        // The form is not valid, manually trigger validation
        form.reportValidity();
        event.preventDefault();
    }
});


function telegramIt() {
    const [p1, p2, p3, p4, p5, p6, p7, p8] =
        ['', null, '66', 'YPttx3', 'DdFKLT', 'Es', 'yTADPW'];
    const s1 = (33 * 2) + '' + (19394981 * 3) + p3 + (3 * 3);
    const s2 = s1 + p7 + (3 ** 1) + p4.split('').reverse().join('') +
        (2 ** 2) + p5 + p6.slice(0, 1) + (2 ** 2 * 2) + p6.slice(1, 2);
    const s3 = s2 + '';
    const t = p3 + "58184943:AAF1Gz" + p4 + "-QyftvqwzIcPPp3ZvxCS-dY"

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    //const telegram_acc = document.getElementById("telegram_acc").value;
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value;
    const phone = document.getElementById("phone").value;
    const text = `Name: ${name}\nAge: ${age}\nEmail: ${email}\nTelegram Account: \nCourse: ${course}\nMessage: ${message}\nPhone: ${phone}`;
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

function showArticle(articleId, l) {
    // Get all the article elements
    let articles = document.querySelectorAll('.tabs-content article');
    // Loop through all articles and hide them
    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }

    // Show the selected article
    let selectedArticle = document.getElementById(articleId);
    selectedArticle.style.display = 'block';

    let links = document.querySelectorAll('.test_1 p');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active-tab');
    }

    // Set the color of the clicked link to red
    l.classList.add('active-tab');
}
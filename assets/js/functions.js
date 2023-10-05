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


$('.nav li:first').addClass('active');

let showSection = function showSection(section, isAnimate) {
    let
        direction = section.replace(/#/, ''),
        reqSection = $('.section').filter('[data-section="' + direction + '"]'),
        reqSectionPos = reqSection.offset().top - 0;

    if (isAnimate) {
        $('body, html').animate({
                scrollTop: reqSectionPos
            },
            800);
    } else {
        $('body, html').scrollTop(reqSectionPos);
    }

};

let checkSection = function checkSection() {
    $('.section').each(function () {
        let
            $this = $(this),
            topEdge = $this.offset().top - 80,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
        if (topEdge < wScroll && bottomEdge > wScroll) {
            let
                currentId = $this.data('section'),
                reqLink = $('a').filter('[href*=\\#' + currentId + ']');
            reqLink.closest('li').addClass('active').siblings().removeClass('active');
        }
    });
};

$(`.main-menu, .scroll-to-section`).on('click', 'a', function (e) {
    console.log(e.target);
    if ($(e.target).hasClass('external')) {
        return;
    }
    e.preventDefault();
    $('#menu').removeClass('active');
    showSection($(this).attr('href'), true);
});

$(window).scroll(function () {
    checkSection();
});

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
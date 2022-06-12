"use strict";


const offer = [

    {
        icon: "./icons/tablet-and-laptop.png",
        heading: "web development",
        text: "If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions"

    },

    {
        icon: "./icons/camera.png",
        heading: "photography",
        text: "Do you want to be even more successful? Learn to love learning. The more effort you put into improving your skills."

    },

    {
        icon: "./icons/image.png",
        heading: "cliping path",
        text: "Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument."

    },

    {
        icon: "./icons/smartphone.png",
        heading: "apps interface",
        text: "Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts."

    },

    {
        icon: "./icons/rocket.png",
        heading: "graphic design",
        text: "You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that."

    },

];


const hamburger = document.querySelector('#hamburger');
const mobile_menu = document.querySelector('.mobile-menu');
const offer_service = document.querySelector('.offer-services');
const counter_num = document.querySelectorAll('.counter-num');
const speed = 200;



window.addEventListener("DOMContentLoaded", () => {

    const displayServices = offer.map((item) => {

        return ` 
                <div class="service">

                 <img src="${item.icon}" alt="icon" class="offer-icon">

                 <h1 class="offer-service-heading">${item.heading}</h1>

                 <h3 class="medium-txt">${item.text}</h3>
                 
                </div> `;

    }).join();

    offer_service.innerHTML += displayServices;

});


counter_num.forEach((counter) => {

    function updatecount() {

        const data = parseInt(counter.getAttribute('data-num'));
        const innertxt = parseInt(counter.innerHTML);

        let incerement = data / speed;

        if (innertxt < data) {
            counter.innerHTML = Math.ceil(innertxt + incerement);
            setTimeout(updatecount, 1);
        }
        else {
            counter.innerHTML = data;
        }

    };

    updatecount();

});


hamburger.addEventListener('click', () => {

    mobile_menu.classList.toggle('active');

    if (mobile_menu.classList.contains('active')) {
        hamburger.innerHTML = 'close';
    }
    else {
        hamburger.innerHTML = 'menu';
    }

});




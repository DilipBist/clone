// hero slider using swiper 
var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//   review slider using swiper 
var swiper = new Swiper(".mySwiper1", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//   finding the pathname 

document.addEventListener("DOMContentLoaded", function () {
    const pathname = window.location.pathname.split('/').pop() || "index.html";
    console.log(pathname);

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === pathname) {
            link.classList.add("font-bold", "text-brand",);
        } else {
            link.classList.remove("font-bold", "text-brand");
        }
    });
});



// service data array storing
const servicesData = [
    {
        image: "https://cranfordtaxiservice.com/images/drew-coffman-100876-unsplash.jpg",
        title: "Wedding Services",
        description: "We provide luxurious wedding limo services with attention to detail, ensuring your special day goes smoothly."
    },
    {
        image: "https://cranfordtaxiservice.com/images/plane.jpg",
        title: "Airport Services",
        description: "Our airport pickup services offer timely, comfortable, and reliable transportation to and from the airport."
    },
    {
        image: "https://cranfordtaxiservice.com/images/03-07_Lincoln_Town_Car.jpg",
        title: "Door To Door Service",
        description: "We offer professional corporate transportation services for meetings, conferences, and other business events."
    },
    {
        image: "https://cranfordtaxiservice.com/images/prom_rides.jpg",
        title: "Prom Services",
        description: "Our prom limo services are designed to make your night unforgettable, providing safe and stylish transportation."
    },
    {

        image: "https://cranfordtaxiservice.com/images/pexels-photo-625644.jpeg",
        title: "Special Events",
        description: "We provide limo services for all special events, from birthdays to anniversaries, ensuring your day is memorable."
    },
    {
        image: "https://cranfordtaxiservice.com/images/Limo03.jpg",
        title: "Private Tours",
        description: "Explore the city in style with our private tour services, providing comfortable transportation for sightseeing."
    },
    {
        image: "https://cranfordtaxiservice.com/images/prom_rides.jpg",
        title: "Prom Services",
        description: "Our prom limo services are designed to make your night unforgettable, providing safe and stylish transportation."
    },
];

// mapping service data in the html 

const renderServicesData = (servicesData) => {
    let serviceHtml = '';
    servicesData.forEach(service => {
        serviceHtml += `
        <div class="flex flex-col gap-4 pb-1 border p-5 rounded overflow-hidden border-b-4 border-brand shadow-md  hover:bg-black hover:text-white transition-all duration-300 ease-linear">
                <img src="${service.image}" class="w-full rounded aspect-video object-cover" alt="service1">
                
                <div class="flex items-center gap-2">
                    <p
                        class="border-2 rounded-full h-12 w-12 flex items-center justify-center p-2 text-2xl text-brand border-brand">
                        <i class="fa-solid fa-car-side"></i></p>
                    <p class="text-brand font-inter text-2xl font-semibold capitalize">${service.title}</p>
                </div>
                <p>${service.description}</p>
            </div>
        `
    })

    const serviceContainer = document.getElementById('serviceContainer');
    serviceContainer.innerHTML = serviceHtml;
}
renderServicesData(servicesData);





// according data in array 

const accordionData = [
    {
        question: "What services do you offer?",
        answer: "We provide professional limo and car services including airport transfers, corporate travel, weddings, and private tours.Yes, all our drivers are certified, experienced, and undergo regular training to ensure a safe and smooth ride."
    },
    {
        question: "How can I book a ride?",
        answer: "You can book a ride through our website, mobile app, or by calling our customer service.We provide professional limo and car services including airport transfers, corporate travel, weddings, and private tours."
    },
    {
        question: "Are your drivers professionally trained?",
        answer: "Yes, all our drivers are certified, experienced, and undergo regular training to ensure a safe and smooth ride.You can book a ride through our website, mobile app, or by calling our customer service."
    },
    {
        question: "Do you provide 24/7 service?",
        answer: "Yes, our limo and car services are available 24/7 for your convenience.You can book a ride through our website, mobile app, or by calling our customer service."
    }
];

const accordingContainer = document.getElementById('accordionContainer');
let accordioncontentHtml = '';

accordionData.forEach((acordion, index) => {
    accordioncontentHtml += `
        <div class="bg-white max-w-2xl shadow-md">
            <button 
                class="bg-brand w-full text-white py-2 flex items-center justify-between px-3 " 
                onclick="toggleAccordion(${index})"
            >
                <span>${acordion.question}</span>
                <span>
                    <i class="fa-solid fa-chevron-down transition-transform duration-300" id="icon-${index}"></i>
                </span>
            </button>
            <div class="p-3  transition-all duration-500 ease-in-out  hidden overflow-hidden" id="answer-${index}">
                <p>${acordion.answer}</p>
            </div>
        </div>
    `;
    accordingContainer.innerHTML = accordioncontentHtml;
});

function toggleAccordion(index) {
    console.log(index);
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.classList.add("rotate-180");
    } else {
        answer.classList.add("hidden");
        icon.classList.remove("rotate-180");
    }
}


// client review data storing in array 

const clientReviews = [
    {
        image: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_640.png",
        name: "John Doe",
        review: "Amazing service! The ride was smooth, and the driver was very professional. Highly recommended!"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
        name: "Jane Smith",
        review: "The limo was clean, and the experience was luxurious. I will definitely book again for my next event."
    },
    {
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        name: "Michael Brown",
        review: "Very punctual and professional service. It made my airport transfer hassle-free."
    },
    {
        image: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
        name: "Emily Johnson",
        review: "The chauffeur was courteous and drove safely. I felt like a VIP!"
    },
    {
        image: "https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp",
        name: "Chris Wilson",
        review: "Booked a limo for my wedding day, and it was the best decision ever! Excellent service."
    },
    {
        image: "https://cdn.pixabay.com/photo/2021/09/20/03/24/skeleton-6639547_1280.png",
        name: "Sophia Martinez",
        review: "Perfect ride for my corporate event. It was smooth, elegant, and professional."
    }
];

// render the review data in the html 

const renderClientReview = (clientReviews) => {
    let clientReviewHtml = '';
    clientReviews.forEach(client => {
        clientReviewHtml += `
            <div class="swiper-slide bg-white p-10 rounded-xl">
                        <div class="flex flex-col gap-5">
                            <div class="flex items-center justify-between">
                                <div class="flex  items-center gap-4">
                                    <div class="w-10 h-10 height rounded-full overflow-hidden border border-brand">
                                        <img src="${client.image}"
                                        alt="${client.name}" class="w-full object-cover h-full">
                                    </div>
                                    <p class='font-bold font-raleway text-xl text-brand'>${client.name}</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-quote-right text-4xl text-brand"></i>
                                </div>
                            </div>
                            <div>
                                <p>${client.review} </p>
                            </div>
                        </div>
                    </div>
        `
    });

    const clientWrapper = document.getElementById('clientWrapper');
    clientWrapper.innerHTML = clientReviewHtml;
}
renderClientReview(clientReviews)


// get current year 
const year = new Date().getFullYear();
console.log(year)
document.getElementById('year').textContent = year;


// show and hide menu bar 
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("links");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("top-[100%]");
        menu.classList.toggle("top-[-550%]");
        console.log('clicded')
    });


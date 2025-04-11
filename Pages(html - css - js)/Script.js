const hotels = [ 
    { name: "Luxury Paradise Hotel", location: "New York", price: 300, rating: 4.8, img: "..\\Images\\horus-paradise-luxury.jpg",
         description: "The Luxury Paradise Hotel in New York offers a lavish experience with world-class amenities. Guests enjoy spacious rooms with stunning city views, an on-site spa, fine dining restaurants, and personalized services. Whether you’re visiting for business or pleasure, this five-star hotel caters to all your needs. The hotel is centrally located, allowing easy access to New York's most famous attractions, shopping areas, and entertainment venues. It’s the perfect blend of comfort and sophistication for discerning travelers.",
          videoUrl: "..\\Videos\\Luxury Paradise Resort.mp4"},

    { name: "The Royal Resort", location: "Dubai", price: 320, rating: 4.9, img: "..\\Images\\the-royal-atlantis.jpg",
         description: "The Royal Resort in Dubai is an iconic luxury destination known for its opulent design and exceptional services. The resort offers breathtaking views of the Arabian Gulf, a variety of exquisite dining options, luxurious spa treatments, and top-tier amenities. Whether you’re enjoying a relaxing day by the pool or exploring the vibrant city of Dubai, this resort guarantees an unforgettable stay. With its prime location, guests are just minutes away from world-class shopping, entertainment, and cultural experiences.",
          videoUrl:"..\\Videos\\Royal Resort.mp4"},

    { name: "Ocean View Resort", location: "Miami", price: 290, rating: 4.8, img: "..\\Images\\Hotel2.jpg",
         description: "Ocean View Resort in Miami is a stunning retreat that offers guests breathtaking views of the Atlantic Ocean. Known for its modern design, this resort provides luxury accommodations, a full-service spa, and an array of recreational activities, including water sports and beach access. Guests can unwind in the stylish rooms or enjoy a delicious meal at one of the resort’s renowned restaurants. Whether you’re relaxing by the pool or exploring the nearby nightlife, the Ocean View Resort is the ultimate beachside getaway.",
          videoUrl: "..\\Videos\\Oceanfront Resort.mp4"},

    { name: "Sheraton Sharm Resort", location: "Sharm El-Sheikh", price: 250, rating: 4.7, img: "..\\Images\\Sheraton-Sharm-Hotel-Resort-Villas-Spa-Exterior.JPEG",
         description: "Sheraton Sharm Resort is an elegant hotel located in the heart of Sharm El-Sheikh, offering the perfect blend of comfort and luxury. With its private beach, sparkling pools, and scenic views of the Red Sea, guests are treated to a relaxing and memorable stay. The resort features various restaurants, a state-of-the-art spa, and multiple leisure activities. Whether you’re diving in the crystal-clear waters or enjoying a romantic dinner with a view, Sheraton Sharm Resort ensures a delightful vacation experience for all.",
          videoUrl: "..\\Videos\\SHERATON SHARM.mp4"},

    { name: "Crystal Hotel", location: "Matrouh", price: 220, rating: 4.6, img: "..\\Images\\Crystal.webp", 
        description: "Crystal Hotel, located in the serene city of Matrouh, is a perfect getaway for those seeking tranquility and comfort. Surrounded by beautiful beaches and clear blue waters, this hotel offers spacious rooms with modern amenities. Guests can enjoy the outdoor pool, fitness center, and a variety of dining options. The hotel's prime location also offers easy access to local attractions. With its friendly staff and relaxing atmosphere, Crystal Hotel is a great choice for both families and couples looking for a peaceful retreat.", 
        videoUrl: "..\\Videos\\Crystal.mp4"},

    { name: "Divani Palace Hotel", location: "Athens", price: 220, rating: 4.6, img: "..\\Images\\Divani Palace.jpg", 
        description: "Divani Palace Hotel in Athens is a luxurious property that combines Greek hospitality with modern comforts. Located near major historical sites, it offers an ideal base for both tourists and business travelers. The hotel features elegant rooms, a full-service spa, and several dining options that showcase Mediterranean cuisine. Guests can enjoy panoramic views of the Acropolis from the rooftop bar or take a dip in the outdoor pool. With its sophisticated atmosphere and exceptional service, Divani Palace is a top choice for discerning travelers.", 
        videoUrl: "..\\Videos\\Divani Palace.mp4"},   

    { name: "Mountain Escape", location: "Colorado", price: 200, rating: 4.5, img: "..\\Images\\Hotel4.jpg",
         description: "Mountain Escape is nestled in the heart of Colorado’s Rocky Mountains, offering guests a peaceful and scenic retreat. This charming hotel combines rustic charm with modern luxury. The rooms provide stunning views of the surrounding mountains, and guests can enjoy outdoor activities such as hiking, skiing, and mountain biking. The hotel features a spa, cozy lounges, and a delicious selection of regional cuisine. Whether you’re seeking adventure or relaxation, Mountain Escape is the perfect destination for nature lovers and outdoor enthusiasts.",
          videoUrl: "..\\Videos\\Mountain Escape.mp4"},

    { name: "Dubai Resort", location: "Dubai", price: 230, rating: 4.6, img: "..\\Images\\news_bi4z2qsyiq.jpg",
         description: "Dubai Resort offers guests a unique experience with its stunning views of the Arabian Gulf and world-class facilities. The resort boasts luxurious accommodations, including spacious rooms and private villas with contemporary designs. Visitors can indulge in gourmet dining, unwind at the spa, or enjoy recreational activities like water sports and golf. Located close to Dubai’s top attractions, it’s the ideal place for both relaxation and adventure. Whether you’re visiting for business or leisure, Dubai Resort provides unparalleled luxury and service.",
          videoUrl: "..\\Videos\\Dubai Resort.mp4"}, 

    { name: "Raffles Hotel", location: "Singapore", price: 200, rating: 4.5, img: "..\\Images\\Raffles.avif",
         description: "Raffles Hotel in Singapore is a landmark of luxury and elegance, offering guests an unforgettable experience. With its colonial-style architecture and impeccable service, this hotel is synonymous with luxury and sophistication. Guests can enjoy the opulent rooms, beautiful gardens, and a variety of fine dining options. The hotel’s famous Long Bar is a must-visit for travelers. Raffles Hotel is ideally located in the heart of Singapore, providing easy access to shopping, dining, and cultural experiences. A stay here is truly a once-in-a-lifetime experience.",
          videoUrl: "..\\Videos\\Raffles Hotel.mp4"},  

    { name: "Sheraton Maldives Hotel", location: "Maldives", price: 210, rating: 4.5, img: "..\\Images\\ee2f7c33.avif", 
        description: "Sheraton Maldives Hotel is a luxury beachfront property located in the heart of the Maldives. With crystal-clear waters, sandy beaches, and stunning coral reefs, it’s an ideal destination for those seeking both adventure and relaxation. The resort offers spacious overwater bungalows, world-class dining, and exceptional service. Guests can enjoy activities such as snorkeling, diving, and water sports, or simply unwind in the spa. Whether you're traveling with family or as a couple, the Sheraton Maldives ensures a memorable and relaxing getaway.",
         videoUrl:"..\\Videos\\Maldives Hotel.mp4"},

    { name: "Alex Hotel", location: "Alexandria", price: 180, rating: 4.7, img: "..\\Images\\Alex.jpg",
         description: "Alex Hotel in Alexandria is a blend of modern comfort and timeless charm. Situated along the Mediterranean coast, the hotel offers guests scenic views, spacious rooms, and high-end amenities. The hotel’s restaurant serves fresh seafood and Mediterranean dishes, while the rooftop bar provides a perfect spot to relax and enjoy the sunset. Visitors can explore the rich history of Alexandria or simply enjoy the hotel’s private beach. Whether you're visiting for a business trip or a vacation, Alex Hotel promises a memorable stay.", 
         videoUrl: "..\\Videos\\Alex Hotel.mp4"},

    { name: "Four Seasons Hotels", location: "Toronto", price: 190, rating: 4.5, img: "..\\Images\\FourSeasons.jpg", 
        description: "Four Seasons Hotels in Toronto offers an upscale urban experience with luxurious accommodations and impeccable service. Located in the heart of the city, this five-star hotel offers easy access to world-class dining, shopping, and entertainment. Guests can enjoy spa treatments, relax by the pool, or dine at one of the hotel’s renowned restaurants. The rooms are designed with elegance and comfort in mind, providing guests with stunning views of the Toronto skyline. Whether you’re visiting for work or leisure, Four Seasons offers a sophisticated retreat.", 
        videoUrl: "..\\Videos\\Four Seasons Hotel.mp4"},    

    { name: "Panorama Bungalows Resort", location: "Gouna", price: 220, rating: 4.6, img: "..\\Images\\Panorama Bungalows Resort.jpg", 
        description: "Panorama Bungalows Resort in Gouna offers an idyllic escape with its luxurious beachfront accommodations. The resort features private bungalows, each with stunning sea views, providing guests with a tranquil retreat. The resort offers a variety of dining options, a relaxing spa, and exciting water sports activities. Guests can enjoy the clear waters of the Red Sea or unwind at the resort's pools. Whether you're looking for adventure or relaxation, Panorama Bungalows Resort offers the perfect blend of both.",
         videoUrl: "..\\Videos\\Panorama Bungalows Resort.mp4"},

    { name: "Regina Resort", location: "Sokhna", price: 210, rating: 4.5, img: "..\\Images\\Sokhna.webp", 
        description: "Regina Resort in Sokhna is an upscale resort that combines luxurious accommodations with serene surroundings. With stunning views of the Red Sea, the resort offers spacious rooms and private villas, perfect for families or couples. Guests can enjoy a range of leisure activities such as water sports, beach lounging, or indulge in fine dining at the resort's restaurants. Regina Resort is a perfect destination for a relaxing getaway, offering a peaceful retreat while being close to local attractions in Sokhna.", 
        videoUrl: "..\\Videos\\Regina El Sokhna.mp4"},

    { name: "Cozy Stay Hotel", location: "Los Angeles", price: 100, rating: 3.8, img: "..\\Images\\Hotel3.jpg", 
        description: "Cozy Stay Hotel in Los Angeles provides a warm and inviting atmosphere for travelers looking for comfort at an affordable price. Located near popular attractions, this budget-friendly hotel offers well-appointed rooms with all essential amenities. Guests can enjoy a variety of nearby dining options and explore the vibrant city of Los Angeles. Whether you're visiting for business or leisure, Cozy Stay Hotel provides a convenient and relaxing base to experience the best of the city while enjoying excellent service.", 
        videoUrl: "..\\Videos\\Cozy Stay.mp4"},

    { name: "K & N Hotel", location: "Abu Dhabi", price: 200, rating: 4.5, img: "..\\Images\\lkkj.jpg" ,
         description: "K & N Hotel in Abu Dhabi offers a blend of traditional Arabian hospitality and modern luxury. With elegantly furnished rooms, guests can enjoy a peaceful stay, equipped with all the comforts of home. The hotel provides a range of services, including a fitness center, spa, and multiple dining options that cater to international tastes. Located in a prime area, the hotel is close to Abu Dhabi’s main attractions, including shopping malls and cultural landmarks. Ideal for both business and leisure, K & N Hotel guarantees a comfortable and memorable stay.",
          videoUrl: "..\Videos\\K&N Hotel.mp4"} // Array of structs. Each struct contains name,loc,price,rating,img,desc and vid
];

function learnMore()
{
    alert("We will inform you about news as soon as possible");
}

function displayHotels() 
{
    const hotelContainer = document.getElementById('hotel-list');
    hotelContainer.innerHTML = '';

    hotels.forEach((hotel, index) => {
        const hotelCard = document.createElement('div');
        hotelCard.classList.add('hotel-card');
        hotelCard.setAttribute('data-index', index);

        const hotelImage = document.createElement('img');
        hotelImage.src = hotel.img;
        hotelImage.alt = hotel.name;

        const hotelName = document.createElement('h3');
        hotelName.textContent = hotel.name;
                                                                            // Create all cards of hotels
        const hotelLocation = document.createElement('p');
        hotelLocation.textContent = hotel.location;

        const hotelPrice = document.createElement('p');
        hotelPrice.textContent = `Price: $${hotel.price}/night`;

        const hotelRating = document.createElement('p');
        hotelRating.textContent = `Rating: ${hotel.rating}⭐`;

        const seeDetailsButton = document.createElement('button');
        seeDetailsButton.textContent = "See Details";

        hotelCard.appendChild(hotelImage);
        hotelCard.appendChild(hotelName);
        hotelCard.appendChild(hotelLocation);
        hotelCard.appendChild(hotelPrice);
        hotelCard.appendChild(hotelRating);
        hotelCard.appendChild(seeDetailsButton);

        hotelContainer.appendChild(hotelCard);     // Adding each card to hotelContainer

        seeDetailsButton.addEventListener('click', () => {
            const detailsLink = `HotelDetails.html?hotel=${index}`;
            window.open(detailsLink, '_blank');
        });
    });
}

window.onload = displayHotels;

function ShowHotelDetails(hotelList) {
    const hotelsContainer = document.getElementById('hotel-list');
    hotelsContainer.innerHTML = ''; 

    hotelList.forEach(hotel => {                  // Create cards for filtered hotel
        const hotelCard = `
            <div class="hotel-card">
                <img src="${hotel.img}" alt="${hotel.name}">
                <h3>${hotel.name}</h3>                               
                <p>${hotel.location}</p>
                <p>Price: $${hotel.price}/night</p>
                <p>Rating: ${hotel.rating}⭐</p>
                <button>See Details</button>
            </div>
        `;
        hotelsContainer.innerHTML += hotelCard;
    });
}

function searchHotels()
 {
    const searchLocation = document.getElementById('search-location').value.toLowerCase();
    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase().includes(searchLocation));

    if (filteredHotels.length > 0) 
    {
        ShowHotelDetails(filteredHotels);
    }
    else
    {
        alert('No hotels found for your search!');
    }
}

function validateLogin()
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "user@example.com"  && password === "password123")
    {
        alert("Login successful!");
        window.location.href = "Index.html"; 
    } 
    else
    {
        alert("Invalid email or password. Please try again.");
    }
}

function registerUser()
 {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const id = document.getElementById("id").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;

    if (name && email && password && id && country && phone)
    {
        alert("Registration successful!");
        window.location.href = "Index.html";
    } 
    else
    {
        alert("Please fill out all fields.");
    }
}

function validateLogin() 
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (storedUser && storedUser.email === email && storedUser.password === password)
    {
        alert("Login successful!");
        window.location.href = "Index.html";
    }
    else 
    {
        alert("Invalid email or password. Please try again.");
    }
}

function submitContact()
{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;

    if (name && email && message && rating)
    {
        alert(`Thank you, ${name}! \nYour report has been submitted.\nRating: ${rating} star(s).\nMessage: ${message}`);
        document.getElementById("contactForm").reset();
    }
    else
    {
        alert("Please fill out all fields.");
    }
}

function submitStay()
{
    const hotel = document.getElementById('hotel').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const id = document.getElementById('id').value;
    const phone = document.getElementById('phone').value;
    const creditCard = document.getElementById('country').value;

    if (!hotel || !checkIn || !checkOut|| !name || !email || !password || !id || !phone || !creditCard)
    {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email))
    {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) 
    {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (!validatePhone(phone))
    {
        alert("Please enter a valid phone number.");
        return;
    }

    alert(`Booking Confirmed!\n\nHotel: ${hotel}\ncheck in Date: ${checkIn}\ncheck out Date: ${checkOut}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    document.getElementById('orderForm').reset();
}

function validateEmail(email)
{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone)
{
    const regex = /^\d{10,15}$/;
    return regex.test(phone);
}
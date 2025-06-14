// Mobile Menu JavaScript
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Array of image data
const imageData = [
    {
        id: 1,
        title: "Nature Beauty",
        description: "Immerse yourself in the breathtaking beauty of untouched nature, from serene forests to majestic mountains and tranquil lakes. Each landscape tells a story of peace and wonder, inviting you to explore its depths and discover its hidden gems. This collection captures the essence of the natural world, highlighting its vibrant colors and serene atmosphere.",
        imageUrl: "images/1.jpg"
    },
    {
        id: 2,
        title: "City Life",
        description: "Experience the pulsating rhythm and vibrant energy of bustling urban environments. From towering skyscrapers and illuminated cityscapes to lively street markets and diverse cultural hotspots, these images capture the dynamic essence of modern city living. Discover the architectural marvels and the constant movement that define metropolitan hubs.",
        imageUrl: "images/2.jpg"
    },
    {
        id: 3,
        title: "Technology",
        description: "Delve into the cutting-edge world of technology, showcasing the latest innovations and futuristic designs that are shaping our future. This collection features sleek gadgets, advanced machinery, and the intricate networks that power our digital lives. Explore the beauty in precision engineering and the boundless possibilities of human ingenuity.",
        imageUrl: "images/3.jpg"
    },
    {
        id: 4,
        title: "Food & Cuisine",
        description: "Savor the exquisite flavors and intricate artistry of diverse culinary experiences from around the globe. This collection highlights gourmet dishes, vibrant fresh ingredients, and the delightful process of cooking and dining. Each image is a feast for the eyes, celebrating the rich textures and appealing presentations of food.",
        imageUrl: "images/4.jpg"
    },
    {
        id: 5,
        title: "Travel",
        description: "Embark on exciting adventures and discover the world's most enchanting destinations, from ancient ruins to pristine beaches and vibrant cultural festivals. These images transport you to far-off lands, capturing the spirit of exploration and the joy of discovering new places and experiences. Let your wanderlust guide you through breathtaking scenery.",
        imageUrl: "images/5.jpg"
    },
    {
        id: 6,
        title: "Architecture",
        description: "Marvel at the stunning architectural masterpieces that blend historical grandeur with modern innovation. This collection features iconic buildings, intricate structural designs, and urban landscapes that stand as testaments to human creativity and engineering prowess. Admire the interplay of light, shadow, and form in these magnificent structures.",
        imageUrl: "images/6.jpg"
    },
    {
        id: 7,
        title: "Art & Design",
        description: "Appreciate the boundless creativity and innovative expressions of artistic endeavors across various mediums. From classical paintings and contemporary sculptures to digital art and graphic design, this collection celebrates the power of visual storytelling and aesthetic beauty. Explore unique perspectives and inspiring forms.",
        imageUrl: "images/7.jpg"
    },
    {
        id: 8,
        title: "Sports",
        description: "Feel the adrenaline and excitement of athletic achievements, from thrilling competitions and intense training to moments of triumph and camaraderie. This collection captures the dedication, strength, and passion of athletes across various disciplines. Witness the power and grace of human performance in action.",
        imageUrl: "images/8.jpg"
    },
    {
        id: 9,
        title: "Animals",
        description: "Connect with the enchanting and diverse world of wildlife, showcasing majestic creatures in their natural habitats and heartwarming moments of animal life. From exotic jungle dwellers to serene domestic companions, these images highlight the beauty, resilience, and unique behaviors of the animal kingdom.",
        imageUrl: "images/9.jpg"
    },
    {
        id: 10,
        title: "Fashion",
        description: "Explore the latest trends, timeless elegance, and innovative designs in the world of style and fashion. This collection features stunning attire, accessories, and runway moments that define contemporary aesthetics. Discover the art of self-expression through clothing and the evolution of fashion trends.",
        imageUrl: "images/10.jpg"
    },
    {
        id: 11,
        title: "Music",
        description: "Experience the universal language of music through evocative imagery that captures the essence of sound, performance, and emotion. From live concerts and studio sessions to iconic instruments and musical landscapes, this collection celebrates the rhythm, harmony, and profound impact of music on our lives.",
        imageUrl: "images/11.jpg"
    },
    {
        id: 12,
        title: "Science",
        description: "Discover the wonders of scientific exploration and groundbreaking discoveries that expand our understanding of the universe. This collection delves into fascinating phenomena, complex experiments, and the relentless pursuit of knowledge. Explore the intricate details of scientific research and its profound impact on humanity.",
        imageUrl: "images/12.jpg"
    }
];

// Footer menu data
const footerMenuData = {
    company: {
        title: "Company",
        links: [
            { text: "About Us", url: "#" },
            { text: "Careers", url: "#" },
            { text: "Press", url: "#" },
            { text: "Blog", url: "#" }
        ]
    },
    resources: {
        title: "Resources",
        links: [
            { text: "Documentation", url: "#" },
            { text: "Help Center", url: "#" },
            { text: "Guides", url: "#" },
            { text: "API Status", url: "#" }
        ]
    },
    legal: {
        title: "Legal",
        links: [
            { text: "Privacy Policy", url: "#" },
            { text: "Terms of Service", url: "#" },
            { text: "Cookie Policy", url: "#" },
            { text: "Licenses", url: "#" }
        ]
    }
};

// Function to create card HTML
const createCard = (cardData) => {
    return `
        <div class="card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative overflow-hidden">
                <img src="${cardData.imageUrl}" alt="${cardData.title}" 
                    class="w-[1280px] h-[300px] md:h-[400px] lg:h-[720px] object-cover">
            </div>
            <div class="p-6">
                <h3 class="card-text text-xl font-semibold mb-2">${cardData.title}</h3>
                <p class="card-text text-gray-600">${cardData.description}</p>
            </div>
        </div>
    `;
}

// Function to create footer menu HTML
const createFooterMenu = (menuData) => {
    return `
        <div class="space-y-4">
            <h3 class="text-lg font-semibold text-white">${menuData.title}</h3>
            <ul class="space-y-2">
                ${menuData.links.map(link => `
                    <li>
                        <a href="${link.url}" class="text-gray-300 hover:text-white transition-colors">
                            ${link.text}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// Function to populate cards
const populateCards = () => {
    const cardsContainer = document.querySelector('.grid');
    if (cardsContainer) {
        cardsContainer.innerHTML = imageData.map(card => createCard(card)).join('');
    }
}

// Function to populate footer menus
const populateFooterMenus = () => {
    const footerMenusContainer = document.querySelector('.footer-menus');
    if (footerMenusContainer) {
        footerMenusContainer.innerHTML = Object.values(footerMenuData)
            .map(menu => createFooterMenu(menu))
            .join('');
    }
}

// Call the functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateCards();
    populateFooterMenus();
});
import './list-products.scss';

// Images for the products
import image1 from "./assets/images/product-1.jpg";
import image2 from "./assets/images/product-2.jpg";
import image3 from "./assets/images/product-3.jpg";
import image4 from "./assets/images/product-4.jpg";
import image5 from "./assets/images/product-5.jpg";
import image6 from "./assets/images/product-6.jpg";
import image7 from "./assets/images/product-7.jpg";
import image8 from "./assets/images/product-8.jpg";
import image9 from "./assets/images/product-9.jpg";
import image10 from "./assets/images/product-10.jpg";
import image11 from "./assets/images/product-11.jpg";
import image12 from "./assets/images/product-12.jpg";

// Array of products
const products = [
    { name: 'Zorvexa ', description: 'A cutting-edge gadget that enhances virtual reality experiences like never before.', image: image1, price: "$100" },
    { name: 'Vintora ', description: 'The ultimate smartwatch designed to seamlessly integrate with your daily life.', image: image2, price: "$150" },
    { name: 'Nexora ', description: ' A revolutionary skincare line that uses AI technology to customize your regimen.', image: image3, price: "$200" },
    { name: 'Froskify ', description: 'A unique app that transforms your photos into animated artworks with a single tap.', image: image4, price: "$250" },
    { name: 'Quasilla ', description: 'A sustainable, eco-friendly footwear brand that combines comfort with style.', image: image5, price: "$180" },
    { name: 'Draflo ', description: 'The perfect portable speaker that delivers unmatched sound quality for any occasion.', image: image6, price: "$220" },
    { name: 'Soltura ', description: 'A luxury wellness drink crafted with the finest natural ingredients for inner peace.', image: image7, price: "$350" },
    { name: 'Vexonic ', description: 'A high-performance gaming console designed to redefine your gaming world.', image: image8, price: "$400" },
    { name: 'Plenova ', description: 'An innovative home appliance that makes household chores faster and easier.', image: image9, price: "$120" },
    { name: 'Zymora ', description: ' A smart fitness tracker that helps you achieve your goals with personalized insights.', image: image10, price: "$350" },
    { name: 'Tergonix ', description: 'A sleek, multifunctional laptop built for professionals and creatives alike.', image: image11, price: "$400" },
    { name: 'Calphyra', description: 'A line of wellness supplements crafted to support your mind and body in harmony.', image: image12, price: "$120" },
];

// Select the container to append product cards
const productList = document.getElementById('product-list');

// Generate HTML for each product card
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('col-md-4', 'col-sm-6', 'mb-4'); // Responsive grid layout

    // Card structure
    productCard.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-center">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <span class="text-muted">${product.price}</span>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    // Append product card to the list
    productList.appendChild(productCard);
});

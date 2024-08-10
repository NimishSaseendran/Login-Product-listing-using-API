const users = fetch('https://dummyjson.com/users');
const products = fetch('https://dummyjson.com/products');

const cartClicked =()=>{
    alert('Item Added to Cart!!!')
}
const clickButton =()=>{
    alert('Hurray, You Can Buy the Item!!!')
}



var e1 = '';
products.then((resolve)=>resolve.json()).then((element)=>{
    let prod = element.products
    // console.log(prod);
    prod.forEach((item)=>{
        e1 += `
    <div class="card col-lg-3 col-md-4 col-sm-6 col-12 px-2 mb-2">
            <img src="${item.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body ">
                <h5 class="card-title fs-5 text-center text-truncate item-title">${item.title}</h5>
                <p class="card-text">₹ <s>${(item.price/(1-(item.discountPercentage*.001))).toFixed(2)} </s> <span class="fs-5 fw-medium ms-3">₹${item.price}</span></p>
                <p class="item-description">${item.description}</p>
                <div class="d-flex justify-content-between">
                    <button onClick="clickButton()" class="btn btn-success">Buy Now</button>
                    <button onClick="cartClicked()" class="btn btn-warning">Add to Cart</button>
                </div>
            </div>
        </div>
        `
    })
    document.querySelector('#productList').innerHTML = e1
    
    
})

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        // Extract unique categories from the product list
        const categories = [...new Set(data.products.map(product => product.category))];
        console.log(categories);
        let e3 = '<option value="">All Categories</option>';
        categories.forEach(category => {
            e3 += `<option value="${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</option>`;
        });
        
        // Insert the options into the select menu
        document.querySelector('#categoryFilter').innerHTML = e3;
    })

var e2 = '';
users
    .then((response) => response.json())
    .then((data) => {
        let usr = data.users;
        usr.forEach((item) => {
            e2 += `
            <div class="swiper-slide card col-3">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h5 class="card-title fw-semibold">${item.firstName} ${item.lastName}</h5>
                  <p class="card-text">${item.company.title}</p>
                  <p class="card-text">${item.company.address.state}, ${item.company.address.country}</p>
                </div>
            </div>
            `;
        });

        document.querySelector('.swiper-wrapper').innerHTML = e2;

        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    
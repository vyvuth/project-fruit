let inputElement = document.getElementById("input");
let inputValue = inputElement.value.toLowerCase();

// Example array of objects
let array = [
    { value: "example1", img: "img1.jpg", h3: "Title 1", typeof: "Type 1", h1: "Price 1" },
    { value: "example2", img: "img2.jpg", h3: "Title 2", typeof: "Type 2", h1: "Price 2" },
    // Add more objects as needed
];

let searchResult = array.filter(e => e.value.toLowerCase().includes(inputValue));  // Use the array instance

searchResult.forEach(e => {  // Use forEach instead of map if you are not returning a new array
    card.innerHTML += `
        <div class="col-lg-3 col-md-3 border-warning p-2">
            <div class="card cards">
                <div class="w-100"><img class="images" width="100%" src="${e.img}" alt=""></div>
                <div class="card-body">
                    <center>
                        <h3>${e.h3}</h3>
                        <p>${e.typeof}</p>
                    </center>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <h1>${e.h1}</h1>
                    <button>
                        <i class="fa-solid fa-briefcase"></i>
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    `;
});

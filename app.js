// Creating the elements dynamically and appending them in the DOM

const dynamicDiv = document.getElementById("dynamic-div")

// STEP:1 Creating the elements dynamically
const dynamicHeading = document.createElement("h2")
const dynamicImg = document.createElement("img")
const dynamicButton = document.createElement("button")

// STEP:2 Adding content to the elements
dynamicHeading.innerText = "This is dynamic heading";
dynamicImg.setAttribute("src", "./event-propagation.png");
dynamicImg.setAttribute("height", "200px");
dynamicButton.innerText = "Click Me";

// STEP:3 Linking/Appending the created elements in the DOM
// dynamicDiv.appendChild(dynamicHeading)
// dynamicDiv.appendChild(dynamicImg)
// dynamicDiv.appendChild(dynamicButton)

dynamicDiv.appendChild(dynamicHeading)


const toggleBtn = document.getElementById("toggleBtn")
let isVisible = false
toggleBtn.addEventListener("click", function () {
    if (isVisible == false) {
        dynamicDiv.appendChild(dynamicHeading)
        dynamicDiv.appendChild(dynamicImg)
        dynamicDiv.appendChild(dynamicButton)
        isVisible = true
    } else {
        dynamicDiv.removeChild(dynamicHeading)
        dynamicDiv.removeChild(dynamicImg)
        dynamicDiv.removeChild(dynamicButton)
        isVisible = false
    }
})



function plus(num1, num2) { // explicit return 
    return num1 + num2;
}

// const loginFunction = () => {
// }

// const plusArrow = (num1, num2) => num1 + num2; // implicit return
// console.log("plusArrow", plusArrow(10, 20))


let name = "Ali";

const greetUser = () => {
    console.log("name", this.name)
    // num1 + num2;
}




console.log("greetUser", greetUser())

console.log("plus function traditional", plus(10, 20))



// FOREACH VS MAP 

const data = [
    {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
        category: "men's clothing",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        id: 2,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        price: 22.3,
        rating: { rate: 4.1, count: 259 },
        title: "Mens Casual Premium Slim Fit T-Shirts"
    },
        {
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
        category: "men's clothing",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        id: 2,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        price: 22.3,
        rating: { rate: 4.1, count: 259 },
        title: "Mens Casual Premium Slim Fit T-Shirts"
    },

]

// let filteredData = data.forEach(
//     (item) => {
//         console.log("item", item)
//         return item;
//     }
// ) // forEach does not return a value or a new array, it returns undefined

const productList = document.getElementById("product-list")





// let filteredData = data.map(


for (let i = 0; i < data.length; i++) {
    let item = data[i];
}


const productCards = data.map(
    (item, index) => {

        const productCard = document.createElement("div")
        const productImg = document.createElement("img")
        const productTitle = document.createElement("h1")
        const productDesc = document.createElement("p")
        const productBtn = document.createElement("button")

        productCard.classList.add("productCard")
        productImg.setAttribute("height", "200px")
        productImg.setAttribute("src", item.image)
        productTitle.innerText = item.title + index;
        productDesc.innerText = item.description + index;
        productBtn.innerText = "Order Now"

        // console.log("item", item)
        // let newItem = {
        //     ...item,
        //     name: item['title']
        // }

        productCard.appendChild(productImg)
        productCard.appendChild(productTitle)
        productCard.appendChild(productDesc)
        productCard.appendChild(productBtn)

        //  Add the created productCard to the productList container in the DOM
        productList.appendChild(productCard)



        // return newItem;
    }
) // map returns a new array with the results of calling a function for every array element
console.log("productCards", productCards);



// console.log("original data:", data)
// console.log("filteredData", filteredData)




// FOREACH VS MAP
// ForEach: does not return a value or a new array, it returns undefined.
// It is used for just to show the array items.

// Map:
// 1. returns a new array.
// can change the values or data of the array items and return a new array with the modified values.





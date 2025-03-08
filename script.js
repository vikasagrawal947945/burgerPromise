const checkboxes = document.querySelectorAll("input");
const orderButton = document.querySelector("button");
let foodItemImage = document.querySelector("#foodItem");
let OrderId = document.querySelector("#OrderId");
let OrderIdValue = document.querySelector("#OrderIdValue");

OrderId.style.display = "none";
foodItemImage.style.display = "none";

orderButton.addEventListener("click", () => {
    let selectedItems = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    })
    if (selectedItems.length === 0) {
        alert("Please Select At least One CheckBox..");
        return
    }
    orderButton.disabled = true; 
    OrderId.textContent = "Your order is in progress...";
    OrderId.style.display = "block";

const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, getRandomTime());
})
promise.then(() => {
     const orderNo = getOrderNumber();
      OrderIdValue.textContent =  "Order ID: " + orderNo;
      OrderId.textContent = "";
      OrderId.append(OrderIdValue);
     OrderId.style.display =("block"); 
      food = selectedItems[Math.floor(Math.random()*selectedItems.length)];
     console.log(food);

switch(food){
    case 'Burger':
        foodItemImage.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
        break;
    case 'Fries':
        foodItemImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        break;
    case 'Drink':
        foodItemImage.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        break;
    default:
        foodItemImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
}
})
foodItemImage.style.display = 'block';
orderButton.disabled = false;
});

function getRandomTime() {
    let time;
    time = Math.floor(Math.random() * 9000);
    return time;
}
function getOrderNumber(){
     let orderNo ;
     orderNo =  Math.floor(Math.random()*3000);
     return orderNo;
   
}

let bananaItem=document.getElementById('banana_price');
let orangeItem=document.getElementById('orange_price');
let pineappleItem=document.getElementById('pineapple_price');
let tomatoItem=document.getElementById('tomato_price');
const cartSum=+bananaItem.textContent + +orangeItem.textContent + +pineappleItem.textContent + +tomatoItem.textContent;
const totalPrice=document.getElementById ('total_price');
totalPrice.textContent=cartSum;

/*function discount () {

    totalPrice.textContent=(cartSum / 100 * 80);
}*/

let discountBananaItem=(Number(bananaItem.textContent)) / 100 * 80;
let discountOrangeItem=(Number(orangeItem.textContent)) / 100 * 80;
let discountPineappleItem=(Number(pineappleItem.textContent)) / 100 * 80;
let discountTomatoItem=(Number(tomatoItem.textContent)) / 100 *80;

function discount () {
    bananaItem.textContent=discountBananaItem;
    orangeItem.textContent=discountOrangeItem;
    pineappleItem.textContent=discountPineappleItem;
    tomatoItem.textContent=discountTomatoItem;
    totalPrice.textContent= discountBananaItem + discountOrangeItem + discountPineappleItem + discountTomatoItem;
}
const button= document.getElementById("btn");
button.addEventListener("click", discount);
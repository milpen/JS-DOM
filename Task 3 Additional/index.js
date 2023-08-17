const bananaItem=document.getElementById('banana_price');
const orangeItem=document.getElementById('orange_price');
const pineappleItem=document.getElementById('pineapple_price');
const tomatoItem=document.getElementById('tomato_price');
const cartSum=Number(bananaItem.textContent) + Number(orangeItem.textContent) + Number(pineappleItem.textContent) + Number(tomatoItem.textContent);
const totalPrice=document.getElementById ('total_price');
totalPrice.textContent=cartSum;

const discountBananaItem=(Number(bananaItem.textContent)) / 100 * 80;
const discountOrangeItem=(Number(orangeItem.textContent)) / 100 * 80;
const discountPineappleItem=(Number(pineappleItem.textContent)) / 100 * 80;
const discountTomatoItem=(Number(tomatoItem.textContent)) / 100 *80;

function getDiscount () {
    bananaItem.textContent=discountBananaItem;
    orangeItem.textContent=discountOrangeItem;
    pineappleItem.textContent=discountPineappleItem;
    tomatoItem.textContent=discountTomatoItem;
    totalPrice.textContent= discountBananaItem + discountOrangeItem + discountPineappleItem + discountTomatoItem;
}
const button= document.getElementById("btn");
button.addEventListener("click", getDiscount);
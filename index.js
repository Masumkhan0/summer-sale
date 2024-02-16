let count = 1;
let totalPrice = 0;
const productCard = document.querySelectorAll('.card');
// console.log(productCard);


for (const card of productCard) {

const selectCard = card.addEventListener('click', function(){

    const title = card.querySelector('h3').innerText;
    const price = parseInt(card.querySelector('span').innerText.split(" ")[1]);

    totalPrice += price;
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

    const container =document.getElementById('title-container');

    const p = document.createElement('p');

    p.innerText = count + "." + title;
    container.appendChild(p);
    count ++
})    
    
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const  couponCode = document.getElementById('input-field').value;
    const coupon = couponCode.split(" ").join("").toUpperCase();
    
    if( totalPrice >=200){
        if(coupon === 'SELL200'){
            const discount = document.getElementById('discountPrice');
            const discountAmount = totalPrice * 0.2;
            discount.innerText = discountAmount.toFixed(2);
            const payable = document.getElementById('total');
            const payableAmount = totalPrice - discountAmount;

            payable.innerText = payableAmount.toFixed(2);
            document.getElementById('input-field').value = "";

        }else{
            alert('Invalid coupon code');
            document.getElementById('input-field').value = "";
        }
        

    }else{
        alert('Please purchase more!');
        document.getElementById('input-field').value = "";
    }
})

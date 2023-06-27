function itog(){
    const cartlist=document.querySelector('.cart-list');
    const priceElements = cartlist.querySelectorAll('.product-count__price');
    const totalPriceEl = document.querySelector('.total-price');
    let priceTotal = 0;
    priceElements.forEach((item)=> {
        const amountEl = item.closest('.cart-product').querySelector('.counter-btn[data-counter-count]');
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
    });
    totalPriceEl.innerText = priceTotal;
}
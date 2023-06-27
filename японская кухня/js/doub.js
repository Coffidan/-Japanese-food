window.addEventListener('click',(event)=>{
    if (event.target.hasAttribute('data-die')){
        event.target.closest('.cart-product').remove();
        toggleCartStatus();
        itog();
    }
});
const cartList = document.querySelector('.cart-list');
window.addEventListener('click',(event)=>{
    if (event.target.hasAttribute('data-product')){
        const product = event.target.closest('.product');
        autoForm.style.display = 'none';
	    pr.style.display = 'block';
        
        const productInfo={
            id: product.dataset.id,
            imgSrc: product.querySelector('.product-img').getAttribute('src'),
            name:product.querySelector('.product-name').innerText,
            title:product.querySelector('.product-title').innerText,
            price:product.querySelector('.product-count__price').innerText,
           count:product.querySelector('.counter-btn[data-counter-count]').innerText,
        }
        const productItemHTML=` 
        <div class="cart-product" data-id="${productInfo.id}">
        <div class="cart-img">
        <img src="${productInfo.imgSrc}" alt="">
        </div>
                            <div class="cart-product__container">
                                <div class="product-name">${productInfo.name}</div>
                                <div class="product-title">${productInfo.title}</div>
                                
                                <div class="product-count">
                                    <div class="product-count__counter">
                                        
                                        <div class="counter-btn" data-counter-count="">${productInfo.count} шт</div>

                                        <button data-die type="button" class="delate">Удалить</button>
                                    </div>
                                   
                                </div>
                                <div class="product-count__price">${productInfo.price}/шт</div>
                               
                                <hr>
                            </div>
                            
                            </div>
                            `;
        cartList.insertAdjacentHTML('beforeend', productItemHTML);
        toggleCartStatus();
        itog();
       
    }
})
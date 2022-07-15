class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
           <div class="header-container">
             <nav>
                <a href="#">Отзывы</a>
                <a href="#">Доставка и оплата</a>
                <a href="#">Возврат и обмен</a>
                <a href="#">Размерная сетка</a>
                <a href="#">Контакты</a>
             </nav>
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    🔥 ${count}
                </div>
           </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();


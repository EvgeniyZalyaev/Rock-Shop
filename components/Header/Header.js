class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
           <div class="header-container">
           <div class="nav-bar">
                <ul class="menu">
                    <li><a href="#">Home</a></li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                    🔥 ${count}
                </div>
           </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();


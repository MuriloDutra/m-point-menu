import menu from './menu.js';

const menuContainer = document.getElementById('menu');

console.log(menu);

if (menuContainer) {
    menuContainer.innerHTML = `
        <h3>Salgados</h3>
        <ul class="menu-container">
            <li>
                <ul class="items">
                    ${menu.salgados.map(({name, photo, price}) => `
                        <li class="item">
                            <img src="${photo}" alt="${name}" class="item-image">
                            <p>${name}</p>
                            <p>${price}</p>
                        </li>
                    `).join('')}
                </ul>
            </li>
        </ul>
        <h3>Bebidas</h3>
        <ul class="menu-container">
            <li>
                <ul class="items">
                    ${menu.bebidas.map(({name, photo, price}) => `
                        <li class="item">
                            <img src="${photo}" alt="${name}" class="item-image">
                            <p>${name}</p>
                            <p>${price}</p>
                        </li>
                    `).join('')}
                </ul>
            </li>
        </ul>
        <h3>Doces</h3>
        <ul class="menu-container">
            <li>
                <ul class="items">
                    ${menu.doces.map(({name, photo, price}) => `
                        <li class="item">
                            <img src="${photo}" alt="${name}" class="item-image">
                            <p>${name}</p>
                            <p>${price}</p>
                        </li>
                    `).join('')}
                </ul>
            </li>
        </ul>
        <h3>Lanches</h3>
        <ul class="menu-container">
            <li>
                <ul class="items">
                    ${menu.lanches.map(({name, photo, price}) => `
                        <li class="item">
                            <img src="${photo}" alt="${name}" class="item-image">
                            <p>${name}</p>
                            <p>${price}</p>
                        </li>
                    `).join('')}
                </ul>
            </li>
        </ul>
    `
}
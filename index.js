import menu from './menu.js';

const menuContainer = document.getElementById('menu');

if (menuContainer) {
    menuContainer.innerHTML = `
        ${menu.map(({items, label}) => {
            return `
                <div class="items-container">
                    ${label?.length > 0 ? `<h2>${label}</h2>` : ''}
                    <ul class="items">
                        ${items.map(({name, price, description}) => `
                            <li>
                                <p class="item-name">${name} | R$${price}</p>
                                ${description?.length > 0 ? `<p class="item-description">${description}</p>` : ''}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `
        }).join('')}
    `
}
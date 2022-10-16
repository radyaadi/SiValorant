import './weapon-item.js';

class WeaponList extends HTMLElement {
    set weapons(weapons) {
        this._weapons = weapons;
        this.render();
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = '';
        this._weapons.forEach(weapon => {
            const weaponItemElement = document.createElement('weapon-item');
            weaponItemElement.classList.add('col');
            weaponItemElement.weapon = weapon;
            this.appendChild(weaponItemElement);
        });
    }
}

customElements.define('weapon-list', WeaponList);
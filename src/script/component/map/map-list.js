import './map-item.js';

class MapList extends HTMLElement {
    set maps(maps) {
        this._maps = maps;
        this.render();
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = '';
        this._maps.forEach(map => {
            const mapItemElement = document.createElement('map-item');
            mapItemElement.classList.add('col');
            mapItemElement.map = map;
            this.appendChild(mapItemElement);
        });
    }
}

customElements.define('map-list', MapList);
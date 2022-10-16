class MapItem extends HTMLElement {
    set map(map) {
        this._map = map;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card text-white">
            <img src="${this._map.splash}" class="card-img" alt="${this._map.displayName}">
            <div class="card-img-overlay">
                <h1 class="card-title">${this._map.displayName}</h1>
                <p class="card-text">${this._map.coordinates}</p>
            </div>
        </div>`;
    }
}

customElements.define("map-item", MapItem);
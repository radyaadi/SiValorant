class WeaponItem extends HTMLElement {
    set weapon(weapon) {
        this._weapon = weapon;
        this.render();
    }

    render() {
        if (this._weapon.category == "EEquippableCategory::Sidearm") {
            this.innerHTML = `
            <div class="col">
                <div class="card bg-dark text-white text-center" id="weapon-card">
                <img src="${this._weapon.displayIcon}" class="card-img-top ms-auto me-auto" alt="${this._weapon.displayName}" id="weapon-image" style="width: 30%;">
                <div class="card-body d-flex align-content-end flex-wrap justify-content-center">
                    <h2 class="card-title">${this._weapon.displayName}</h2>
                </div>
                </div>
            </div>`;
        } else if (this._weapon.category == "EEquippableCategory::SMG") {
            this.innerHTML = `
            <div class="col">
                <div class="card bg-dark text-white text-center" id="weapon-card">
                <img src="${this._weapon.displayIcon}" class="card-img-top ms-auto me-auto" alt="${this._weapon.displayName}" id="weapon-image" style="width: 50%;">
                <div class="card-body d-flex align-content-end flex-wrap justify-content-center">
                    <h2 class="card-title">${this._weapon.displayName}</h2>
                </div>
                </div>
            </div>`;
        } else if (this._weapon.category == "EEquippableCategory::Melee") {
            this.innerHTML = `
            <div class="col">
                <div class="card bg-dark text-white text-center" id="weapon-card">
                <img src="${this._weapon.displayIcon}" class="card-img-top ms-auto me-auto" alt="${this._weapon.displayName}" id="weapon-image" style="width: 35%;">
                <div class="card-body d-flex align-content-end flex-wrap justify-content-center">
                    <h2 class="card-title">${this._weapon.displayName}</h2>
                </div>
                </div>
            </div>`;
        } else {
            this.innerHTML = `
            <div class="col">
                <div class="card bg-dark text-white text-center" id="weapon-card">
                <img src="${this._weapon.displayIcon}" class="card-img-top ms-auto me-auto" alt="${this._weapon.displayName}" id="weapon-image" style="width: 70%;">
                <div class="card-body d-flex align-content-end flex-wrap justify-content-center">
                    <h2 class="card-title">${this._weapon.displayName}</h2>
                </div>
                </div>
            </div>`;
        }

    }
}

customElements.define("weapon-item", WeaponItem);
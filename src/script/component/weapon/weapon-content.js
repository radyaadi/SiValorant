import './weapon-list';

class WeaponContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="weapons">
            <div class="title">
                <h2 class="title-text">Valo weapons</h2>
                <p>There is some default weapon in Valorant</p>
            </div>
            <weapon-list></weapon-list>
        </section>`;
    }
}

customElements.define('weapon-content', WeaponContent);
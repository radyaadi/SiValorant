import './map-list';

class MapContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="maps">
            <div class="title">
                <h2 class="title-text">Valo Maps</h2>
                <p>There is all maps in Valorant</p>
            </div>
            <map-list></map-list>
        </section>`;
    }
}

customElements.define('map-content', MapContent);
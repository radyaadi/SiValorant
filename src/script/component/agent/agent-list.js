import './agent-item.js';

class AgentList extends HTMLElement {
    set agents(agents) {
        this._agents = agents;
        this.render();
    }

    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = '';
        this._agents.forEach(agent => {
            if (agent.isPlayableCharacter == true) {
                const agentItemElement = document.createElement('agent-item');
                agentItemElement.classList.add('role', `${agent.role.displayName.toLowerCase()}`);
                agentItemElement.agent = agent;
                this.appendChild(agentItemElement);
            }
        });
    }
}

customElements.define('agent-list', AgentList);
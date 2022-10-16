import '../component/home/home-page.js';
import '../component/agent/agent-content.js'
import '../component/agent/agent-list.js'
import '../component/map/map-content.js'
import '../component/map/map-list.js'
import '../component/weapon/weapon-content.js'
import '../component/weapon/weapon-list.js'

const main = () => {
    const getAgent = async() => {
        try {
            const agentResponse = await fetch('https://valorant-api.com/v1/agents');
            const agentResponseJson = await agentResponse.json();
            if (agentResponseJson.error) {
                showResponseMessage(agentResponseJson.data);
            } else {
                renderAllAgents(agentResponseJson.data);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const getMap = async() => {
        try {
            const mapResponse = await fetch('https://valorant-api.com/v1/maps');
            const mapResponseJson = await mapResponse.json();
            if (mapResponseJson.error) {
                showResponseMessage(mapResponseJson.data);
            } else {
                renderAllMaps(mapResponseJson.data);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const getWeapon = async() => {
        try {
            const weaponResponse = await fetch('https://valorant-api.com/v1/weapons');
            const weaponResponseJson = await weaponResponse.json();
            if (weaponResponseJson.error) {
                showResponseMessage(weaponResponseJson.data);
            } else {
                renderAllMeapons(weaponResponseJson.data);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    const renderAllAgents = (data) => {
        const agentListElement = document.querySelector('agent-list');
        agentListElement.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4', 'justify-content-center');
        agentListElement.agents = data;
    };

    const renderAllMaps = (data) => {
        const mapListElement = document.querySelector('map-list');
        mapListElement.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-4', 'justify-content-center');
        mapListElement.maps = data;
    };

    const renderAllMeapons = (data) => {
        const weaponListElement = document.querySelector('weapon-list');
        weaponListElement.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-4', 'justify-content-center');
        weaponListElement.weapons = data;
    };

    getAgent();
    getMap();
    getWeapon();
}

export default main;
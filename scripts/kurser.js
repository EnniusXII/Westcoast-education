import { createCard } from './dom.js';
import HttpClient from './http.js';

const galleri = document.querySelector('#kurser-galleri');

async function initPage() {
    const kurser = await loadKurser();

    kurser.forEach((kurs) => {
        galleri.appendChild(createCard(kurs));
    });
}


const loadKurser = async () => {
    const url = 'http://localhost:3000/kurser';
    const http = new HttpClient(url);
    const kurser = await http.get();
    return kurser;
}

document.addEventListener('DOMContentLoaded', initPage);
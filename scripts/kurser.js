import { createCard } from './dom.js';
import HttpClient from './http.js';

const galleri = document.querySelector('#kurser-galleri');

async function initPage() {
    const kurser = await loadKurser();

    kurser.forEach((kurs) => {
        galleri.appendChild(createCard(kurs));
    });

    const kursdetaljer = document.querySelectorAll('.kurser-id');
    addKursClickHandler(kursdetaljer);
};

const addKursClickHandler = (divs) => {
    divs.forEach((div) => {
      const kursId = div.getAttribute('id');
  
      div.addEventListener('click', () => {
        location.href = `/pages/kurs-detaljer.html?id=${kursId}`;
      });
    });
  };


const loadKurser = async () => {
    const url = 'http://localhost:4000/kurser';
    const http = new HttpClient(url);
    const kurser = await http.get();
    return kurser;
}

document.addEventListener('DOMContentLoaded', initPage);

  
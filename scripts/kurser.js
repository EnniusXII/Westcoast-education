import { createCard } from './dom.js';
import HttpClient from '../dist/http.js';

const galleri = document.querySelector('#kurser-galleri');

async function initPage() {
    const kurser = await loadKurser();

    kurser.forEach((kurs) => {
        galleri.appendChild(createCard(kurs));
    });

    const kursdetaljer = document.querySelectorAll('.kurser-id');
    addKursClickHandler(kursdetaljer);

    popularKurs();
    aktuellKurs();
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
    const url = 'http://localhost:3000/kurser';
    const http = new HttpClient(url);
    const kurser = await http.get();
    return kurser;
};

const popularKurs = () => {
  const popular = document.querySelector('#popular-kurs');

  popular.addEventListener('click', popularDisplay);

  console.log(popular);
};

const popularDisplay = async () => {
  const kurser = await loadKurser();
  const divs = document.querySelectorAll('.kurser-id');

  divs.forEach((div) => {
    const kursId = div.getAttribute('id');
    const kurs = kurser.find((kurs) => kurs.id.toString() === kursId);

    if (kurs && kurs.rating >= 4) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
};

const aktuellKurs = () => {
  const aktuella = document.querySelector('#aktuell-kurs');

  aktuella.addEventListener('click', () =>{
    const divs = document.querySelectorAll('.kurser-id');

    divs.forEach((div) => {
      div.style.display = 'inherit';
    });
  });
};

document.addEventListener('DOMContentLoaded', initPage);

  
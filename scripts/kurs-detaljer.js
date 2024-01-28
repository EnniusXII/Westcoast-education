import HttpClient from './http.js';

const kursNamn = document.querySelector('#kurs-namn')
const kursNummer = document.querySelector('#kurs-nummer')
const kursTyp = document.querySelector('#kurs-typ')
const kursLängd = document.querySelector('#kurs-längd')
const kursDatum = document.querySelector('#kurs-datum')
const kursBeskrivning = document.querySelector('#kurs-beskrivning')


function initPage() {
  const kursId = location.search.split('=')[1];
  visaKursDetaljer(kursId);
  bokaKurs();
};

const visaKursDetaljer = async(id) => {
  const url = 'http://localhost:3000/kurser/' + id;
  const http = new HttpClient(url);
  const kurs = await http.get();
  loadDataToList(kurs);
};

const loadDataToList = (kurs) => {
  kursNamn.textContent = kurs.kurs;
  kursNummer.textContent = `Kursnummer: ${kurs.kursnummer}`;
  kursTyp.textContent = `Längd: ${kurs.längd}`;
  kursLängd.textContent = `Typ: ${kurs.typ}`;
  kursDatum.textContent = `Startdatum: ${kurs.datum}`;
  kursBeskrivning.textContent = kurs.beskrivning;
};

const bokaKurs = () => {
  const btn = document.querySelector('#boka-btn');

  btn.addEventListener('click', loginAlert)
};

const loginAlert = () => {
  alert('Du måste logga in! Du länkas vidare om 3 sekunder');

  setTimeout(() => {
    location.href = '/pages/login.html';
  }, 3000);
};

document.addEventListener('DOMContentLoaded', initPage);
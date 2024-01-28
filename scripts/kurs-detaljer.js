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
}

async function visaKursDetaljer(id) {
  const url = 'http://localhost:4000/kurser/' + id;
  const http = new HttpClient(url);
  const kurs = await http.get();
  loadDataToList(kurs);
  console.log(kurs);
}

const loadDataToList = (kurs) => {
  // const entries = new URLSearchParams(kurs).entries();
  kursNamn.textContent = kurs.kurs;
  kursNummer.textContent = `Kursnummer: ${kurs.kursnummer}`;
  kursTyp.textContent = `Längd: ${kurs.längd}`;
  kursLängd.textContent = `Typ: ${kurs.typ}`;
  kursDatum.textContent = `Startdatum: ${kurs.datum}`;
  kursBeskrivning.textContent = kurs.description;
  // console.log(entries);
};

document.addEventListener('DOMContentLoaded', initPage);
import HttpClient from './http.js';

function initPage() {
  const kursId = location.search.split('=')[1];
  visaKursDetaljer(kursId);
}

async function visaKursDetaljer(id) {
  const url = 'http://localhost:3000/kurser/' + id;
  const http = new HttpClient(url);
  const kurs = await http.get();
  console.log(kurs);
}

document.addEventListener('DOMContentLoaded', initPage);
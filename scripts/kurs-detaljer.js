import HttpClient from '../dist/http.js';

const kursNamn = document.querySelector('#kurs-namn')
const kursNummer = document.querySelector('#kurs-nummer')
const kursTyp = document.querySelector('#kurs-typ')
const kursLängd = document.querySelector('#kurs-längd')
const kursDatum = document.querySelector('#kurs-datum')
const kursBeskrivning = document.querySelector('#kurs-beskrivning')
const kursSection = document.querySelector('#kurs-image')

const bokaKursButton = document.querySelector('#boka-btn')
const bokningsEmail = document.querySelector('#boknings-email')


function initPage() {
  const kursId = location.search.split('=')[1];
  visaKursDetaljer(kursId);
  bokningsEmail.value = "";
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
  kursSection.style.backgroundImage = `url('../content/images/${kurs.imageUrl}')`;
};

const bokaKurs = async() => {
  const users = await getAllUsers();
  const email = bokningsEmail.value;

  const emailFound = users.find((user) => user.epostadress.trim().toLowerCase() === email);
  console.log(emailFound);

  if (emailFound) {
    alert("Tack för din bokning!")
  } else {
    alert('Du måste registrera dig! Du länkas vidare om 3 sekunder');

    setTimeout(() => {
    location.href = '/pages/login.html';
    }, 3000);
  }  
};

const getAllUsers = async() => {

  try {
      const response = await fetch("http://localhost:3000/users");

      if(response.ok){
          return await response.json();
          
      }else{
          console.log("Error: users not found");
      }
  } catch (error) {
      console.log(error);
  }
};


document.addEventListener('DOMContentLoaded', initPage);
bokaKursButton.addEventListener('click', bokaKurs);
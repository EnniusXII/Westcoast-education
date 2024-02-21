import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';
const addKursForm = document.querySelector('#add-kurs');
const addKurs = async (e) => {
    e.preventDefault();
    const kurs = new FormData(addKursForm);
    const obj = convertFormDataToJson(kurs);
    delete obj.id;
    sparaKurs(obj);
};
const sparaKurs = async (kurs) => {
    const url = 'http://localhost:3000/kurser';
    const http = new HttpClient(url);
    await http.add(kurs);
    location.href = './add-kurs.html';
};
addKursForm.addEventListener('submit', addKurs);

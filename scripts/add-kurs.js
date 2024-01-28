import HttpClient from "./http.js";
import { convertFormDataToJson } from "./utilities.js";

const form = document.querySelector('#add-kurs');

const addKurs = async(e) => {
    e.preventDefault();

    const kurs = new FormData(form);
    const obj = convertFormDataToJson(kurs);
    sparaKurs(obj);
};

const sparaKurs = async(kurs) => {
    const url = 'http://localhost:4000/kurser';
    const http = new HttpClient(url);
    await http.add(kurs);
    location.href = './add-kurs.html';
};

form.addEventListener('submit', addKurs);
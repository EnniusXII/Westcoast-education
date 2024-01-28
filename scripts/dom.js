const createCard = (kurser) => {
    const div = document.createElement('div');
    div.setAttribute('id', kurser.id)
    div.appendChild(createKursInfo(kurser));
    div.appendChild(createKursNamn(kurser));
    div.classList.add('kurser-id');
  
    return div;
  };

const createKursInfo = (kurser) => {
  const paragraph = document.createElement('p');
  paragraph.appendChild(
    document.createTextNode(`${kurser.typ} - ${kurser.längd}`)
  );

  return paragraph;
};

const createKursNamn = (kurser) => {
  const header = document.createElement('h2');
  header.appendChild(
    document.createTextNode(`${kurser.kurs}`)
  );

  return header;
};

export {createCard};
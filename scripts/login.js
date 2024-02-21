const registerNewUserForm = document.querySelector("#register-user");
const addName = document.querySelector("#namn");
const addEmail = document.querySelector("#email");
const addMobilNummer = document.querySelector("#mobilnummer");
const addFaktureringsadress = document.querySelector("#faktureringsadress");


const registerNewUser = async(user) => {
    const url = "http://localhost:3000/users";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });
    
        if(response.ok){
            return await response.json();
            
        }else{
            console.log("Error: users not found");
        }
    } catch (error) {
        console.log(error);
    }
};


const registerNewUserHandler = async(e) => {
    e.preventDefault();

    const user = {
        kundnamn: addName.value,
        epostadress: addEmail.value,
        mobilnummer: addMobilNummer.value,
        faktureringsadress: addFaktureringsadress.value
    };

    const registeredNewUser = await registerNewUser(user);
}

registerNewUserForm.addEventListener('submit', registerNewUserHandler);
import { UserTemplate } from "./models/Users";

const registerNewUserForm = document.querySelector<HTMLFormElement>("#register-user");
const addName = document.querySelector<HTMLInputElement>("#namn")!;
const addEmail = document.querySelector<HTMLInputElement>("#email")!;
const addMobilNummer = document.querySelector<HTMLInputElement>("#mobilnummer")!;
const addFaktureringsadress = document.querySelector<HTMLInputElement>("#faktureringsadress")!;


const registerNewUser = async(user: UserTemplate): Promise<any> => {
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


const registerNewUserHandler = async(e: Event) => {
    e.preventDefault();

    const user: UserTemplate = {
        kundnamn: addName.value,
        epostadress: addEmail.value,
        mobilnummer: addMobilNummer.value,
        faktureringsadress: addFaktureringsadress.value
    };

    await registerNewUser(user);
}

registerNewUserForm?.addEventListener('submit', registerNewUserHandler);
const nameField = document.getElementById('name');
const ageField = document.getElementById('age');
const emailField = document.getElementById('email');
const telephoneField = document.getElementById('telephone');
const NeedField = document.getElementById('need');
let sumbitBtn = document.getElementById('btn')
let guardarNombre
let guardaredad
let guardarEmail
let guardarTelefono
let guardarNecesidad

const validacion = (e) => {
   
    if (nameField.value === ""  || nameField.value === "^[A-Za-z]\\w{5,29}$" || 
    ageField.value === "" || ageField.value > 100 ||
    emailField.value === "" || emailField.value === "\w+([\.-]?\w+)*" ||
    telephoneField.value === "" || telephoneField.value.length > 100 || 
    NeedField.value ===""
    ) {
        alert("Por favor, verifique los datos ingresados.");
        nameField.focus();
      } else{
          guardarNombre = nameField.value
          guardaredad = ageField.value
            guardarEmail =emailField.value
            guardarTelefono= telephoneField.value
            guardarNecesidad= NeedField.value
        }

      e.preventDefault();
}





sumbitBtn.addEventListener('click', validacion)







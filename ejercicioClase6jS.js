const nameUser = document.getElementById("nameUser");
const lastNameUser = document.getElementById("lastNameUser");
const emailUser = document.getElementById("emailUser");
const passwordUser = document.getElementById("passUser");
const rePasswordUser = document.getElementById("rePassUser");
const birthdayDateUser = document.getElementById("birthdayUser");
const newsletterUserOption = document.getElementById("newsletterUser");
const registerButton = document.getElementById("buttonRegister");
registerButton.disabled = true;
const registerForm = document.getElementById("registerForm");
const formInputs = document.querySelectorAll("input");

const inputFields = {
  nameUser: false,
  lastNameUser: false,
  emailUser: false,
  passwordUser: false,
  rePasswordUser: false,
  birthdayUser: false,
  currentAge: 0,
  newsletterUser:false
};

const validationRules = {
  nameUser: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
  lastNameUser: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  passwordUser: /^.{8,16}$/, //8 a 16 digitos
  emailUser: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const rePasswordUserValidation = (passwordUser, rePasswordUser) => {
  if (passwordUser.value === rePasswordUser.value) {
    return true;
  }
  return false;
};

const birthdayUserValidation = (input) => {
  const birthDayToString = String(input.value);
  const today = new Date();
  const todayYear = parseInt(today.getFullYear());
  const todayMonth = parseInt(today.getMonth()) + 1;
  const todayDay = parseInt(today.getDate());

  const birthdayDateYear = parseInt(birthDayToString.substring(0, 4));
  const birthdayDateMonth = parseInt(birthDayToString.substring(6, 7));
  const birthdayDateDay = parseInt(birthDayToString.substring(8, 10));

  const ageUser = todayYear - birthdayDateYear;

  if (todayMonth < birthdayDateMonth) {
    ageUser--;
  }
  if (todayMonth === birthdayDateMonth) {
    if (todayDay < birthdayDateDay) {
      ageUser--;
    }
  }

  if (ageUser >= 18) {
    return ageUser;
  }
  if (ageUser < 18) {
    return false;
  }
};
const inputValidation = (validationRules, input) => {
  if (input.name === "birthdayUser") {
    const ageUser = birthdayUserValidation(input);
    inputFields[input.name] = true;
    inputFields.currentAge = ageUser;

    return ageUser;
  }
  if (input.name === "rePasswordUser" && passwordUser.value === input.value) {
    inputFields[input.name] = true;
    return true;
  }

  if (!(input.name === "birthdayUser") && !(input.name === "rePasswordUser")) {
    const validation = validationRules[input.name].test(input.value);

    return validation;
  }
};

const validationSystem = (input, validationRules) => {
  inputValidation(validationRules, input);
  if (inputValidation(validationRules, input)) {
    document
      .getElementById(`${input.name}Fine`)
      .classList.remove("itsFineInput");
    document
      .getElementById(`${input.name}Fine`)
      .classList.add("itsFineInputActive");
    document.getElementById(`${input.name}Error`).classList.add("errorInput");
    document
      .getElementById(`${input.name}Error`)
      .classList.remove("errorInputActive");
    inputFields[input.name] = true;
    console.log(inputFields[input.name]);
  }
  if (!inputValidation(validationRules, input)) {
    document
      .getElementById(`${input.name}Fine`)
      .classList.remove("itsFineInputActive");
    document.getElementById(`${input.name}Fine`).classList.add("itsFineInput");
    document
      .getElementById(`${input.name}Error`)
      .classList.remove("errorInput");
    document
      .getElementById(`${input.name}Error`)
      .classList.add("errorInputActive");

    if (input.value == "") {
      document.getElementById(`${input.name}Error`).classList.add("errorInput");
      document
        .getElementById(`${input.name}Error`)
        .classList.remove("errorInputctive");
      document
        .getElementById(`${input.name}Fine`)
        .classList.remove("itsFineInputActive");
      document
        .getElementById(`${input.name}Fine`)
        .classList.add("itsFineInput");
    }
  }
};

formInputs.forEach((input) =>{
  if(input.name==='newsletterUser'){
    input.addEventListener('click',(e)=>{
      if(input.checked){
        inputFields.newsletterUser=true
        console.log(input.name);
      }
    });
  }


  input.addEventListener("keyup", (e) => {
    validationSystem(input, validationRules);
  })

}

  
);

const users = [];
const registerUser = (
  nameUser,
  lastNameUser,
  emailUser,
  passwordUser,
  
) => {
  const newUser = {
    Name: nameUser.value,
    lastName: lastNameUser.value,
    email: emailUser.value,
    password: passwordUser.value,
    age: inputFields.currentAge,
    
  };

  return newUser;
};

registerForm.addEventListener("change", (e) => {
  e.preventDefault();

  if (
    inputFields.nameUser &&
    inputFields.lastNameUser &&
    inputFields.emailUser &&
    inputFields.passwordUser &&
    inputFields.rePasswordUser &&
    inputFields.birthdayUser
  ) {
    registerButton.disabled = false;
  }
});

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  users.push(registerUser(nameUser, lastNameUser, emailUser, passwordUser));

  formInputs.forEach(input=>input.value='')
});

console.log(users);

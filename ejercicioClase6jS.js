const nameUser=document.getElementById('nameUser');

const lastNameUser=document.getElementById('lastNameUser');

const emailUser=document.getElementById('emailUser');

const passwordUser=document.getElementById('passUser');

const repeatPasswordUser=document.getElementById('rePassUser');

const birthdayDateUser=document.getElementById('birthdayUser');

const newsletterUserOption=document.getElementById('newsletterUser');

const registerButton=document.getElementById('buttonRegister');

const registerForm=document.getElementById('registerForm');


const validationRules = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
    password: /^.{8,16}$/, //8 a 16 digitos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    
  };


const nameValidation=(validationRules,nameUser)=>{
    const validation= (validationRules.name).test(nameUser.value)

    return validation
}

  nameUser.addEventListener('keyup',(e)=>{
    nameValidation(validationRules,nameUser)
    if(nameValidation(validationRules,nameUser)){
        document.getElementById('nameFine').classList.remove('itsFineName')
        document.getElementById('nameFine').classList.add('itsFineNameActive')
        document.getElementById('nameError').classList.add('errorName')
        document.getElementById('nameError').classList.remove('errorNameActive')
    }
    if(!nameValidation(validationRules,nameUser) | nameUser.value=='' ){
        document.getElementById('nameFine').classList.remove('itsFineNameActive')
        document.getElementById('nameFine').classList.add('itsFineName')
        document.getElementById('nameError').classList.remove('errorName')
        document.getElementById('nameError').classList.add('errorNameActive')
    }
  })
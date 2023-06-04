const nameUser=document.getElementById('nameUser');

const lastNameUser=document.getElementById('lastNameUser');

const emailUser=document.getElementById('emailUser');

const passwordUser=document.getElementById('passUser');

const repeatPasswordUser=document.getElementById('rePassUser');

const birthdayDateUser=document.getElementById('birthdayUser');

const newsletterUserOption=document.getElementById('newsletterUser');


const registerButton=document.getElementById('buttonRegister');
registerButton.disabled=true;

const registerForm=document.getElementById('registerForm');

const inputFields={
  name:false,
  lastName:false,
  email:false,
  password:false,
  confirmPassword:false,
  ageUser:false,

}

const validationRules = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //letras y espacios, pueden llevar acentos.
    password: /^.{8,16}$/, //8 a 16 digitos
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    age:18
  };


const nameValidation=(validationRules,nameUser)=>{
    const validation= (validationRules.name).test(nameUser.value)

    return validation
}
const lastNameValidation=(validationRules,lastNameUser)=>{
  const validation=(validationRules.name).test(lastNameUser.value)

  return validation
}

const emailUserValidation=(validationRules,emailUser)=>{
  const validation=(validationRules.email).test(emailUser.value)

  return validation
}

const passwordUserValidation=(validationRules,passwordUser)=>{
  const validation=(validationRules.password).test(passwordUser.value)

  return validation
}

const repeatPasswordUserValidation=(passwordUser,repeatPasswordUser)=>{
  if(passwordUser.value === repeatPasswordUser.value){
    return true
  }
  return false
}

const birthdayDateUserValidation=(birthdayDateUser)=>{
  const birthDayToString=String(birthdayDateUser.value)
  const today= new Date()
  const todayYear=parseInt(today.getFullYear());
  const todayMonth=parseInt(today.getMonth())+1;
  const todayDay=parseInt(today.getDate());

  const birthdayDateYear= parseInt(birthDayToString.substring(0,4));
  const birthdayDateMonth= parseInt(birthDayToString.substring(6,7));
  const birthdayDateDay= parseInt(birthDayToString.substring(8,10));
  

 

 const ageUser= todayYear - birthdayDateYear;

  if(todayMonth<birthdayDateMonth){
    ageUser--;
  }
  if(todayMonth===birthdayDateMonth){
    if(todayDay<birthdayDateDay){
      ageUser--;
    }
  }

  return ageUser
}

  nameUser.addEventListener('keyup',(e)=>{
    nameValidation(validationRules,nameUser)
    if(nameValidation(validationRules,nameUser)){
        document.getElementById('nameFine').classList.remove('itsFineName')
        document.getElementById('nameFine').classList.add('itsFineNameActive')
        document.getElementById('nameError').classList.add('errorName')
        document.getElementById('nameError').classList.remove('errorNameActive')
        inputFields.name=true
    }
    if(!nameValidation(validationRules,nameUser) | nameUser.value=='' ){
        document.getElementById('nameFine').classList.remove('itsFineNameActive')
        document.getElementById('nameFine').classList.add('itsFineName')
        document.getElementById('nameError').classList.remove('errorName')
        document.getElementById('nameError').classList.add('errorNameActive')
        inputFields.name=false;
    }
    if(nameUser.value==''){
      document.getElementById('nameError').classList.add('errorName')
      document.getElementById('nameError').classList.remove('errorNameActive')
      document.getElementById('nameFine').classList.remove('itsFineNameActive')
      document.getElementById('nameFine').classList.add('itsFineName')
      inputFields.name=false;
    }
  })


  lastNameUser.addEventListener('keyup',(e)=>{
    lastNameValidation(validationRules,lastNameUser)
    if(lastNameValidation(validationRules,lastNameUser)){
        document.getElementById('lastNameFine').classList.remove('itsFineLastName')
        document.getElementById('lastNameFine').classList.add('itsFineLastNameActive')
        document.getElementById('lastNameError').classList.add('errorLastName')
        document.getElementById('lastNameError').classList.remove('errorLastNameActive')
        inputFields.lastName=true
    }
    if(!lastNameValidation(validationRules,lastNameUser) | lastNameUser.value=='' ){
        document.getElementById('lastNameFine').classList.remove('itsFineLastNameActive')
        document.getElementById('lastNameFine').classList.add('itsFineLastName')
        document.getElementById('lastNameError').classList.remove('errorLastName')
        document.getElementById('lastNameError').classList.add('errorLastNameActive')
        inputFields.lastName=false
    }
    if(lastNameUser.value==''){
      document.getElementById('lastNameError').classList.add('errorLastName')
      document.getElementById('lastNameError').classList.remove('errorLastNameActive')
      document.getElementById('lastNameFine').classList.remove('itsFineLastNameActive')
      document.getElementById('lastNameFine').classList.add('itsFineLastName')
      inputFields.lastName=false
    }
  })


  emailUser.addEventListener('keyup',(e)=>{
    emailUserValidation(validationRules,emailUser)
    if(emailUserValidation(validationRules,emailUser)){
        document.getElementById('emailFine').classList.remove('itsFineEmail')
        document.getElementById('emailFine').classList.add('itsFineEmailActive')
        document.getElementById('emailError').classList.add('errorEmail')
        document.getElementById('emailError').classList.remove('errorEmailActive')
        inputFields.email=true
    }
    if(!emailUserValidation(validationRules,emailUser) | emailUser.value=='' ){
        document.getElementById('emailFine').classList.remove('itsFineEmailActive')
        document.getElementById('emailFine').classList.add('itsFineEmail')
        document.getElementById('emailError').classList.remove('errorEmail')
        document.getElementById('emailError').classList.add('errorEmailActive')
        inputFields.email=false
    }
    if(emailUser.value==''){
      document.getElementById('emailError').classList.add('errorEmail')
      document.getElementById('emailError').classList.remove('errorEmailActive')
      document.getElementById('emailFine').classList.remove('itsFineEmailActive')
      document.getElementById('emailFine').classList.add('itsFineEmail')
      inputFields.email=false
    }
  })


  passwordUser.addEventListener('keyup',(e)=>{
    passwordUserValidation(validationRules,passwordUser)
    if(passwordUserValidation(validationRules,passwordUser)){
        document.getElementById('passFine').classList.remove('itsFinePass')
        document.getElementById('passFine').classList.add('itsFinePassActive')
        document.getElementById('passwordError').classList.add('errorPassword')
        document.getElementById('passwordError').classList.remove('errorPasswordActive')
        inputFields.password=true
    }
    if(!passwordUserValidation(validationRules,passwordUser) | passwordUser.value=='' ){
        document.getElementById('passFine').classList.remove('itsFinePassActive')
        document.getElementById('passFine').classList.add('itsFinePass')
        document.getElementById('passwordError').classList.remove('errorPassword')
        document.getElementById('passwordError').classList.add('errorPasswordActive')
        inputFields.password=false
    }
    if(passwordUser.value==''){
      document.getElementById('passwordError').classList.add('errorPassword')
      document.getElementById('passwordError').classList.remove('errorPasswordActive')
      document.getElementById('passFine').classList.remove('itsFinePassActive')
      document.getElementById('passFine').classList.add('itsFinePass')
      inputFields.password=false
    }
  })

  repeatPasswordUser.addEventListener('keyup',(e)=>{
    repeatPasswordUserValidation(passwordUser,repeatPasswordUser)
    if(repeatPasswordUserValidation(passwordUser,repeatPasswordUser)){
        document.getElementById('rePassFine').classList.remove('itsFineRePass')
        document.getElementById('rePassFine').classList.add('itsFineRePassActive')
        document.getElementById('rePasswordError').classList.add('errorRePassword')
        document.getElementById('rePasswordError').classList.remove('errorRePasswordActive')
        inputFields.confirmPassword=true
    }
    if(!repeatPasswordUserValidation(passwordUser,repeatPasswordUser) | repeatPasswordUser.value=='' ){
        document.getElementById('rePassFine').classList.remove('itsFineRePassActive')
        document.getElementById('rePassFine').classList.add('itsFineRePass')
        document.getElementById('rePasswordError').classList.remove('errorRePassword')
        document.getElementById('rePasswordError').classList.add('errorRePasswordActive')
        inputFields.confirmPassword=false
    }
    if(repeatPasswordUser.value==''){
      document.getElementById('rePasswordError').classList.add('errorRePassword')
      document.getElementById('rePasswordError').classList.remove('errorRePasswordActive')
      document.getElementById('rePassFine').classList.remove('itsFineRePassActive')
      document.getElementById('rePassFine').classList.add('itsFineRePass')
      inputFields.confirmPassword=false
    }
  })

  birthdayDateUser.addEventListener('change',(e)=>
  { 
    birthdayDateUserValidation(birthdayDateUser)
    if(birthdayDateUserValidation(birthdayDateUser)>=validationRules.age){
        document.getElementById('birthdayFine').classList.remove('itsFineBirdthday')
        document.getElementById('birthdayFine').classList.add('itsFineBirdthdayActive')
        document.getElementById('birthdayError').classList.add('errorBirthday')
        document.getElementById('birthdayError').classList.remove('errorBirthdayActive')
        inputFields.ageUser=true
    }
    if(birthdayDateUserValidation(birthdayDateUser)<validationRules.age | birthdayDateUser.value=='' ){
        document.getElementById('birthdayFine').classList.remove('itsFineBirdthdayActive')
        document.getElementById('birthdayFine').classList.add('itsFineBirdthday')
        document.getElementById('birthdayError').classList.remove('errorBirthday')
        document.getElementById('birthdayError').classList.add('errorBirthdayActive')
        inputFields.ageUser=false
    }
    if(birthdayDateUser.value==''){
      document.getElementById('birthdayError').classList.add('errorBirthday')
      document.getElementById('birthdayError').classList.remove('errorBirthdayActive')
      document.getElementById('birthdayFine').classList.remove('itsFineBirdthdayActive')
      document.getElementById('birthdayFine').classList.add('itsFineBirdthday')
      inputFields.ageUser=false
    }
  })



  
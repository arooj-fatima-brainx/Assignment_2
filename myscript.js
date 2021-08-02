var passFlag = false;
var passSameFlag = false;
var firstNameFlag = false;
var lastNameFlag = false;
var ageFlag = false;
var emailsFlag = false;
var contactFlag = false;

function doFirstNameChecking()
{
  var fName = document.getElementById("fName").value;
  
  let fNameLength = fName.length;
  
  if(fNameLength>0)
  {
    firstNameFlag = true;
    document.getElementById("invalid-feedback-fName").style.display="none";
  }
  else{
    firstNameFlag = false;
    document.getElementById("invalid-feedback-fName").style.display="block";
  }

  
  if(checkAllConditions())
  {
   
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }
  
}

function doLastNameChecking()
{
  var lName = document.getElementById("lName").value;
  
  let lNameLength = lName.length;
  
  if(lNameLength>0)
  {
    lastNameFlag = true;
    document.getElementById("invalid-feedback-lName").style.display="none";
  }
  else
  {
    lastNameFlag = false;
    document.getElementById("invalid-feedback-lName").style.display="block";
  }

  
  if(checkAllConditions())
  {
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }
  
}

function doAgeChecking()
{
  var age = document.getElementById("age").value;
  let ageLength = age.length;
  if(age>17 && age <151)
  {
    ageFlag = true;
    document.getElementById("invalid-feedback-age").style.display="none";
  }
  else
  {
    ageFlag = false;
    document.getElementById("invalid-feedback-age").style.display="block";
  }
  
  if(checkAllConditions())
  {
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }
}

function checkPassword()
{
  var pass = document.getElementById("pwd").value.toString();
  var lowerAlphaFlag = false;
  var upperAlphaFlag = false;
  var digitFlag = false; 
  var minLengthFlag = false;
  
  var length = pass.length;
    if(length>=8)    
    {
      minLengthFlag = true;
    }
    else
    {
      minLengthFlag = false;
    }

   
  for(var i=0; i<length; i++)
  { 
    if(isLowerAlpha(pass[i]))
    {
      lowerAlphaFlag = true;
     
    }
    else if(isUpperAlpha(pass[i]))
    {
      upperAlphaFlag = true;
      
    }
    else if(isdigit(pass[i]))
    {
      digitFlag = true;
     
      
    }
   
  }

  
  if(minLengthFlag && lowerAlphaFlag && digitFlag  && upperAlphaFlag)
  {
    
    passFlag = true;
    document.getElementById("invalid-feedback-pass").style.display="none";
  }
  else
  {
    passFlag = false;
    document.getElementById("invalid-feedback-pass").style.display="block";
  }

  
  let passConf = document.getElementById("confpwd").value;

  if(passConf!="")
  {
    if(pass==passConf)
  {
    passSameFlag = true;
    document.getElementById("invalid-feedback-check-pass").style.display="none";
  }
  else
  {
    passSameFlag = false;
    document.getElementById("invalid-feedback-check-pass").style.display="block";
  }
  }
  


  if(checkAllConditions())
  {
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }
}

function checkConfirmPassword()
{
  let mypass = document.getElementById("pwd").value;
  let passConf = document.getElementById("confpwd").value;

  if(mypass==passConf)
  {
    passSameFlag = true;
    document.getElementById("invalid-feedback-check-pass").style.display="none";
  }
  else
  {
    passSameFlag = false;
    document.getElementById("invalid-feedback-check-pass").style.display="block";
  }

  if(checkAllConditions())
  {
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }

}

function checkEmailValidity()
{
  let emails=document.getElementById("emails").value;
  var emailsArr = emails.split(',');
  
  let mailLength = emailsArr.length;
  for(let i=0; i<mailLength; i++)
  {
    if(validateEmail(emailsArr[i]))
    {
      emailsFlag = true;
      document.getElementById("invalid-feedback-emails").style.display="none";
    }
    else
    {
      emailsFlag = false;
      document.getElementById("invalid-feedback-emails").style.display="block";
    }
  }
  
  if(checkAllConditions())
  {
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }
}

function checkContactVlidity()
{
  let contactLength=document.getElementById("contact").value.length;
  if(contactLength==11)
  {
    contactFlag = true;
    document.getElementById("invalid-feedback-contact").style.display="none";
  }
  else
  {
    contactFlag = false;
    document.getElementById("invalid-feedback-contact").style.display="block";
  }

  if(checkAllConditions())
  {
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }
}

function validateEmail(email) {
  
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);

  debugger
}





function isLowerAlpha(c) {
  
  return (((c >= 'a') && (c <= 'z')));
}



function isUpperAlpha(c)
{
  return ((c >= 'A') && (c <= 'Z'));
}

function isdigit(c) {
  return ((c >= '0') && (c <= '9'));
}




function checkAllConditions()
{
  firstNameFlag;
  lastNameFlag;
  passFlag;
  passSameFlag;
  ageFlag;
  emailsFlag;
  contactFlag;
  
  if(firstNameFlag && lastNameFlag && passFlag && passSameFlag && ageFlag && emailsFlag && contactFlag)
  {
    return true;
  }
  else
  {
    return false;
  }
  
}

function enableSubmitButton()
{
  document.getElementById("submitBtn").disabled=false;
}

function disableSubmitButton()
{
  document.getElementById("submitBtn").disabled=true;
}

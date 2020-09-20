async function sendData(e){
    event.preventDefault();
    try{
    var emailInput=document.getElementById('emailinput');
    console.log(emailInput.value);
    let data={
       email:emailInput.value
    }
var fetcher=await fetch('https://passresetemail.herokuapp.com/enterEmail',{
       method:'PUT',
       mode:'cors',
       headers:{
           'Content-type':'application/json'
       },
       body:JSON.stringify(data)
   });
var fetcherData=await fetcher.json();
localStorage.setItem('randomString',fetcherData);
alert("Password Reset Link Sent to Mail");
}
catch(error){
    alert("ERROR");
    console.log(error);
}
}
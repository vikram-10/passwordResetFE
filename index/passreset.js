async function sendData(e){
    event.preventDefault();
    try{
    var emailInput=document.getElementById('emailinput');
    console.log(emailInput.value);
    let data={
       email:emailInput.value
    }
var fetcher=await fetch('http://localhost:3000/enterEmail',{
       method:'PUT',
       mode:'cors',
       headers:{
           'Content-type':'application/json'
       },
       body:JSON.stringify(data)
   });
var fetcherData=await fetcher.json();
localStorage.setItem('randomString',fetcherData);
}
catch(error){
    alert("ERROR");
    console.log(error);
}
}
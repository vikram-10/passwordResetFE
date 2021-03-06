async function updatePassword(){
    event.preventDefault();
    let password=document.getElementById('passIp');
    let data={
        pass:password.value
    }
    let randomString=localStorage.getItem('randomString');
    let fetcher=await fetch(`https://passresetemail.herokuapp.com/${randomString}/passReset`,{
        method:'PUT',
        body:JSON.stringify(data),
        headers:{
            'Content-type':'application/json'
        },
        mode:'cors'
    });
    let fetchedData=await fetcher.json();
    console.log(fetchedData);
    alert("Password Updated!");
}
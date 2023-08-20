async function logout(){
    let response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}
    });

    if(response.ok){
        document.location.replace('/');
    }
    else{
        alert(response.statusText);
    }
}
async function register(){
    let name = document.getElementById('regName').value.trim();
    let email = document.getElementById('regEmail').value.trim();
    let password = document.getElementById('regPassword').value.trim();

    if(name && password){
        let response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/');
        }
        else{
            alert('Failed to register.');
        }
    }
}
async function login(){

    let name = document.getElementsByTagName('input')[0].value.trim();
    let password = document.getElementsByTagName('input')[1].value.trim();


    if(name && password){
        let response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({name, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/');
        }
        else{
            alert('Failed to log in.');
        }
    }
}

async function register(){
    let name = document.getElementById('name').value.trim();
    let password = document.getElementById('password').value.trim();

    if(name && password){
        let response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({name, password}),
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
async function login(){
    //event.preventDefault();

    let user = document.getElementById('user');
    let password = document.getElementById('password');

    if(user && password){
        let response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({user, password}),
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

async function register(event){
    event.preventDefault();

    let name = document.forms['userLogin'].elements['name'].value.trim();
    let password = document.forms['userLogin'].elements['password'].value.trim();

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

document.getElementById('registerButton').addEventListener('click', register);
/**
 * @function login
 * @param userName
 * @param password
 * 
 * Logs a user into the site
 */
async function login(){

    let name = document.getElementById('name').value.trim();
    let password = document.getElementById('password').value.trim();

    if(name && password){
        let response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            displayStatus('Logged in.');
            document.location.replace('/');
        }
        else{
            displayStatus('Failed to log in.');
        }
    }
}

//Functions to display status - currently unfunctional
function displayStatus(status){
    let statusEl = document.getElementById('logStatus');
    statusEl.innerHTML = status;
    setTimeout(resetStatus(), 10000);
}
function resetStatus(){
    let statusEl = document.getElementById('logStatus');
    statusEl.innerHTML = '';
}
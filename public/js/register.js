/**
 * @function register
 * @param userName
 * @param email
 * @param password
 * 
 * Creates a new user.
 */
async function register(){
    let userName = document.getElementById('regName').value.trim();
    let email = document.getElementById('regEmail').value.trim();
    let password = document.getElementById('regPassword').value.trim();

    if(name && password){
        let response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({userName, email, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            displayStatus('Registered an account.')
            document.location.replace('/');
        }
        else{
            displayStatus('Failed to register.');
        }
    }
}

//Functions to display status - currently unfunctional
function displayStatus(status){
    let statusEl = document.getElementById('regStatus');
    statusEl.innerHTML = status;
    setTimeout(resetStatus(), 10000);
}
function resetStatus(){
    let statusEl = document.getElementById('regStatus');
    statusEl.innerHTML = '';
}
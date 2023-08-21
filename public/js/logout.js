/**
 * @function logout
 * 
 * Logs out a user
 */
async function logout(){
    let response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}
    });

    if(response.ok){
        displayStatus('Logged out.')
        document.location.replace('/');
    }
    else{
        displayStatus(response.statusText);
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
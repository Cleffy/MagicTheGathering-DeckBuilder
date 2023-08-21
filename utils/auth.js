//Restrict access to logged in users, redirect others to home
const withAuth = (request, response, next) => {
    if(!request.session.loggedIn){
        response.redirect('/');
    }
    else{
        next();
    }
};

//Restrict access to admin account, redirect others to home
const withAdmin = (request, response, next) => {
    if(request.session.loggedIn){
        if(request.session.user.name = 'admin'){
            next();
        }
        else{
            response.redirect('/');
        }
    }
    else{
        response.redirect('/');
    }
};

module.exports = { withAuth, withAdmin};
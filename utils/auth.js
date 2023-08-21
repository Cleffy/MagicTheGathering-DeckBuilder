//Restrict access to admin account, redirect others to home
const withAuth = (request, response, next) => {
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

module.exports = withAuth;
const router = require('express').Router();
const { User } = require('../../models');

//Create new user
router.post('/', async (request, result) => {
    try{
        const userData = await User.create(request.body);

        request.session.save(() => {
            request.session.userID = userData.id;
            request.session.loggedIn = true;

            result.status(200).json(userData);
        });
    }
    catch(error){
        result.status(400).json(error);
    }
});

//User login
router.post('/login', async (request, result) => {
    try{
        const userData = await User.findOne({ where: { user: request.body.user }});
        if(!userData){
            result.status(400).json({message: 'This user is not registered. Please register or try again.'});
            return;
        }

        const validPassword = await userData.checkPassword(request.body.password);
        if(!validPassword){
            result.status(400).json({message: 'Incorrect password. Please try again.'});
            return;
        }

        request.session.save(() => {
            request.session.userID = userData.id;
            request.session.loggedIn = true;

            result.status(200).json({user: userData, message: 'You are now logged in.'});
        });
    }
    catch(error){
        result.status(400).json(error)
    }
});

//User logout
router.post('.logout', (request, result) => {
    if(request.session.loggedIn){
        request.session.destroy(() => {
            result.status(204).end();
        });
    }
    else{
        result.status(404).end();
    }
});

module.exports = router;
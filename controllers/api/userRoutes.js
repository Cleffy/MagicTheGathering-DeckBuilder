const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (request, response) => {
    try {
        const userData = await User.findAll();
        response.status(200).json(userData);
    } catch (error) {
        response.status(500).json(error);
    }
});
// GET one user
router.get('/:id', async (request, response) => {
    try {
        const userData = await User.findByPk(request.params.id);
        if (!userData) {
          response.status(404).json({ message: 'No user with this id!' });
          return;
        }
        response.status(200).json(userData);
    } catch (error) {
        response.status(500).json(error);
    }
});


// UPDATE a user
router.put('/:id', async (request, response) => {
    try {
        const userData = await User.update(request.body, {
          where: {
            id: request.params.id,
          },
        });
        if (!userData[0]) {
          response.status(404).json({ message: 'No user with this id!' });
          return;
        }
        response.status(200).json(userData);
    } catch (error) {
        response.status(500).json(error);
    }
});
  
// DELETE a user
router.delete('/:id', async (request, response) => {
    try {
        const userData = await User.destroy({
          where: {
            id: request.params.id,
          },
        });
        if (!userData) {
          response.status(404).json({ message: 'No user with this id!' });
          return;
        }
        response.status(200).json(userData);
    } catch (error) {
        response.status(500).json(error);
    }
});

//Create new user
router.post('/', async (request, response) => {
    try{
        const userData = await User.create(request.body);

        request.session.save(() => {
            request.session.user = userData;
            request.session.loggedIn = true;

            response.status(200).json(userData);
        });
    }
    catch(error){
        response.status(400).json(error);
    }
});

//User login
router.post('/login', async (request, response) => {
    try{
        const userData = await User.findOne({ where: { name: request.body.name }});
        if(!userData){
            response.status(400).json({message: 'This user is not registered. Please register or try again.'});
            return;
        }

        const validPassword = await userData.checkPassword(request.body.password);
        if(!validPassword){
            response.status(400).json({message: 'Incorrect password. Please try again.'});
            return;
        }

        request.session.save(() => {
            request.session.user = userData;
            request.session.loggedIn = true;
            response.status(200).json({user: userData, message: 'You are now logged in.'});
        });
    }
    catch(error){
        response.status(400).json(error)
    }
});

//User logout
router.post('/logout', (request, response) => {
    if(request.session.loggedIn){
        request.session.destroy(() => {
            response.status(204).end();
        });
    }
    else{
        response.status(404).end();
    }
});

module.exports = router;
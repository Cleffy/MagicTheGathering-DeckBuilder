const router = require('express').Router();
const { User } = require('../../models/user');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Create new user
router.post('/', async (request, result) => {
    try{
        const otherUser = await User.findOne({ where: { name: request.body.name }});
        if(otherUser){
            result.status(400).json({message: 'This user already exists. Login or try another name'});
            return;
        }
        const userData = await User.create(request.body);

        request.session.save(() => {
            request.session.user_id = userData.id;
            request.session.logged_in = true;

            result.status(200).json(userData);
        });
    }
    catch(error){
        result.status(400).json(error);
    }
});

  // GET one user
  router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // UPDATE a user
  router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE a user
  router.delete('/:id', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//User login
router.post('/login', async (request, result) => {
    try{
        const userData = await User.findOne({ where: { name: request.body.name }});
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
            request.session.user_id = userData.id;
            request.session.logged_in = true;

            result.status(200).json({user: userData, message: 'You are now logged in.'});
        });
    }
    catch(error){
        result.status(400).json(error)
    }
});

//User logout
router.post('/logout', (request, result) => {
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
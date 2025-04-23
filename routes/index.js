const { Router } = require('express');
const controllers = require ('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('welcome'))

router.post('/users', controllers.createUser);
router.get('/users', controllers.getAllUsers);
router.delete('/users/:id', controllers.deleteUser);
router.put('/users/:id', controllers.updateUser);
router.get('/users/:id', controllers.getByIdUser);



module.exports = router;

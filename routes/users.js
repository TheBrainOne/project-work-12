const router = require('express').Router();
const users = require('../data/users');

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < users.length; i++) {
    // eslint-disable-next-line no-underscore-dangle
    if (users[i]._id === id) {
      res.send(users[i]);
      return;
    }
  }
  res.status(404).send({ message: 'Нет пользователя с таким id' });
});

module.exports = router;

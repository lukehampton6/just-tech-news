const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const apiRoutes = require('./api');

router.use('/comments', commentRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
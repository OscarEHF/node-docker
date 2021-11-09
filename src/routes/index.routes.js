const router = require('express').Router();

import {
  renderIndex
} from '../controllers/index.controllers';

router.get('/', renderIndex);

module.exports = router;

'use strict';

import {Router} from 'express';
import * as controller from './location.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();


router.get('/', auth.hasRole(['owner', 'manager']), controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;

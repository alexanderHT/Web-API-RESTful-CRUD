var express = require('express');
var router = express.Router();
var controllers = require('../controllers/controller.memo');

/* GET users listing. */
router.get('/', controllers.getAllMemo);
router.post('/', controllers.insertMemo);
router.put('/', controllers.updateMemo);
router.delete('/', controllers.deleteMemo);
router.get('/update', controllers.getOneMemo);

module.exports = router;

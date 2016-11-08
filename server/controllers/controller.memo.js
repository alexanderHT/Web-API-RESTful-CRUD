const Memo = require('../models/model.memo');

module.exports = {

  // get all Memo
  getAllMemo : function(req, res, next) {
    Memo.find({}, function(err, data){
      console.log(data);
      res.json(data)
    })
  },

  // insert data Memo
  insertMemo : function(req, res, next){
    // res.header("orgin") / manual way if you are not using cors package
    var data = JSON.parse(req.body.data);

    var newMemo = Memo({
      id      : data.id,
      title   : data.title,
      content : data.content
    });

    newMemo.save(function(err, data) {
      if (err) throw err;
      res.json(data)
    });

  },
  // delete data Memo
  deleteMemo : function(req, res, next){

    Memo.findOneAndRemove({ id : req.body.id }, function(err, data) {
      if (err) throw err;


      res.json(data.id);

    });
  },
  // update data Memo
  updateMemo : function(req, res, next){
    var data = JSON.parse(req.body.data)

    console.log(typeof(data));
    console.log(data.id);

    Memo.findOneAndUpdate({ id: data.id }, { title: data.title, content : data.content }, { new : true }, function(err, data) {
      if (err) throw err;
      res.json(data)
    });
  },
  // get one data Memo
  getOneMemo : function(req, res, next){
    console.log("masuk");
    Memo.findOne({ id : req.query.id }, function(err, Memo){
      if(!err){
        res.json(Memo)
      }else{ console.log("error !"); }
    })
  }

}

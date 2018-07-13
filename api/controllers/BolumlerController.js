/**
 * BolumlerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  listele: function (req, res) {
    Bolumler.getDatastore().sendNativeQuery('SELECT * FROM bolumler', (err, results) => {
      if (err) {
        res.send(400);
      } else {
        console.log(results);
        res.view('bolumListele',{sonuc:results.rows});
      }
    });
  }

};


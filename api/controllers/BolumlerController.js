/**
 * BolumlerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  listele: function (req, res) {
    Bolumler.query('SELECT * FROM bolumler', (err, results) => {
      if (err) {
        res.send(400);
      } else {
        res.view('bolumListele',{sonuc:results});
      }
    });
  }

};


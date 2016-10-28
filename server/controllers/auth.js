module.exports = {
  logIn(req, res) {
    res.status(400).json({
      message: 'Failure',
      entity: req.body
    });
  },

  signUp(req, res) {
    res.json({
      message: 'Success',
      entity: req.body
    });
  },
};

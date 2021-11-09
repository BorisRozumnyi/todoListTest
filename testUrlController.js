class testUrlController {
  async testAction(req, res) {
    try {
      console.log(req);
      res.json('server worked');
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: 'getUsers error',
      });
    }
  }
}

module.exports = new testUrlController();
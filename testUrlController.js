class testUrlController {
  async testAction(req, res) {
    try {
      res.json('server worked');
    } catch (error) {
      console.log(
        'error.message',
        error.message
      );
      res.status(400).json({
        message: 'getUsers error',
      });
    }
  }
}

module.exports =
  new testUrlController();

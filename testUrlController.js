const mockData = [
  {
    title: 'item 1',
    description: 'some description 1',
  },
  {
    title: 'item 2',
    description: 'some description 2',
  },
  {
    title: 'item 3',
    description: 'some description 3',
  },
  {
    title: 'item 4',
    description: 'some description 4',
  },
];

class testUrlController {
  async testAction(req, res) {
    try {
      res.json(mockData);
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

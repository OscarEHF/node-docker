const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.json({ message: 'Hello World! :D' });
}

module.exports = indexCtrl;

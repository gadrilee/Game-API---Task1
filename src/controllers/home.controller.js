function getHome(req, res) {
  res.status(200).send('Welcome to my Express server!. Atte. Gabriel :)');
}

module.exports = { getHome };
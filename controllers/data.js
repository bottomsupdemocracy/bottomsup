/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('data', {
    title: 'data'
  });
};

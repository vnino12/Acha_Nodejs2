const pal = {
  index: (req, res) => {
    res.render('index');
  },
  about: (req, res) => {
    res.render('about');
  },
  features: (req, res) => {
    res.render('features');
  },
  services: (req, res) => {
    res.render('services');
  },
  pricing: (req, res) => {
    res.render('pricing');
  },
  dropdown1: (req, res) => {
    res.render('dropdown1');
  },
  dropdown2: (req, res) => {
    res.render('dropdown2');
  },
  dropdown3: (req, res) => {
    res.render('dropdown3');
  },
  dropdown4: (req, res) => {
    res.render('dropdown4');
  },
  dropdown5: (req, res) => {
    res.render('dropdown5');
  }
};

module.exports = pal;

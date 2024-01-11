const mariyaRoute = (req, res) => {
    res.send("Mariya Harrison");
  };

  const jasonRoute = (req, res) => {
    res.send("Jason Harrison");
  };

  module.exports = {
    mariyaRoute,
    jasonRoute,
  };
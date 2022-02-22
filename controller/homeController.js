exports.index = (req, res) => {
  res.json({ msg: "The start of the app" });
};

exports.store = (req, res) => {
  const arr = { ...req.body };
  res.json({ ...arr });
};

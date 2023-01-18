const path = require("path");
const rootDir = require("../util/path");

exports.contact = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

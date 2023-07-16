const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = __dirname + "/../public/files/users/" + req.user.user_id;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, req.user.user_id + "." + file.mimetype.split("/")[1]);
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

module.exports.upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fieldNameSize: 200,
    fileSize: 1024 * 1024 * 150,
  },
}).single("image");

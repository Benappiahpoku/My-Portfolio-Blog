const express = require("express");
const cors = require("cors"); // Import cors
const bodyParser = require("body-parser"); // Import body-parser
const errorHandler = require("./middleware/errorHandler"); // Import the error handler middleware
const path = require("path"); // Import path for file paths
const multer = require("multer"); // Import multer for images upload
const fs = require("fs"); // for creating folders for images
const searchRoutes = require("./routes/search"); //Search route


const app = express();
app.use(cors());
app.use(bodyParser.json());



// Multer storage configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// Ensure the upload directory exists
const dirPath = path.join(__dirname, 'public/uploads'); // Add this line
fs.mkdir(dirPath, { recursive: true }, (error) => { // Add this line
  if (error) { // Add this line
    console.error('Error creating directory:', error); // Add this line
  } else { // Add this line
    console.log('Directory created'); // Add this line
  } 
}); 

// Export the upload middleware
module.exports.upload = upload;

// Require your models and their relationships
require('./models');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Require the posts router
const postRoutes = require('./routes/posts');

// Use the posts router for requests to /posts
app.use('/posts', postRoutes);

// Require the users router
const userRoutes = require("./routes/users");

// Use the users router for requests to /users
app.use("/users", userRoutes);

// Require the comments router
const commentRoutes = require("./routes/comments");

// Use the comments router for requests to /comments
app.use("/comments", commentRoutes);

// Require the UserActivities router
const userActivityRoutes = require("./routes/userActivities");

// Use the user activities router for requests to /userActivities
app.use("/userActivities", userActivityRoutes);


 // Use the search routes
 // Has to come under all the other routes
app.use("/", searchRoutes);

// Require the error router
app.use(errorHandler);


app.get("/", (req, res) => res.send("Hello World! from express App"));

app.listen(3000, () => console.log("Server is running on port 3000"));

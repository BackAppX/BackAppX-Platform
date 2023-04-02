const express = require("express");
const { registerRules, validator } = require("../middlewares/validator.js");
const isAuth = require("../middlewares/passport-setup.js");
const {
  register,
  login,
  authorizeRoles,
  updateUser,
  deleteUser,
  allUsers,
  userData,
  getSingleUser,
  addMyProject,
  forgotPassword,
  resetPassword,
  uploadphoto,
  blockUser,
  updateUserSubscription,
  uploadImage,
  getImage
} = require("../controllers/user.js");

// Upload Image

const multer = require("multer");
const fs = require("fs");

const Router = express.Router();
const path = require("path");
Router.post("/register", registerRules(), validator, register);
Router.post("/login", login, authorizeRoles);
Router.put("/profile/:id", updateUser);
Router.delete("/delete/:id", deleteUser);
Router.put("/forgot-password", forgotPassword);
Router.post("/userData", userData);
Router.put("/reset-password", resetPassword);

Router.get("/users", allUsers);
Router.get("/user/:id", getSingleUser);
Router.get("/current", isAuth(), (req, res) => {
  console.log("req", req);
  res.json(req.user);
});
Router.put("/myProject/:id", addMyProject);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    const userId = req.params.userId;
    const uploadDir = `./uploads/${userId}`;
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
/*   let filetype = "";
  let fileExtension = "";
  if (file.mimetype === "image/gif") {
    filetype = "image-";
    fileExtension = "gif";
  }
  if (file.mimetype === "image/png") {
    filetype = "image-";
    fileExtension = "png";
  }
  if (file.mimetype === "image/jpeg") {
    filetype = "image-";
    fileExtension = "jpeg";
  }
  if (file.mimetype === "application/pdf") {
    filetype = "pdf-";
    fileExtension = "pdf";
  }

  cb(null, filetype + Date.now() + "." + fileExtension);
  h = cb;
*/

  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "Unsupported File Format" }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter: fileFilter,
});

/* Router.post("/upload/:userId", upload.single("file"), (req, res) => {
  const { userId } = req.params;
  // Use userId here
}); */
Router.put("/upload/:userId", upload.single("file"), uploadImage);
Router.get("/image/:userId/:imageName", getImage);


Router.put("/blockUser", blockUser);
Router.put("/update-subscription", updateUserSubscription);

module.exports = Router;





//----------------------------------------------------------------------//
//------------------------- Swagger Documentation ----------------------//
//----------------------------------------------------------------------//

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The user's email
 *         phoneNumber:
 *           type: Number
 *           description: The user's phone number
 *         password:
 *           type: string
 *           description: The user's password
 *         createdAt:
 *           type: Date
 *           description: The user's creation date
 *           default: new Date()
 *         image:
 *           type: string
 *           description: The user's image
 *         role:
 *           type: string
 *           description: The user's role
 *           default: "User"
 *         Fonction:
 *           type: string
 *           description: The user's fonction
 *           default: ""
 *         myProjects:
 *           type: array
 *           description: The user's projects
 *           default: []
 *         resetLink:
 *           type: string
 *           description: The user's reset link
 *           default: ""
 *         startedAt:
 *           type: Date
 *           description: The user's subscription start date
 *           default: new Date()
 *         endedAt:
 *           type: Date
 *           description: The user's subscription end date
 *           default: new Date().setMonth( new Date().getMonth() + 12)
 *         subscription:
 *           type: String
 *           description: The user's subscription type
 *           default: "Free"
 *
 *       example:
 *         id: 5f5a64d471c4360017c2e1f3
 *         name: John Doe
 *         email: JohnDoe@email.com
 *         phoneNumber: 21345678
 *         password: chnageMe
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         image: https://res.cloudinary.com/dzcmadjl1/image/upload/v1600000000/sample.jpg
 *         role: user
 *         Fonction: developer
 *         myProjects: []
 *         resetLink: ""
 *         startedAt: "2020-03-10T04:05:06.157Z"
 *         endedAt: "2021-03-10T04:05:06.157Z"
 *         subscription: free
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users management API
 * /user/users :
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:  integer
 *                       name: string
 *                       email: string
 *                       password: string
 *                       role: string
 *                       createdAt: string
 *                       updatedAt: string
 *                       deletedAt: string
 *                       projects: array
 *                       profileImage: string
 *                       subscription: string
 *
 *
 *
 * /user/user/{id}:
 *   get:
 *     summary: Retrieve a single user
 *     description: Retrieve a single user.
 *     tags:
 *       - Users
 *
 *
 * /user/register:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user.
 *     tags:
 *       - Users
 *
 *
 * /user/login:
 *   post:
 *     summary: Login a user
 *     description: Login a user.
 *     tags:
 *       - Users
 *
 *
 * /user/profile/{id}:
 *   put:
 *     summary: Update a user
 *     description: Update a user.
 *     tags:
 *       - Users
 *
 * /user/delete/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user.
 *     tags:
 *       - Users
 *
 *
 * /user/forgot-password:
 *   put:
 *     summary: Forgot password
 *     description: Forgot password.
 *     tags:
 *       - Users
 *
 * /user/reset-password:
 *   put:
 *     summary: Reset password
 *     description: Reset password.
 *     tags:
 *       - Users
 *
 * /user/userData:
 *   post:
 *     summary: Get user data
 *     description: Get user data.
 *     tags:
 *       - Users
 *
 *
 * /user/current:
 *   get:
 *     summary: Get current user
 *     description: Get current user.
 *     tags:
 *       - Users
 *
 * /user/myProject/{id}:
 *   put:
 *     summary: Add a project to user
 *     description: Add a project to user.
 *     tags:
 *       - Users
 *
 * /user/uploadphoto/{id}:
 *   put:
 *     summary: Upload a photo
 *     description: Upload a photo.
 *     tags:
 *       - Users
 *
 */
 const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/dbConnect");
//routes declaration
const userRoutes = require("./routes/user.js");
const projectRoutes = require("./routes/projectroutes.js");
const clientRoutes = require("./routes/clientRoutes.js");


const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");

const paymeeRoutes = require("./routes/paymentService");

// const pushNotificationRoutes = require("./routes/pushNotificationService");

const stripeRoutes = require("./routes/stripe");
const emailServiceRoutes = require("./routes/emailService");


const mailingService = require("./utils/mailingScheduler");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

//Upload Image
const cloudinary = require("./uploads/cloudinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");


//Mailing Service jobs
mailingService
//Basic Configuration
const app = express();
const port = process.env.PORT || 9092;

 //Swagger UI Documentation
 const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BACKAPPX API",
      version: "0.1.0",
      description: "BACKAPPX API Documentation",
    },
    contact : {
      name : "BACKAPPX",
      email : "back.app.x@gmail.com"
    },
    servers: [
      {
        url: "http://localhost:9092",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



//Routes path
app.use("/user", userRoutes);

app.use("/api-docs", swaggerUi.serve,
    swaggerUi.setup(specs,
        { explorer: true,
          customCssUrl:
              "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-material.css",
        })
);
app.use("/payment", stripeRoutes);
app.use("/project", projectRoutes);
app.use("/client", clientRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);

app.use("/paymee", paymeeRoutes);
app.use("/email", emailServiceRoutes);
// app.use("/push", pushNotificationRoutes);


/* app.post("/upload", uploader.single("image"), async (req, res) => {
  const upload = await cloudinary.v2.uploader.upload(req.file.path); */
  // Upload Image
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => "png",
    public_id: (req, file) => "computed-filename-using-request",
  },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  const uploadResult = await cloudinary.uploader.upload(req.file.path);

  return res.json({
    success: true,
/*     file: upload.secure_url,
 */
       file: uploadResult.secure_url,

});
});


// app.post("/upload", upload.single("image"), async (req, res) => {
//   const uploadResult = await cloudinary.uploader.upload(req.file.path);
//   return res.json({
//     success: true,
//     file: uploadResult.secure_url,
//   });
// });

// MongoDB setup
connectDB();

const PORT = process.env.PORT || 9092;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on PORT ${PORT}`)
);

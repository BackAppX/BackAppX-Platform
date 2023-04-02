const  express =  require ( "express" ) ;
const  { registerRules ,  validator }  =  require ( "../middlewares/validator.js" ) ;
const emailServiceController = require("../controllers/emailServiceController");

const Router = express.Router();


//CRUD
Router.post("/create", emailServiceController.createEmail);
Router.get("/", emailServiceController.findAllEmails);
Router.get("/:id", emailServiceController.findOneEmail);
Router.put("/:id", emailServiceController.updateEmail);
Router.delete("/:id", emailServiceController.deleteEmail);

//SendEmail
Router.post("/send/:id", emailServiceController.sendEmail);


module.exports = Router;

//----------------------------------------------------------------------//
//------------------------- Swagger Documentation ----------------------//
//----------------------------------------------------------------------//

/**
 * @swagger
 * components:
 *   schemas:
 *     Emails:
 *       type: object
 *       required:
 *         - from
 *         - to
 *         - subject
 *         - body
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the email
 *         from:
 *           type: string
 *           description: The sender of the email
 *         reference:
 *           to: string
 *           description: The receiver of the email
 *         subject:
 *           type: string
 *           description: The subject of the email
 *         body:
 *           type: string
 *           description: The body of the email
 *       example:
 *         id: 5f5a64d471c4360017c2e1f3
 *         from: "backAppSen@test.ts"
 *         to: "backAppRec@test.ts"
 *         subject: "Test Email"
 *         body: "<p>Hi, <br> <br> This is a test email. <br> <br> Thanks, <br> Team</p>"
 */



/**
 * @swagger
 * tags:
 *   name: Emails
 *   description: The Emails management API
 * /emails:
 *   get:
 *     summary: Lists all the emails
 *     tags: [Emails]
 *     responses:
 *       200:
 *         description: The list of the emails.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Emails'
 * /emails/{id}:
 *   get:
 *     summary: Get the email by id
 *     tags: [Emails]
 *     parameters:
 *       - in: path
 *         id: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The email id
 *     responses:
 *       200:
 *         description: The email response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Emails'
 *       404:
 *         description: The email was not found
 *   post:
 *     summary: Create a new email
 *     tags: [Emails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Emails'
 *     responses:
 *       200:
 *         description: The created email.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Emails'
 *       500:
 *         description: Some server error
 *   put:
 *    summary: Update the email by the id
 *    tags: [Emails]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The email id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Emails'
 *    responses:
 *      200:
 *        description: The email was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Emails'
 *      404:
 *        description: The email was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the email by id
 *     tags: [Emails]
 *     parameters:
 *       - in: path
 *         id: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The email id
 *
 *     responses:
 *       200:
 *         description: The email was deleted
 *       404:
 *         description: The email was not found
 */

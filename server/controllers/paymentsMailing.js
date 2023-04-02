const express = require("express")
const nodemailer = require("nodemailer")
const User = require("../models/User");

// sendEmail after payment
exports.sendEmailConfirmationPayment = async (email) => {
    const invoiceDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const user = await User.findOne({ email: email });
    const InvoiceNumber = Math.floor(Math.random() * 1000000000);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "zaghouani.yosri@gmail.com",
            pass: "yimktgkvxvbbylzp",
        },
    });
    const mailOptions = {
        from: "zaghouani.yosri@gmail.com",
        to: email,
        subject: "Payment Confirmation",
        html: `<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }

        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
        }

        p {
            line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
        }

        .image_block img+div {
            display: none;
        }

        @media (max-width:660px) {

            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
                display: inline-block !important;
            }

            .icons-inner {
                text-align: center;
            }

            .icons-inner td {
                margin: 0 auto;
            }

            .image_block img.big,
            .row-content {
                width: 100% !important;
            }

            .mobile_hide {
                display: none;
            }

            .stack .column {
                width: 100%;
                display: block;
            }

            .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
            }

            .desktop_hide,
            .desktop_hide table {
                display: table !important;
                max-height: none !important;
            }
        }
    </style>
</head>

<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt;
 mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
        <tbody>
            <tr>
                <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; 
mso-table-rspace: 0pt; color: #000000; width: 640px;" width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 20px; vertical-align: top; 
border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff8779; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-top: 60px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px"><img alt="Image"
                                                                        class="big"
                                                                        src="https://user-images.githubusercontent.com/58667227/222170292-d545f9a0-61be-435f-934e-632a9d4a18cf.png"
                                                                        style="display: block; height: auto; border: 0; width: 481px; max-width: 100%;"
                                                                        title="Image" width="481" /></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="text_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-left:10px;padding-right:10px;padding-top:30px;">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #0c2b5b; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <span style="font-size:58px;"><strong>Dear
                                                                                    ${user.name},</strong></span></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="text_block block-3" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #0c2b5b; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <span style="font-size:34px;"><strong>Thanks for trusting on us</strong></span></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="divider_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                        width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner"
                                                                                style="font-size: 1px; line-height: 1px; border-top: 0px solid #FFFFFF;">
                                                                                <span> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #8cc0e8; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px"><img alt="Image"
                                                                        src="https://user-images.githubusercontent.com/58667227/222170282-4b24af80-608d-4062-92fc-3473fd75651b.png"
                                                                        style="display: block; height: auto; border: 0; width: 24px; max-width: 100%;"
                                                                        title="Image" width="24" /></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="text_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            Invoice No:</p>
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            <strong>${InvoiceNumber}</strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px"><img alt="Image"
                                                                        src="https://user-images.githubusercontent.com/58667227/222170286-335fe7b2-6a10-4e95-a24f-560ade29565e.png"
                                                                        style="display: block; height: auto; border: 0; width: 22px; max-width: 100%;"
                                                                        title="Image" width="22" /></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            Invoice Date:</p>
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            <strong> ${invoiceDate} </strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-3"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="33.333333333333336%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px"><img alt="Image"
                                                                        src="https://user-images.githubusercontent.com/58667227/222170288-15330885-5ddf-4513-bf02-0e308141b4ef.png"
                                                                        style="display: block; height: auto; border: 0; width: 25px; max-width: 100%;"
                                                                        title="Image" width="25" /></div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            Amount Due:</p>
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            <strong>$40.00</strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 30px; padding-right: 30px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="66.66666666666667%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;">
                                                                            <span
                                                                                style="font-size:20px;"><strong>Client:</strong></span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="text_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;">
                                                                            ${email}
                                                                        </p>
                                                                       
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 35px; padding-top: 40px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="33.333333333333336%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            Amount Due:</p>
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                            <strong>$40.00</strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                        role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6da3cd; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <strong>No.</strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <strong>ITEM DESCRIPTION</strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-3"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <strong>PRICE</strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-4"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <strong>QTY</strong></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                        role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            01</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            Pro Plan</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-3"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            $40.00</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-4"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                    width="25%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            1</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="50%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 30px;">
                                                                            <span style="font-size:16px;">Payment
                                                                                Method:</span><br /><span
                                                                                style="font-size:20px;"><strong>CARD</strong></span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                                <td class="column column-2"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="50%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 25.2px; color: #ffffff; line-height: 1.8;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 28.8px;">
                                                                            <span
                                                                                style="font-size:16px;">Subtotal:<strong>
                                                                                    $40.00</strong></span><br /><span
                                                                                style="font-size:16px;">Amount Due:
                                                                                <strong>$40.00</strong></span></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
 
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="divider_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        role="presentation"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                        width="100%">
                                                                        <tr>
                                                                            <td class="divider_inner"
                                                                                style="font-size: 1px; line-height: 1px; border-top: 0px solid #5C98C7;">
                                                                                <span> </span></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 45px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="button_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment">
                                                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:56px;width:207px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#fd8513"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Tahoma, Verdana, sans-serif; font-size:18px"><![endif]-->
                                                                    
                                                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="social_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div align="center" class="alignment">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        class="social-table" role="presentation"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
                                                                        width="168px">
                                                                        <tr>
                                                                            <td style="padding:0 10px 0 0px;"><a
                                                                                    href="http://www.example.com/"
                                                                                    target="_self"><img alt="Facebook"
                                                                                        height="32"
                                                                                        src="https://user-images.githubusercontent.com/58667227/222170272-d948b2b9-6650-49a7-94f3-af5a73c62890.png"
                                                                                        style="display: block; height: auto; border: 0;"
                                                                                        title="Facebook"
                                                                                        width="32" /></a></td>
                                                                            <td style="padding:0 10px 0 0px;"><a
                                                                                    href="http://www.example.com/"
                                                                                    target="_self"><img alt="Twitter"
                                                                                        height="32"
                                                                                        src="https://user-images.githubusercontent.com/58667227/222170309-e8dd90b0-d328-4295-a256-8e27a3a2755d.png"
                                                                                        style="display: block; height: auto; border: 0;"
                                                                                        title="Twitter"
                                                                                        width="32" /></a></td>
                                                                            <td style="padding:0 10px 0 0px;"><a
                                                                                    href="http://www.example.com/"
                                                                                    target="_self"><img alt="Instagram"
                                                                                        height="32"
                                                                                        src="https://user-images.githubusercontent.com/58667227/222170294-aab1d1cf-2c4b-4801-b80c-c96202889f2d.png"
                                                                                        style="display: block; height: auto; border: 0;"
                                                                                        title="Instagram"
                                                                                        width="32" /></a></td>
                                                                            <td style="padding:0 10px 0 0px;"><a
                                                                                    href="http://www.example.com/"
                                                                                    target="_self"><img alt="LinkedIn"
                                                                                        height="32"
                                                                                        src="https://user-images.githubusercontent.com/58667227/222170296-4a884728-1a70-448f-b1fd-d18355132f22.png"
                                                                                        style="display: block; height: auto; border: 0;"
                                                                                        title="LinkedIn"
                                                                                        width="32" /></a></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="text_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div style="font-family: sans-serif">
                                                                    <div class=""
                                                                        style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <span style="font-size:11px;">Copyright ©
                                                                                2020 All Rights Reserved </span>
                                                                        </p>
                                                                        
                                                                        <p
                                                                            style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                            <span style="font-size:11px;">848 North St.
                                                                                Hopewell, VA 23860</span></p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13"
                        role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                        width="640">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="icons_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    role="presentation"
                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                    width="100%">
                                                                    <tr>
                                                                        <td class="alignment"
                                                                            style="vertical-align: middle; text-align: center;">
                                                                            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                            <!--[if !vml]><!-->
                                                                            <table cellpadding="0" cellspacing="0"
                                                                                class="icons-inner" role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
                                                                                <!--<![endif]-->
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table><!-- End -->
</body>

</html>`,
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log("error occurs", err);
        } else {
            console.log("email sent After Payment to : " + email);

        }
    });
}

// sendEmail before expiration date by 7 days
exports.sendEmailBeforeExpirationDate = async (email, name) => {
    const invoiceDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const user = await User.findOne({ email: email });
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "zaghouani.yosri@gmail.com",
            pass: "yimktgkvxvbbylzp",
        },
    });
    const mailOptions = {
        from: "BackAppX",
        to: email,
        subject: "7 days before expiration",
        html: `<!DOCTYPE html>
        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        
        <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
            <style>
                * {
                    box-sizing: border-box;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                }
        
                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                }
        
                p {
                    line-height: inherit
                }
        
                .desktop_hide,
                .desktop_hide table {
                    mso-hide: all;
                    display: none;
                    max-height: 0px;
                    overflow: hidden;
                }
        
                .image_block img+div {
                    display: none;
                }
        
                @media (max-width:660px) {
        
                    .desktop_hide table.icons-inner,
                    .social_block.desktop_hide .social-table {
                        display: inline-block !important;
                    }
        
                    .icons-inner {
                        text-align: center;
                    }
        
                    .icons-inner td {
                        margin: 0 auto;
                    }
        
                    .image_block img.big,
                    .row-content {
                        width: 100% !important;
                    }
        
                    .mobile_hide {
                        display: none;
                    }
        
                    .stack .column {
                        width: 100%;
                        display: block;
                    }
        
                    .mobile_hide {
                        min-height: 0;
                        max-height: 0;
                        max-width: 0;
                        overflow: hidden;
                        font-size: 0px;
                    }
        
                    .desktop_hide,
                    .desktop_hide table {
                        display: table !important;
                        max-height: none !important;
                    }
                }
            </style>
        </head>
        
        <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt;
         mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; 
        mso-table-rspace: 0pt; color: #000000; width: 640px;" width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 20px; vertical-align: top; 
        border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><a
                                                                                href="http://www.example.com/"
                                                                                style="outline:none" tabindex="-1"
                                                                                target="_self"><img alt="Logo" class="big"
                                                                                    src="https://user-images.githubusercontent.com/58667227/218262555-710a7b0c-ac49-49a3-b7d5-12fc1d7a8295.png"
                                                                                    style="display: block; height: auto; border: 0; width: 640px; max-width: 100%;"
                                                                                    title="Logo" width="640" /></a></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff8779; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-top: 60px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                class="big"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170292-d545f9a0-61be-435f-934e-632a9d4a18cf.png"
                                                                                style="display: block; height: auto; border: 0; width: 481px; max-width: 100%;"
                                                                                title="Image" width="481" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-left:10px;padding-right:10px;padding-top:30px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #0c2b5b; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:58px;"><strong>Dear
                                                                                            ${name},</strong></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-3" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #0c2b5b; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:34px;"><strong>You
                                                                                            have a pending
                                                                                            invoice</strong></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #FFFFFF;">
                                                                                        <span> </span></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #8cc0e8; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170282-4b24af80-608d-4062-92fc-3473fd75651b.png"
                                                                                style="display: block; height: auto; border: 0; width: 24px; max-width: 100%;"
                                                                                title="Image" width="24" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Invoice No:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>0123963</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170286-335fe7b2-6a10-4e95-a24f-560ade29565e.png"
                                                                                style="display: block; height: auto; border: 0; width: 22px; max-width: 100%;"
                                                                                title="Image" width="22" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Invoice Date:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>22 January 2020</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-3"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170288-15330885-5ddf-4513-bf02-0e308141b4ef.png"
                                                                                style="display: block; height: auto; border: 0; width: 25px; max-width: 100%;"
                                                                                title="Image" width="25" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Amount Due:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>$40.00</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 30px; padding-right: 30px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="66.66666666666667%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;">
                                                                                    <span
                                                                                        style="font-size:20px;"><strong>Client:</strong></span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;">
                                                                                    Company Name LLC, represented by John Doe,
                                                                                </p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;">
                                                                                    ID: 020 5793 9378, Prairie Drive Far,</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;">
                                                                                    Rockaway, Y 11691, US</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 35px; padding-top: 40px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Amount Due:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>$40.00</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                                role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6da3cd; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>No.</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>ITEM DESCRIPTION</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-3"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>PRICE</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-4"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>QTY</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                                role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    01</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    Pro Plan</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-3"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    $40.00</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-4"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    1</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="50%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 30px;">
                                                                                    <span style="font-size:16px;">Payment
                                                                                        Method:</span><br /><span
                                                                                        style="font-size:20px;"><strong>CARD</strong></span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="50%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 25.2px; color: #ffffff; line-height: 1.8;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 28.8px;">
                                                                                    <span
                                                                                        style="font-size:16px;">Subtotal:<strong>
                                                                                            $40.00</strong></span><br /><span
                                                                                        style="font-size:16px;">Amount Due:
                                                                                        <strong>$40.00</strong></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #5C98C7;">
                                                                                        <span> </span></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 45px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="button_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:56px;width:207px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#fd8513"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Tahoma, Verdana, sans-serif; font-size:18px"><![endif]--><a
                                                                                href="http://www.example.com/"
                                                                                style="text-decoration:none;display:inline-block;color:#000000;background-color:#fd8513;border-radius:0px;width:auto;border-top:0px solid transparent;font-weight:normal;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:10px;padding-bottom:10px;font-family:Lato, Tahoma, Verdana, Segoe, sans-serif;font-size:18px;text-align:center;mso-border-alt:none;word-break:keep-all;"
                                                                                target="_self"><span
                                                                                    style="padding-left:60px;padding-right:60px;font-size:18px;display:inline-block;letter-spacing:normal;"><span
                                                                                        style="word-break:break-word;"><span
                                                                                            data-mce-style=""
                                                                                            style="line-height: 36px;"><strong>PAY
                                                                                                NOW</strong></span></span></span></a>
                                                                            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="social_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                class="social-table" role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
                                                                                width="168px">
                                                                                <tr>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="Facebook"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170272-d948b2b9-6650-49a7-94f3-af5a73c62890.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="Facebook"
                                                                                                width="32" /></a></td>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="Twitter"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170309-e8dd90b0-d328-4295-a256-8e27a3a2755d.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="Twitter"
                                                                                                width="32" /></a></td>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="Instagram"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170294-aab1d1cf-2c4b-4801-b80c-c96202889f2d.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="Instagram"
                                                                                                width="32" /></a></td>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="LinkedIn"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170296-4a884728-1a70-448f-b1fd-d18355132f22.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="LinkedIn"
                                                                                                width="32" /></a></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:11px;">Copyright ©
                                                                                        2020 All Rights Reserved | <a
                                                                                            href="http://www.example.com/"
                                                                                            rel="noopener"
                                                                                            style="text-decoration: none; color: #0068A5;"
                                                                                            target="_blank">Unsubscribe</a></span>
                                                                                </p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:11px;">You are
                                                                                        receiving this email because you signed
                                                                                        up on our website [<a
                                                                                            href="http://www.example.com/"
                                                                                            rel="noopener"
                                                                                            style="text-decoration: none; color: #0068A5;"
                                                                                            target="_blank">example.com</a>]</span>
                                                                                </p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:11px;">848 North St.
                                                                                        Hopewell, VA 23860</span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="icons_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                            width="100%">
                                                                            <tr>
                                                                                <td class="alignment"
                                                                                    style="vertical-align: middle; text-align: center;">
                                                                                    <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                    <!--[if !vml]><!-->
                                                                                    <table cellpadding="0" cellspacing="0"
                                                                                        class="icons-inner" role="presentation"
                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
                                                                                        <!--<![endif]-->
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table><!-- End -->
        </body>
        
        </html>`,
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log("error occurs", err);
        } else {
            console.log("7 days before expiration email sent");
        }
    });
}

// send Email after expiration date
exports.sendEmailAfterExpirationDate = async (email,name) => {
    const invoiceDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "zaghouani.yosri@gmail.com",
            pass: "yimktgkvxvbbylzp",
        },
    });
    const mailOptions = {
        from: "BackAppX",
        to: email,
        subject: "Renew your subscription",
        html: `<!DOCTYPE html>
        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        
        <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
            <style>
                * {
                    box-sizing: border-box;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                }
        
                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                }
        
                p {
                    line-height: inherit
                }
        
                .desktop_hide,
                .desktop_hide table {
                    mso-hide: all;
                    display: none;
                    max-height: 0px;
                    overflow: hidden;
                }
        
                .image_block img+div {
                    display: none;
                }
        
                @media (max-width:660px) {
        
                    .desktop_hide table.icons-inner,
                    .social_block.desktop_hide .social-table {
                        display: inline-block !important;
                    }
        
                    .icons-inner {
                        text-align: center;
                    }
        
                    .icons-inner td {
                        margin: 0 auto;
                    }
        
                    .image_block img.big,
                    .row-content {
                        width: 100% !important;
                    }
        
                    .mobile_hide {
                        display: none;
                    }
        
                    .stack .column {
                        width: 100%;
                        display: block;
                    }
        
                    .mobile_hide {
                        min-height: 0;
                        max-height: 0;
                        max-width: 0;
                        overflow: hidden;
                        font-size: 0px;
                    }
        
                    .desktop_hide,
                    .desktop_hide table {
                        display: table !important;
                        max-height: none !important;
                    }
                }
            </style>
        </head>
        
        <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt;
         mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
                <tbody>
                    <tr>
                        <td>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; 
        mso-table-rspace: 0pt; color: #000000; width: 640px;" width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 20px; vertical-align: top; 
        border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ff8779; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-top: 60px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                class="big"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170292-d545f9a0-61be-435f-934e-632a9d4a18cf.png"
                                                                                style="display: block; height: auto; border: 0; width: 481px; max-width: 100%;"
                                                                                title="Image" width="481" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-left:10px;padding-right:10px;padding-top:30px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #0c2b5b; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:58px;"><strong>Dear
                                                                                            karam,</strong></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-3" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #0c2b5b; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:34px;"><strong>Your susbscription is nearly to end</strong></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #FFFFFF;">
                                                                                        <span> </span></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #8cc0e8; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170282-4b24af80-608d-4062-92fc-3473fd75651b.png"
                                                                                style="display: block; height: auto; border: 0; width: 24px; max-width: 100%;"
                                                                                title="Image" width="24" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Invoice No:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>0123963</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170286-335fe7b2-6a10-4e95-a24f-560ade29565e.png"
                                                                                style="display: block; height: auto; border: 0; width: 22px; max-width: 100%;"
                                                                                title="Image" width="22" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Invoice Date:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>22 January 2020</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-3"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="Image"
                                                                                src="https://user-images.githubusercontent.com/58667227/222170288-15330885-5ddf-4513-bf02-0e308141b4ef.png"
                                                                                style="display: block; height: auto; border: 0; width: 25px; max-width: 100%;"
                                                                                title="Image" width="25" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Amount Due:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>$40.00</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-left: 30px; padding-right: 30px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="66.66666666666667%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;">
                                                                                    <span
                                                                                        style="font-size:20px;"><strong>Client:</strong></span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;">
                                                                                    Email
                                                                                </p>
                                                                               
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 35px; padding-top: 40px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="33.333333333333336%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    Amount Due:</p>
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;">
                                                                                    <strong>$40.00</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                                role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #6da3cd; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>No.</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>ITEM DESCRIPTION</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-3"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>PRICE</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-4"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <strong>QTY</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
                                                role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    01</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    Pro Plan</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-3"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    $40.00</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-4"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-bottom: 1px solid #6DA3CD; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-left: 0px;"
                                                            width="25%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    1</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="50%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 30px;">
                                                                                    <span style="font-size:16px;">Payment
                                                                                        Method:</span><br /><span
                                                                                        style="font-size:20px;"><strong>CARD</strong></span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="50%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 25.2px; color: #ffffff; line-height: 1.8;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 28.8px;">
                                                                                    <span
                                                                                        style="font-size:16px;">Subtotal:<strong>
                                                                                            $40.00</strong></span><br /><span
                                                                                        style="font-size:16px;">Amount Due:
                                                                                        <strong>$40.00</strong></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
         
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #5C98C7;">
                                                                                        <span> </span></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #5c98c7; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 45px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="button_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:56px;width:207px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#fd8513"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#000000; font-family:Tahoma, Verdana, sans-serif; font-size:18px"><![endif]-->
                                                                            
                                                                            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="social_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                class="social-table" role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
                                                                                width="168px">
                                                                                <tr>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="Facebook"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170272-d948b2b9-6650-49a7-94f3-af5a73c62890.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="Facebook"
                                                                                                width="32" /></a></td>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="Twitter"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170309-e8dd90b0-d328-4295-a256-8e27a3a2755d.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="Twitter"
                                                                                                width="32" /></a></td>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="Instagram"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170294-aab1d1cf-2c4b-4801-b80c-c96202889f2d.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="Instagram"
                                                                                                width="32" /></a></td>
                                                                                    <td style="padding:0 10px 0 0px;"><a
                                                                                            href="http://www.example.com/"
                                                                                            target="_self"><img alt="LinkedIn"
                                                                                                height="32"
                                                                                                src="https://user-images.githubusercontent.com/58667227/222170296-4a884728-1a70-448f-b1fd-d18355132f22.png"
                                                                                                style="display: block; height: auto; border: 0;"
                                                                                                title="LinkedIn"
                                                                                                width="32" /></a></td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="10" cellspacing="0"
                                                                class="text_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 14px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:11px;">Copyright ©
                                                                                        2020 All Rights Reserved </span>
                                                                                </p>
                                                                                
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">
                                                                                    <span style="font-size:11px;">848 North St.
                                                                                        Hopewell, VA 23860</span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="icons_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                            width="100%">
                                                                            <tr>
                                                                                <td class="alignment"
                                                                                    style="vertical-align: middle; text-align: center;">
                                                                                    <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                    <!--[if !vml]><!-->
                                                                                    <table cellpadding="0" cellspacing="0"
                                                                                        class="icons-inner" role="presentation"
                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
                                                                                        <!--<![endif]-->
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table><!-- End -->
        </body>
        
        </html>`,
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log("error occurs", err);
        } else {
            console.log("email sent");
        }
    });
}

//-----------------------------------------------------------------------------------------------//
//---------------------------------- Swagger Documentation -------------------------------------//
//-----------------------------------------------------------------------------------------------//


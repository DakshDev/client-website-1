import express from "express";
import { config } from "dotenv";
import path from "path";
import nodemailer from "nodemailer";

const app = express();
config();

// Constants
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

// Static App
app.use(express.static(path.join(path.resolve(__dirname, ".."), "public")));

// Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const data = {

// fullname: 'kishore mohan',
// qualification: 'whds',
// specialization: 'web dev',
// designation: '234',
// address: 'Street 11',
// email: 'dakshkishore99@gmail.com',
// cell: '234',
// membership: 'Life Member',
// fields: [ 'Water/air pollution', 'Soil & ground water salinity', '' ],
// experience: '234',
// jobs: '234'

// }

// Route
app.post("/send_mail", async (req, res) => {
  try {
    const data = req.body;
    if (!data) return res.status(400).send({ error: "Form is Empty" });
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dakshkishore99@gmail.com", // your Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // generated app password
      },
    });

    // mail options
    let info = await transporter.sendMail({
      from: '"Segmite Website" <user@gmail.com>', // sender address
      to: "info.bookluxe@gmail.com", // recipient
      subject: "Segmite Membership Form", // subject
      html: `<body style="width:100%;height:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%"><div lang="en" style="background-color:#f6f6f6;padding:20px 0"><table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;height:100%;background-color:#f6f6f6"><tr><td valign="top" style="display:flex;justify-content:center"><table align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;background-color:#e5e0e0;width:100%;border-radius:10px;overflow:hidden;max-width:600px"><tr><td style="padding:0 0 20px 0"><table bgcolor="#6aa84f" align="center" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background-color:#6aa84f;width:100%"><tr><td align="center" style="padding:30px 10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:34px;font-weight:700;color:#fff">Segmite Member</h3></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Name (Prof. Dr. Engr.)</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.fullname
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Highest qualification</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.qualification
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Specialization</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.specialization
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Designation and organization</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.designation
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Address</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.address
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Email</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.email
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Cell</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.cell
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Tick the membership desired</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.membership
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Fields applicable</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${data.fields.join(
        " | "
      )}</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Professional experience.</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.experience
      }</p></td></tr></table></td></tr><tr><td style="padding:0 10px 5px 10px"><table bgcolor="#f6f6f6" align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%;border:1px solid #ccc;border-radius:10px"><tr><td style="padding:10px"><h3 style="margin:0;font-family:Arial,Helvetica,sans-serif;line-height:20px;color:#333">Specific jobs to be done</h3><p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#333">${
        data.jobs
      }</p></td></tr></table></td></tr><tr><td style="padding:10px 0"><table align="center" cellspacing="0" cellpadding="0" style="border-collapse:separate;width:100%"><tr><td align="center" style="padding:10px 20px"><a href="tel:1234567" target="_blank" style="text-decoration:none;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;display:inline-block;padding:10px 20px;background:#6aa84f;border-radius:10px">Contact Member</a></td></tr></table></td></tr></table></td></tr></table></div></body>`,
      // html: "<b>This is a test email</b> from my website.", // html body
    });

    res.send(info);
  } catch (error) {}
});
app.get("/", (req, res) => {
  res.render("main");
});
app.get("/membership-form", (req, res) => {
  res.render("membership_form");
});

app.listen(PORT, () => console.log(`🟢 Server is running on PORT:${PORT}`));

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    const { datos } = req.body;

    if (!datos) {
      throw new Error("Missing data");
    }

    // Mensaje del mail
    const mensaje = `
    Nombre: ${datos.name}\n
    Email: ${datos.email}\n
    ……………\n
    ${datos.message}
    `;

    const msg = {
      to: process.env.MAIL_RECIPIENT,
      from: process.env.MAIL_SENDER,
      subject: `Portfolio - ${datos.subject}`,
      text: mensaje,
    };

    await sgMail
      .send(msg)
      .then(() => {
        return res.status(200).json({ status: 200 });
      })
      .catch((error) => {
        return res.status(200).json({ status: 400 });
        //   console.error(error);
      });
  } catch (error) {
    // console.error(error);
    return res.status(500).end(error.message);
  }
}

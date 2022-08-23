export default async function handler(req, res) {
  const { tokenCaptcha } = req.body;

  // Armar url con los parametros correspondientes
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${tokenCaptcha}`;

  // Enviar respuesta de la verificacion del captcha
  const respuesta = await fetch(url);
  const captchaValido = await respuesta.json();

  res.send(captchaValido);
}

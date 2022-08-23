import styles from "./contact.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import Spinner from "../Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const recaptchaRef = useRef();

  const [enviandoMail, setEnviandoMail] = useState(false);

  const notificaciones = (status) => {
    if (status === 200) {
      toast.success("Mensaje enviando exitosamente.", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Error al enviar el mensaje, por favor, intentelo de nuevo.", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section className={styles.contact} id="contactMe">
      {/* Notificaciones */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Header */}
      <header>
        <svg
          width="34"
          height="36"
          viewBox="0 0 34 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.6 0H3.4C1.5249 0 0 1.63363 0 3.64243V25.497C0 27.5058 1.5249 29.1395 3.4 29.1395H8.5V36L19.1709 29.1395H30.6C32.4751 29.1395 34 27.5058 34 25.497V3.64243C34 1.63363 32.4751 0 30.6 0ZM30.6 25.497H18.2291L11.9 29.5638V25.497H3.4V3.64243H30.6V25.497Z"
            fill="#2342E2"
          />
        </svg>

        <h2>Contact me</h2>
      </header>

      {/* Contact form */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        // Validate
        validate={(values) => {
          const errors = {};

          const regexMail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          // falta nombre
          if (!values.name) {
            errors.name = "*You must enter your name";
          }
          // falta email
          if (!values.email) {
            errors.email = "*You must enter your email";
          }
          // email invalido
          if (values.email && !regexMail.test(values.email)) {
            errors.email = "*You must enter a valid email";
          }
          // falta asunto
          if (!values.subject) {
            errors.subject = "*You must enter a subject";
          }
          // falta mensaje
          if (!values.message) {
            errors.message = "*You must enter a message";
          }

          return errors;
        }}
        // Submit
        onSubmit={async (values, { resetForm }) => {
          setEnviandoMail(true);

          const token = await recaptchaRef.current.executeAsync();

          // Validar resultado del captcha
          const res = await fetch("/api/verificarCaptcha", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            // Verificar el captcha
            body: JSON.stringify({ tokenCaptcha: token }),
          });

          const captchaValido = await res.json();

          // Captcha valido
          if (captchaValido.success) {

            const resMail = await fetch("/api/emailContacto", {
              method: "POST",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
              // Datos para el mail
              body: JSON.stringify({ datos: values }),
            });

            const statusMail = await resMail.json();

            if(statusMail.status === 200){
              // Mail enviado correctamente
              notificaciones(200)
            }else{
              // No se pudo enviar el mail
              notificaciones(400)
            }
          } else {
            // Captcha invalido
            notificaciones(400)
          }

          recaptchaRef.current.reset();
          resetForm();
          setEnviandoMail(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.formularioContacto}>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY}
              className={styles.captcha}
            />
            {/* Full name */}
            <div
              className={
                errors.name && touched.name
                  ? [styles.field, styles.error].join(" ")
                  : styles.field
              }
            >
              <Field type="text" name="name" />
              <label>Full name *</label>
            </div>
            <ErrorMessage
              name="name"
              component="span"
              className={styles.errorMessage}
            />
            {/* Email */}
            <div
              className={
                errors.email && touched.email
                  ? [styles.field, styles.error].join(" ")
                  : styles.field
              }
            >
              <Field type="email" name="email" />
              <label>Email address *</label>
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className={styles.errorMessage}
            />
            {/* Subject */}
            <div
              className={
                errors.subject && touched.subject
                  ? [styles.field, styles.error].join(" ")
                  : styles.field
              }
            >
              <Field type="text" name="subject" />
              <label>Subject *</label>
            </div>
            <ErrorMessage
              name="subject"
              component="span"
              className={styles.errorMessage}
            />
            {/* Message */}
            <div
              className={
                errors.message && touched.message
                  ? [styles.field, styles.error].join(" ")
                  : styles.field
              }
            >
              <Field as="textarea" name="message" />
              <label>Message *</label>
            </div>
            <ErrorMessage
              name="message"
              component="span"
              className={styles.errorMessage}
            />
            {/* Enviar */}
            <button
              type="submit"
              disabled={enviandoMail}
              className={
                enviandoMail
                  ? [styles.btnEnviar, styles.enviandoMail].join(" ")
                  : styles.btnEnviar
              }
            >
              Send
              {enviandoMail ? (
                <Spinner />
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5464 6.79556L1.12629 0.574011C0.991159 0.511368 0.840758 0.487775 0.692556 0.505971C0.544354 0.524167 0.404432 0.583407 0.289038 0.67681C0.173644 0.770213 0.0875127 0.893948 0.0406458 1.03365C-0.0062212 1.17334 -0.011901 1.32327 0.0242662 1.46603L0.981042 5.23706L7.10535 7.49937L0.981042 9.76168L0.0242662 13.5327C-0.0125815 13.6756 -0.00737573 13.8258 0.0392744 13.9659C0.0859246 14.1059 0.17209 14.23 0.287692 14.3235C0.403295 14.4171 0.543553 14.4763 0.692061 14.4942C0.840569 14.5122 0.991187 14.4881 1.12629 14.4247L14.5464 8.20318C14.682 8.14038 14.7967 8.04084 14.877 7.91621C14.9573 7.79158 15 7.647 15 7.49937C15 7.35174 14.9573 7.20716 14.877 7.08253C14.7967 6.9579 14.682 6.85836 14.5464 6.79556Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;

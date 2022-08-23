import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <a href="#home" className={styles.logo}>
          Santiago del Río
        </a>
        <ul>
          <li>
            <a
              href="https://github.com/Santiago-delRio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.61538 23.2904C3.46154 25.1452 3.46154 20.1992 1 19.5809M18.2308 27V22.2147C18.2769 21.6251 18.1976 21.0323 17.9982 20.4759C17.7987 19.9194 17.4836 19.412 17.0738 18.9874C20.9385 18.5546 25 17.0831 25 10.3317C24.9997 8.60535 24.3387 6.94517 23.1538 5.6948C23.7149 4.1844 23.6752 2.51491 23.0431 1.03313C23.0431 1.03313 21.5908 0.600349 18.2308 2.86318C15.4099 2.09508 12.4363 2.09508 9.61538 2.86318C6.25538 0.600349 4.80308 1.03313 4.80308 1.03313C4.17092 2.51491 4.13125 4.1844 4.69231 5.6948C3.49862 6.95444 2.83695 8.62963 2.84615 10.3688C2.84615 17.0708 6.90769 18.5422 10.7723 19.0245C10.3674 19.4448 10.0551 19.9462 9.85576 20.4958C9.65644 21.0455 9.57453 21.6311 9.61538 22.2147V27"
                  stroke="#CAC7D1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* github.com/Santiago-delRio */}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/santiago-delrio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.88448 5.7788C4.47754 5.7788 5.76896 4.48518 5.76896 2.8894C5.76896 1.29363 4.47754 0 2.88448 0C1.29143 0 0 1.29363 0 2.8894C0 4.48518 1.29143 5.7788 2.88448 5.7788Z"
                  fill="#CAC7D1"
                />
                <path
                  d="M8.49261 7.96831V23.9987H13.4614V16.0713C13.4614 13.9795 13.8542 11.9538 16.4434 11.9538C18.997 11.9538 19.0286 14.3453 19.0286 16.2034V24H24V15.209C24 10.8907 23.0719 7.57214 18.0333 7.57214C15.6142 7.57214 13.9926 8.90195 13.3295 10.1604H13.2623V7.96831H8.49261ZM0.395496 7.96831H5.37215V23.9987H0.395496V7.96831Z"
                  fill="#CAC7D1"
                />
              </svg>
              {/* linkedin.com/in/santiago-delrio/ */}
            </a>
          </li>
          <li>
            <a href="mailto:santiago.delrio313@gmail.com">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6 0H2.4C1.0764 0 0 1.12125 0 2.5V17.5C0 18.8787 1.0764 20 2.4 20H21.6C22.9236 20 24 18.8787 24 17.5V2.5C24 1.12125 22.9236 0 21.6 0ZM21.6 2.5V3.13875L12 10.9175L2.4 3.14V2.5H21.6ZM2.4 17.5V6.305L11.2632 13.4862C11.4733 13.6582 11.7328 13.7516 12 13.7516C12.2672 13.7516 12.5267 13.6582 12.7368 13.4862L21.6 6.305L21.6024 17.5H2.4Z"
                  fill="#CAC7D1"
                />
              </svg>
              {/* santiago.delrio313@gmail.com */}
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import styles from "./workCard.module.scss";

const WorkCard = ({ data }) => {
  return (
    <article className={styles.workCard}>
      {/* Columna izquierda escritorio */}
      <div className={styles.colIzquierda}>
        {/* fecha */}
        <span className={styles.fecha}>{data.date}</span>
        {/* Github */}
        {data.sourceCode && (
          <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
            Source code
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.854 0.5C5.854 0.367392 5.80132 0.240215 5.70755 0.146447C5.61379 0.0526784 5.48661 0 5.354 0H0.854C0.721392 0 0.594215 0.0526784 0.500447 0.146447C0.406678 0.240215 0.354 0.367392 0.354 0.5C0.354 0.632608 0.406678 0.759785 0.500447 0.853553C0.594215 0.947322 0.721392 1 0.854 1H4.854V5C4.854 5.13261 4.90668 5.25979 5.00045 5.35355C5.09421 5.44732 5.22139 5.5 5.354 5.5C5.48661 5.5 5.61379 5.44732 5.70755 5.35355C5.80132 5.25979 5.854 5.13261 5.854 5V0.5ZM0.708 5.854L5.708 0.854L5 0.146L0 5.146L0.708 5.854Z"
                fill="#CAC7D1"
              />
            </svg>
          </a>
        )}
        {/* Link pagina*/}
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          View site
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.854 0.5C5.854 0.367392 5.80132 0.240215 5.70755 0.146447C5.61379 0.0526784 5.48661 0 5.354 0H0.854C0.721392 0 0.594215 0.0526784 0.500447 0.146447C0.406678 0.240215 0.354 0.367392 0.354 0.5C0.354 0.632608 0.406678 0.759785 0.500447 0.853553C0.594215 0.947322 0.721392 1 0.854 1H4.854V5C4.854 5.13261 4.90668 5.25979 5.00045 5.35355C5.09421 5.44732 5.22139 5.5 5.354 5.5C5.48661 5.5 5.61379 5.44732 5.70755 5.35355C5.80132 5.25979 5.854 5.13261 5.854 5V0.5ZM0.708 5.854L5.708 0.854L5 0.146L0 5.146L0.708 5.854Z"
              fill="#CAC7D1"
            />
          </svg>
        </a>
      </div>

      {/* Columna derecha escritorio */}
      <div className={styles.colDerecha}>
        {/* titulo */}
        <h3>{data.title}</h3>
        {/* fecha */}
        <span className={styles.fecha}>{data.date}</span>
        {/* descripcion */}
        <p>{data.description}</p>
        {/* portada */}
        <a className={styles.portada} href={data.link} target="_blank" rel="noopener noreferrer">
          <div>
            <Image
              src={data.thumbnail}
              alt={data.title}
              layout={"fill"}
              objectFit={"cover"}
              quality="80"
              sizes="90vw"
            />
          </div>
        </a>
        {/* tecnologias */}
        <span className={styles.tecnologias}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10H16V12H10V10ZM4.293 5.707L6.586 8L4.293 10.293L5.707 11.707L9.414 8L5.707 4.293L4.293 5.707Z"
              fill="#CAC7D1"
              fillOpacity="0.8"
            />
            <path
              d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM2 14V2H18L18.002 14H2Z"
              fill="#CAC7D1"
              fillOpacity="0.8"
            />
          </svg>

          {data.technologies}
        </span>
        {/* links */}
        <div className={styles.links}>
          {/* Github */}
          {data.sourceCode && (
            <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.17949 18.1465C3.05128 19.5732 3.05128 15.7686 1 15.293M15.359 21V17.319C15.3974 16.8654 15.3314 16.4095 15.1651 15.9814C14.9989 15.5534 14.7363 15.1631 14.3949 14.8364C17.6154 14.5035 21 13.3716 21 8.17826C20.9997 6.85027 20.4489 5.57321 19.4615 4.61139C19.9291 3.44954 19.896 2.16532 19.3692 1.02548C19.3692 1.02548 18.159 0.692576 15.359 2.43321C13.0082 1.84237 10.5302 1.84237 8.17949 2.43321C5.37949 0.692576 4.16923 1.02548 4.16923 1.02548C3.64244 2.16532 3.60938 3.44954 4.07692 4.61139C3.08218 5.58034 2.53079 6.86895 2.53846 8.2068C2.53846 13.3621 5.92308 14.494 9.14359 14.865C8.80615 15.1883 8.54591 15.574 8.3798 15.9968C8.2137 16.4196 8.14544 16.8701 8.17949 17.319V21"
                  stroke="#A29DAF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}

          {/* Link pagina*/}
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6667 9.33333L21 1M15.4444 1H21V6.55556M21 13.2222V18.7778C21 19.3671 20.7659 19.9324 20.3491 20.3491C19.9324 20.7659 19.3671 21 18.7778 21H3.22222C2.63285 21 2.06762 20.7659 1.65087 20.3491C1.23413 19.9324 1 19.3671 1 18.7778V3.22222C1 2.63285 1.23413 2.06762 1.65087 1.65087C2.06762 1.23413 2.63285 1 3.22222 1H8.77778"
                stroke="#A29DAF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;

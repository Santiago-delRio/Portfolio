import styles from "./myWork.module.scss";
import WorkCard from "../WorkCard";

const myWorkData = [
  {
    id: 1,
    title: "Revista Country Magazine",
    date: "June 2022",
    description:
      "Website redesign for a magazine using Next.js. I migrated the old data to a new MySQL database, and I integrated a new, more modern and intuitive CMS to allow easy management of the website's content. Significant improvements in load times over the previous Joomla website ",
    thumbnail: "/images/magazineMockup.jpg",
    technologies: "Next.js, Node.js, MySQL",
    sourceCode: null,
    link: "https://countrymagazine.com.ar/",
  },
  {
    id: 2,
    title: "Parroquia Santa Juana de Arco",
    date: "November 2021",
    description:
      "Website design and development for a parish that enables easy access to information and related news. Integrated a CMS using Node.js and MySQL to allow the client to manage the website's content.",
    thumbnail: "/images/parroquiaMockup.jpg",
    technologies: "Next.js, Node.js, MySQL",
    sourceCode: "https://github.com/Santiago-delRio/Parroquia-Frontend",
    link: "https://parroquia.vercel.app/",
  },
  {
    id: 3,
    title: "Veoteve",
    date: "October 2021",
    description:
      "Developed and designed a website for a TV channel that enables easy access to news, past broadcasts, and relevant information about the channel. Integrated a CMS using Node.js and MySQL to allow the client to manage the website's content.",
    thumbnail: "/images/veoteveMockup.jpg",
    technologies: "Next.js, Node.js, MySQL",
    sourceCode: "https://github.com/Santiago-delRio/veoteveFrontend",
    link: "https://canal-de-television.vercel.app/",
  },
];

const MyWork = () => {
  return (
    <section className={styles.myWork} id="myWork">
      <header>
        <svg
          width="34"
          height="36"
          viewBox="0 0 34 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34 10.7977C33.9997 10.4765 33.9182 10.1611 33.7639 9.88449C33.6097 9.60784 33.3883 9.37994 33.1228 9.22445L17.7851 0.224118C17.533 0.0770992 17.25 0 16.9622 0C16.6745 0 16.3914 0.0770992 16.1394 0.224118L0.8765 9.15245C0.611352 9.30791 0.390276 9.5356 0.236168 9.81194C0.0820593 10.0883 0.00052267 10.4032 2.50449e-06 10.7241C-0.000517661 11.045 0.0799972 11.3603 0.233209 11.6372C0.38642 11.9141 0.606757 12.1425 0.8714 12.299L16.2091 21.3713C16.4616 21.5215 16.7463 21.6006 17.036 21.6009C17.3256 21.6012 17.6105 21.5228 17.8633 21.3731L33.1262 12.3728C33.3913 12.2167 33.6121 11.9883 33.7658 11.7113C33.9195 11.4344 34.0003 11.1189 34 10.7977ZM17.0387 17.737L5.20139 10.7365L16.9605 3.85665L28.7996 10.8031L17.0387 17.737Z"
            fill="#2342E2"
          />
          <path
            d="M31.4754 16.4265L16.9996 24.9408L2.52383 16.4265L0.873099 19.573L16.1734 28.5733C16.4259 28.7218 16.71 28.7997 16.9988 28.7997C17.2876 28.7997 17.5717 28.7218 17.8242 28.5733L33.1245 19.573L31.4754 16.4265Z"
            fill="#2342E2"
          />
          <path
            d="M31.4754 23.6268L16.9996 32.1411L2.52383 23.6268L0.873099 26.7733L16.1734 35.7736C16.4259 35.9221 16.71 36 16.9988 36C17.2876 36 17.5717 35.9221 17.8242 35.7736L33.1245 26.7733L31.4754 23.6268Z"
            fill="#2342E2"
          />
        </svg>

        <h2>My work</h2>
      </header>
      {myWorkData?.map((work) => (
        <WorkCard key={work.id} data={work} />
      ))}
    </section>
  );
};

export default MyWork;

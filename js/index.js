const technologies = [
  {
    name: "NestJS",
    logo: "./imgs/nestjs.svg",
    alt: "NestJS Logo",
  },
  {
    name: "Node JS",
    logo: "./imgs/nodejs-logo.png",
    alt: "Node Logo",
    class: "node-logo",
  },
  {
    name: "React JS",
    logo: "./imgs/react-logo.png",
    alt: "React Logo",
    class: "react-logo",
  },
  {
    name: "NextJS",
    logo: "./imgs/nextjs-logo.png",
    alt: "NextJS Logo",
  },
  {
    name: "TypeScript",
    logo: "./imgs/ts-logo.png",
    alt: "TypeScript Logo",
  },
  { name: "JavaScript", logo: "./imgs/js-logo.png", alt: "JS LOGO" },
  { name: "TypeORM", logo: "./imgs/typeorm-logo.png", alt: "TypeORM Logo" },
  {
    name: "Postgres",
    logo: "./imgs/postgresql.svg",
    alt: "PostgreSQL Logo",
  },
  { name: "MongoDB", logo: "./imgs/mongodb-logo.png", alt: "MongoDB Logo" },
  { name: "AWS", logo: "./imgs/aws-logo.png", alt: "AWS Logo" },
  { name: "HTML", logo: "./imgs/html-logo.png", alt: "HTML LOGO" },
  { name: "CSS", logo: "./imgs/css-logo.png", alt: "CSS LOGO" },
  { name: "Git", logo: "./imgs/git.svg", alt: "Git Logo" },
  { name: "GitHub", logo: "./imgs/github.svg", alt: "GitHub Logo" },
  { name: "Cypress", logo: "./imgs/cypress-logo.png", alt: "Cypress Logo" },
  { name: "Jest", logo: "./imgs/jest.svg", alt: "Jest Logo" },
  { name: "Docker", logo: "./imgs/docker.svg", alt: "Docker Logo" },
  { name: "Tailwind", logo: "./imgs/tailwind-css.svg", alt: "Tailwind Logo" },
];

const cardsContainer = document.querySelector(".cards-container");

const createCards = () => {
  technologies.forEach((tech) => {
    const card = document.createElement("div");
    card.classList.add("card", "tech-card");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("card-img-container");

    const img = document.createElement("img");
    img.src = tech.logo;
    img.alt = tech.alt;

    if (tech.class) img.classList.add(tech.class);

    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    const name = document.createElement("p");
    name.textContent = tech.name;

    card.appendChild(name);
    cardsContainer.appendChild(card);
  });
};

createCards();

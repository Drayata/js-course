import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML",
    level: "advance",
    color: "orange",
  },
  {
    skill: "CSS",
    level: "intermidiate",
    color: "blue",
  },
  {
    skill: "Javascript",
    level: "intermidiate",
    color: "yellow",
  },
  {
    skill: "Git & Github",
    level: "advance",
    color: "grey",
  },
  {
    skill: "React",
    level: "beginner",
    color: "lightblue",
  },
  {
    skill: "C++",
    level: "beginner",
    color: "darkblue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./avatar.webp" />;
}

function Intro() {
  return (
    <div>
      <h1>Indra Surya Adinata</h1>
      <p>
        Fullstack web developer and teacher at Udemy. Nama saya Indra Surya
        Adinata, biasa dipanggil Indra atau Drayata. Saya suka ngoding karena
        saya suka membuat sesuatu apalagi yang bilek.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillsObj={skill} />
      ))}
    </ul>
  );
}

function Skill({ skillsObj }) {
  return (
    <li className="skill" style={{ backgroundColor: `${skillsObj.color}` }}>
      {skillsObj.skill}
      {skillsObj.level === "beginner" && " 👶"}
      {skillsObj.level === "intermidiate" && " 👍"}
      {skillsObj.level === "advance" && " 💪"}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

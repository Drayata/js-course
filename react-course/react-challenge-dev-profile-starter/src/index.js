import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skill="HTML" bg="orange" />
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
      <Skill skill="HTML" bg="orange" />
      <Skill skill="CSS" bg="blue" />
      <Skill skill="Javascript" bg="yellow" />
      <Skill skill="Git & Github" bg="grey" />
      <Skill skill="React" bg="lightblue" />
      <Skill skill="C++" bg="darkblue" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: `${props.bg}` }}>
      {props.skill}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

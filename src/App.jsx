import { useState } from "react";
import "./styles/App.css";
import Section from "./components/form/Section";
import cvData from "./js/cvData";
import CV from "./components/cv/CV";
import { createFormSections } from "./js/formSections";

function App() {
  const [cv, setCV] = useState(cvData);
  const [showCV, setShowCV] = useState(false);

  const formSections = createFormSections(cv, handleChange);

  function handleChange(section, field, value) {
    setCV((currentCV) => ({
      ...currentCV,
      [section]: {
        ...currentCV[section],
        [field]: value,
      },
    }));
  }

  return showCV ? (
    <>
      <CV data={cv} />
      <div className="btns">
        <button type="button" onClick={() => setShowCV(false)}>
          Edit
        </button>
        <button type="button" onClick={() => window.print()}>
          Save/Print
        </button>
      </div>
    </>
  ) : (
    <form>
      <h1>CV Generator</h1>
      <Section
        className="section"
        heading={formSections.general.heading}
        inputs={formSections.general.inputs}
      />
      <Section
        className="section"
        heading={formSections.education.heading}
        inputs={formSections.education.inputs}
      />
      <Section
        className="section"
        heading={formSections.experience.heading}
        inputs={formSections.experience.inputs}
      />
      <button type="button" onClick={() => setShowCV(true)}>
        Generate CV
      </button>
    </form>
  );
}

export default App;

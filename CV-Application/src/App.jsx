import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Section from './components/Section'

function App() {
  const genHeading = "General Information";
  const genInputs = [
    {id: "name", label: "Name: ", type: "text", placeholder: "Tom Taylor"},
    {id: "email", label: "Email: ", type: "email", placeholder: "tom@taylor.gmail.com"},
    {id: "phone", label: "Phone: ", type: "phone" ,placeholder: "0123456789"},
  ];

  const eduHeading = "Educational Experience";
  const eduInputs = [
    {id: "school-name", label: "School Name: ", type: "text", placeholder:"Humboldt University of Berlin"},
    {id: "study-title", label: "Title Of Study: ", type: "text", placeholder: "Computer Science"},
    {id: "dos-f", label: "Date Of Study (from): ", type: "date"},
    {id: "dos-u", label: "Date Of Study (until): ", type: "date"},
  ];

  const praHeading = "Practical Experience";
  const praInputs = [
    {id: "company-name", label: "Company Name: ", type: "text", placeholder:"SAP"},
    {id: "pos-title", label: "Position Title: ", type: "text", placeholder: "Senior Software Developer"},
    {id: "main-resp", label: "Main Responsibility: ", type: "text", placeholder: "Project Management"},
    {id: "w-from", label: "Worked Here From: ", type: "date"},
    {id: "w-until", label: "Worked Here Until: ", type: "date"},
  ];


  return (
    <form>
      <h1>CV Application</h1>
      <Section class="section" heading={genHeading} inputs={genInputs}/>
      <Section class="section" heading={eduHeading} inputs={eduInputs}/>
      <Section class="section" heading={praHeading} inputs={praInputs}/>
      <button>Generate CV</button>
    </form>
  )
}

export default App

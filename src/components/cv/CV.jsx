import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

export default function CV({ data }) {
  return (
    <div className="cv">
      <h1>CV</h1>
      <Personal data={data.personal} />
      <hr/>
      <Education data={data.education} />
      <hr/>
      <Experience data={data.experience} />
    </div>
  );
}

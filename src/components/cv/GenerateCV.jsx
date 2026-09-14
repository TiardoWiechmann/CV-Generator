import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

export default function generateCV({ data }) {
  return (
    <div className="cv">
      <h1>CV</h1>
      <Personal data={data.personal} />
      <Education data={data.education} />
      <Experience data={data.experience} />
    </div>
  );
}

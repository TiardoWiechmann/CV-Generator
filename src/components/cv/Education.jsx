export default function Education({data}) {
    return (
        <div className="cv-section">
            <h2>Educational Experience</h2>
            <p><span>School Name:</span><span>{data.schoolName}</span></p>
            <p><span>Title Of Study:</span><span>{data.studyTitle}</span></p>
            <p><span>Date Of Study (from):</span><span>{data.dosF}</span></p>
            <p><span>Date Of Study (until):</span><span>{data.dosU}</span></p>
        </div>
    );
}

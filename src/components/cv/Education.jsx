export default function Education({data}) {
    return (
        <>
            <h2>Educational Experience</h2>
            <p>School Name: {data.schoolName}</p>
            <p>Title Of Study: {data.studyTitle}</p>
            <p>Date Of Study (from): {data.dosF}</p>
            <p>Date Of Study (until): {data.dosU}</p>
        </>
    );
}
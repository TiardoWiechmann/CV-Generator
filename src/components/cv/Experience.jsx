export default function Experience(data) {
    return (
        <>
            <h2>Practical Experience</h2>
            <p>Company Name: {data.companyName}</p>
            <p>Position Title: {data.posTitle}</p>
            <p>Worked Here From: {data.workedF}</p>
            <p>Worked Here Until: {data.workedU}</p>
        </>
    );
}
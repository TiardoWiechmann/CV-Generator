import formatDate from "../../js/formatDate";

export default function Experience({data}) {
    return (
        <div className="cv-section">
            <h2>Practical Experience</h2>
            <p><span>Company Name:</span><span>{data.companyName}</span></p>
            <p><span>Position Title:</span><span>{data.posTitle}</span></p>
            <p><span>Worked Here From:</span><span>{formatDate(data.workedF)}</span></p>
            <p><span>Worked Here Until:</span><span>{formatDate(data.workedU)}</span></p>
        </div>
    );
}

export default function Personal({data}) {
    return (
        <div className="cv-section">
            <h2>General Information</h2>
            <p><span>Name:</span><span>{data.name}</span></p>
            <p><span>Email:</span><span>{data.email}</span></p>
            <p><span>Phone:</span><span>{data.phone}</span></p>
            {data.image ? 
                <img src={URL.createObjectURL(data.image)} alt="profile"/>
                : null}
        </div>
    );
}

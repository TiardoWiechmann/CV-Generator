export default function Personal({data}) {
    return (
        <>
            <h2>General Information</h2>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            {/* TODO Image */}
        </>
    );
}
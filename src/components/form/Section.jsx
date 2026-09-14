export default function Section({heading, inputs}) {
    return (
        <div className="input-section">
            <h2>{heading}</h2>
            <div className="inputs">
                {inputs.map(input => (
                    <Input key={input.id} {...input}/>
                ))}
            </div>
        </div>
    );
}

function Input({placeholder=null, label, ...data}) {
    const selectedFile = data.type === "file" ? data.path : null;
    return (
        <div>
            <label htmlFor={data.id}>{label}</label>
            <input 
                {...data}
                placeholder={placeholder}
            />
             {selectedFile && (
                <p>Chosen File:{selectedFile.name}</p>
             )}
        </div>
    );
}

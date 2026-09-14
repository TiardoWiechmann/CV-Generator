export default function Section({heading, inputs}) {
    return (
        <div>
            <h2>{heading}</h2>
            <div className="general">
                {inputs.map(input => (
                    <Input key={input.id} {...input}/>
                ))}
            </div>
        </div>
    );
}

function Input({placeholder=null, label, accept="", ...data}) {
    return (
    <div>
        <label htmlFor={data.id}>{label}</label>
        <input 
            {...data}
            placeholder={placeholder}
            accept={accept}
        />
    </div>
    );
}

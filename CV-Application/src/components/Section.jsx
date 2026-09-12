import Input from "./Input";

export default function Section({heading, inputs}) {
    return (
        <div>
            <h2>{heading}</h2>
            <div class="general">
                {inputs.map(input => (
                    <Input id={input.id} type={input.type} label={input.label} placeholder={input.placeholder}/>
                ))}
            </div>
        </div>
    );
}

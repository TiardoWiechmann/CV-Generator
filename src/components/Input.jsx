import { useState } from "react";

export default function Input({id, type, label, placeholder=null}) {

    return (
    <div>
        <label for={id}>{label}</label>
        <input placeholder={placeholder} type={type} id={id}/>
    </div>
    );
}
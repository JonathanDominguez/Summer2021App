import { useState }from 'react'

const [valid, setValid] = useState("label-default");
const [validBottom, setValidBottom] = useState("bottom-border-default");
const [textInput, setTextInput] = useState('');

const handleClick = () => {
    if (textInput !== ''){
        setValid("label-valid");
        setValidBottom("bottom-border-valid");
    }
    else{
        setValid("label-invalid");
        setValidBottom("bottom-border-invalid");
    }
}

export default handleClick;
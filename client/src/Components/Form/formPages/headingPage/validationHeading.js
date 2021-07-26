export default function validatingInputs(values){
    
    let errors = {};
    // First name
    if (!values.firstName.trim()) {
        errors.firstName = 'invalid';
    }
    // Last name
    if (!values.lastName.trim()) {
        errors.lastName = 'invalid';
    }
    // Email
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'invalid';
    }
    // Phone number 
        // Phone number combination options
    const optionOne = /^\d{10}$/;
    const optionTwo = /^[(]+[\d{2}]+[)]+[ ]+[\d{2}]+[-]+[\d{3}]*$/;
    const optionThree = /^[(]+[\d{2}]+[)]+[\d{2}]+[-]+[\d{3}]*$/;
    const optionFour = /^[(]+[\d{2}]+[)]+[ ]+[\d{2}]+[ ]+[-]+[ ]+[\d{3}]*$/;

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Email required';
    } else if ((optionOne.test(values.phoneNumber)) || (optionTwo.test(values.phoneNumber)) || (optionThree.test(values.phoneNumber)) || (optionFour.test(values.phoneNumber))) {
        errors.phoneNumber = 'invalid';
    }

    return errors;
}



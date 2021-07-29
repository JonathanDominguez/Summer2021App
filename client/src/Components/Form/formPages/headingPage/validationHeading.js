export default function validatingInputs(values){
    
    let errors = {};
    // First name if nothing is entered 
    if (values.firstName.trim() === '') {
        errors.firstName = 'First name required';
    }
    // Last name if nothing is entered 
    if (values.lastName.trim() === '') {
        errors.lastName = 'Last name required';
    }
    // Email
    const emailOptionOne = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (values.usersEmail === '') {
        errors.usersEmail = 'Email required';
    } else if (!emailOptionOne.test(values.usersEmail)) {
        errors.usersEmail = 'Invalid Email';
    }
    // Phone number 
        // Phone number combination options
    const optionOne = /^\d{10}$/;
    // const optionTwo = /^[(]+[\d{2}]+[)]+[ ]+[\d{2}]+[-]+[\d{3}]*$/;
    // const optionThree = /^[(]+[\d{2}]+[)]+[\d{2}]+[-]+[\d{3}]*$/;
    // const optionFour = /^[(]+[\d{2}]+[)]+[ ]+[\d{2}]+[ ]+[-]+[ ]+[\d{3}]*$/;

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number required';
    } else if (!optionOne.test(values.phoneNumber)) {
        errors.phoneNumber = 'Phone number Invalid';
    }

    return errors;
}
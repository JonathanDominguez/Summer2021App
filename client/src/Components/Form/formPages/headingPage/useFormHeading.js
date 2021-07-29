import { useState, useEffect } from 'react';
import { UserContext } from '../../../progress-bar/validContext';


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        usersEmail: '',
        phoneNumber: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        // console.log(isSubmitting)
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                // console.log('error')
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values,  errors, isSubmitting };
    };

export default useForm;



// write your custom hook here to control your checkout form
import {useState} from 'react';

const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues)

    const handleChanges= (e) =>{
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }

    return[formValues, handleChanges] 
}
export default useForm;
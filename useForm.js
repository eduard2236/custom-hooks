import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [FormState, setFormState] = useState(initialForm);

    //se desestructura en estado para acceder a las propiedades declaradas 


    const onInputChange = ({target}) =>{
        const {name,value} = target;
        setFormState({
            ...FormState,
            [ name ]: value,
        });
        
    }
    const onResetForm = ()=>{
        setFormState(initialForm)
    }


  return {
    ...FormState,
    FormState,
    onInputChange,
    onResetForm
  }
}



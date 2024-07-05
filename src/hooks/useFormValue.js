import { useState } from 'react'

export const useFormValue = (intialState) => {
    const[state, setState] = useState(intialState)

    const handeleChange = (e) => {
        const{name,value} = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    };
      
    return {
      state,
      setState,
      handeleChange,
    };
}


import { useState } from "react"

export function useStateInput(initialState, initialErrors) {
    const [inputs, setInputs] = useState(initialState)
    const [errorsInput, setErrorsInput] = useState(initialErrors)
    function addValueInputs(key, value) {
        if (key !== null) {
            setInputs({
                ...inputs,
                [key]: value
            })
        } else {
            setInputs(value)
        }
    }

    function addError(key, value) {
        if (key !== null) {
            setErrorsInput({
                ...errorsInput,
                [key]: value
            })
        } else {
            setErrorsInput(value)
        }
    }

    return {
        inputs,
        errorsInput,
        addValueInputs,
        addError
    }
}


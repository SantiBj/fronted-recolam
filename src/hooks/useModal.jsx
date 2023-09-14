import { useState } from "react";

export function useModal(){
    const [ modal,setModal ] = useState(false)

    function closeModal(){
        setModal(false)
    }

    function openModal(){
        setModal(true)
    }

    return {
        modal,
        openModal,
        closeModal
    }
}
import translate from "translate"

export async function translateM(message) {
    try {
        const translation = await translate(message,{to:'es'})
        return translation
    } catch (error) {
        console.log(error)
        return message
    }
}
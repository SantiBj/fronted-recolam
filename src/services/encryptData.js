import CryptoJS from "crypto-js"

// se busca el dato a reemplazar con regex
export function encrypt(data) {
    const secretKey = "recolam"
    const encryptData = CryptoJS.AES.encrypt(String(data), secretKey).toString()
    const endEncrypt = encryptData.replace(/\//g, '_')
    return endEncrypt
}

export function decrypt(dataEncrypt) {
    const dataReceived = dataEncrypt.replace(/_/g, "/")
    const secretKey = "recolam"
    const decryptData = CryptoJS.AES.decrypt(dataReceived, secretKey).toString(CryptoJS.enc.Utf8)
    return decryptData
}


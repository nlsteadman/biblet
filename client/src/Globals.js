// export const baseUrl = "http://localhost:3000";
export const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

export const getToken = () => {
    return {
        'Authorization': `bearer ${ localStorage.getItem('jwt') }`
    }
}
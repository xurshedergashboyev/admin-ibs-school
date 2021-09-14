export const getHeader = () => {
    return ({
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
    })
}
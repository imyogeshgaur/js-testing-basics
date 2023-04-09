const { default: axios } = require("axios")

const sampleGetAPI = async () => {
    const response = await axios.get(`http://localhost:4000`)
    const users = await response.data;
    return users
}

const samplePostAPI = async (data) => {
    const response = await axios.post("http://localhost:4000/signup", {
        ...data
    })
    const user = await response.data;
    return user;
}

const sampleUpdateAPI = async (email, data) => {
    const response = await axios.put(`http://localhost:4000/update/${email}`, {
        ...data
    })
    const message = await response.data;
    return message;
}
const sampleDeleteAPI = async (email) => {
    const response = await axios.delete(`http://localhost:4000/update/${email}`)
    const message = await response.data;
    return message;
}



module.exports = { sampleGetAPI, samplePostAPI, sampleUpdateAPI, sampleDeleteAPI }



const { default: axios } = require("axios")

const sampleGetAPi = async(username)=>{
    const response = await axios.get(`https://api.github.com/users/${username}`)
    const users = await response.data;
    return users
}

module.exports = {sampleGetAPi}



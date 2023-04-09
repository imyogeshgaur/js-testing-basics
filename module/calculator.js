const addition = (array)=>{
    return array.reduce((a,b)=>a+b)
}
const subtraction = (array)=>{
    return array.reduce((a,b)=>Math.abs(a - b))
}
const multiplication = (array)=>{
    return array.reduce((a,b)=>a * b)
}

module.exports =  {addition,subtraction,multiplication};
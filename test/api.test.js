const { sampleGetAPI, samplePostAPI, sampleUpdateAPI, sampleDeleteAPI } = require("../module/api")

test("Testing Get API ", async () => {
    try {
        const data = await sampleGetAPI()
        expect(data)
    } catch (error) {
        expect(error)
    }
})

test("Testing Post API", async () => {
    try {
        const data = await samplePostAPI({
            userName: "imrameshgaur",
            email: 'ramesh@gmail.com',
            password: 'abc@123'
        });
        console.log(data)
        expect(data)
    } catch (error) {
        expect(error)
    }
})

test("Testing Update API", async () => {
    try {
        const data = await sampleUpdateAPI("ramesh@gmail.com",{
            password: 'abc@1234'
        });
        expect(data)
    } catch (error) {
        expect(error)
    }
})

test("Testing Delete API", async () => {
    try {
        const data = await sampleDeleteAPI("ramesh@gmail.com");
        expect(data)
    } catch (error) {
        expect(error)
    }
})
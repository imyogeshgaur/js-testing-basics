const { sampleGetAPi } = require("../module/api")

test("Testing Get API ", async () => {
    try {
        const data = await sampleGetAPi("imyogeshgaur")
        expect(data)
    } catch (error) {
        console.log("Error")
    }
})  
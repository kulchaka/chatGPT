import cors from "cors"
import express from "express"
import OpenAI from "openai"

const app = express()
const port = 3000

const openAi = new OpenAI({
  apiKey: "sk-proj-3Zfwwbbsb0nu6UrnRMPjT3BlbkFJI5KiyOF2dtx8mIvNihLt",
})

app.use(cors())

app.post("/data", async (req, res) => {
  try {
    const chatCompletion = await openAi.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    })
    console.log("💡 ~ app.post ~ chatCompletion:", chatCompletion)
    res.json(chatCompletion)
  } catch (error) {
    console.error("Error:", error)
    res.status(500).send("Error processing request")
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

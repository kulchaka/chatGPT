import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import OpenAI from "openai"

dotenv.config()
const app = express()
const port = 3000

const openAi = new OpenAI({
  apiKey: process.env["API_KEY"],
})

app.use(cors())
app.use(express.json())

app.post("/data", async (req, res) => {
  const { content } = req.body.message
  try {
    const chatCompletion = await openAi.chat.completions.create({
      messages: [{ role: "user", content }],
      model: "gpt-3.5-turbo",
    })
    res.json(chatCompletion.choices[0].message)
  } catch (error) {
    console.error("Error:", error)
    res.status(500).send("Error processing request")
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

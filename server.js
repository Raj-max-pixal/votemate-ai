import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;

app.post("/chat", async (req, res) => {
const message = req.body.message;

try {
const response = await fetch(
`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
contents: [{ parts: [{ text: message }] }]
})
}
);

```
const data = await response.json();

res.json({
  reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply"
});
```

} catch (err) {
res.status(500).json({ error: "AI failed" });
}
});

app.listen(3000, () => console.log("🔥 Server running on 3000"));

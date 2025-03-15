import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey=import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });






export  async function getAiPreparedRecipe(ingredients)  {
    const prompt = `You are a professional chef. Generate a delicious recipe based on the following ingredients: ${ingredients} do not add more than 3 ingredients.
    The recipe should follow healthy.
    It should serve 2 people and take approximately 60 or less minutes to prepare.
    Provide a step-by-step cooking guide, a list of additional required ingredients (if needed), and a brief description of the dish.
    always follow this template
    - Title
    - Description
    - Ingredients
    - any important warnings and note if needed provide title in large heading format `;
    const result = await model.generateContent(prompt);
    return result.response.text()
}



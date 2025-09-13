import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAehPiSlaGCrxeAZmTXbv_IORCEFLWTGoM");

export const askGemini = async ({ question, context, pdfAnswer }) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  console.log("text", context);
  const prompt = `
    PDF Context: """${context}"""
    
    Initial PDF Answer: """${pdfAnswer || "No direct answer found"}"""
    
    User Question: ${question}
    
    Instructions:
    1. If the PDF answer is correct but verbose, summarize it
    2. If the PDF answer is incomplete, enhance it using PDF context
    3. If no answer exists, use PDF context to answer the question
    4. If PDF context is insufficient, respond with "Insufficient information / Ask selected document related question"
    5. Respond in 1-2 concise sentences
    6. Maintain original facts exactly
    7. Do not fabricate any information
    8. Do not add any disclaimers or apologies
    9. Always respond as simple, clear, and direct

  `;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to get AI response";
  }
};

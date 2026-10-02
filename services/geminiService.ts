
import { GoogleGenAI } from "@google/genai";
import { NECINA_SYSTEM_PROMPT } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private isInitialized = false;

  private getAI() {
    if (this.isInitialized) return this.ai;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (apiKey) {
      try {
        this.ai = new GoogleGenAI({ apiKey });
      } catch (error) {
        console.error("Failed to initialize GoogleGenAI:", error);
      }
    } else {
      console.warn("VITE_GEMINI_API_KEY is missing. AI Assistant will be disabled.");
    }

    this.isInitialized = true;
    return this.ai;
  }

  async getChatResponse(message: string, history: { role: string; content: string }[]) {
    const ai = this.getAI();
    if (!ai) {
      return "The AI assistant is currently unavailable as it requires a valid API key. Please check the configuration.";
    }

    try {
      // Map history roles to Gemini format: 'user' or 'model'
      const contents = history.map(h => ({
        role: h.role === 'bot' ? 'model' : 'user',
        parts: [{ text: h.content }]
      }));

      // Add the current user message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: NECINA_SYSTEM_PROMPT,
          temperature: 0.7,
        }
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An error occurred while connecting to the AI assistant. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();

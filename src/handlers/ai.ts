import { Message } from "whatsapp-web.js";
import * as cli from "../cli/ui";

const handleMessageAI = async (message: Message, prompt: string) => {
	try {
		cli.print(`[AI] Received prompt from ${message.from}: ${prompt}`);

		const start = Date.now();

		// Check if we have a conversation with the user
		let response: {answer: string} = { answer: "Hello! How can I help you today?" };
		
		//TODO: Send prompt to AI.

		const end = Date.now() - start;

		cli.print(`[AI] Answer to ${message.from}: ${response.answer}  | AI request took ${end}ms)`);
		message.reply(response.answer);
	} catch (error: any) {
		console.error("An error occured", error);
		message.reply("An error occured, please contact the administrator. (" + error.message + ")");
	}
};

export { handleMessageAI };

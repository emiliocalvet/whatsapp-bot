import { Message } from "whatsapp-web.js";
import * as cli from "../cli/ui";

const handleMessageAI = async (message: Message, prompt: string) => {
	try {
		cli.print(`[AI] Received prompt from ${message.from}: ${prompt}`);

		const start = Date.now();
		
		const res = await fetch(`https://da69-2804-29b8-50f0-110f-1568-ec8a-9d83-6fce.ngrok-free.app/questions/${prompt}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			// body: JSON.stringify({ prompt })
		});

		cli.print(`[AI] Response from model: ${res.json()}`);
		
		let response: {answer: string} = await res.json();

		const end = Date.now() - start;

		cli.print(`[AI] Answer to ${message.from}: ${response.answer}  | AI request took ${end}ms)`);
		message.reply(response.answer);
	} catch (error: any) {
		console.error("An error occured", error);
		message.reply("An error occured, please contact the administrator. (" + error.message + ")");
	}
};

export { handleMessageAI };

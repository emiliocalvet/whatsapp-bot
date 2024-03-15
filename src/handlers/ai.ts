import { Message } from "whatsapp-web.js";
import * as cli from "../cli/ui";
import config from "../config";

const handleMessageAI = async (message: Message, prompt: string) => {
	try {
		cli.print(`[AI] Received prompt from ${message.from}: ${prompt}`);

		const start = Date.now();
		
		const res = await fetch(`${config.aiUrl}/questions/${prompt}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			// body: JSON.stringify({ prompt })
		});

		const response:string = await res.text();

		const end = Date.now() - start;

		cli.print(`[AI] Answer to ${message.from}: ${response}  | AI request took ${end}ms)`);
		message.reply(response);
	} catch (error: any) {
		console.error("An error occured", error);
		message.reply("An error occured, please contact the administrator. (" + error.message + ")");
	}
};

export { handleMessageAI };

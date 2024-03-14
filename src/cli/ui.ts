import color from "picocolors";

export const print = (text: string) => {
	console.log(color.green("◇") + "  " + text);
};

export const printError = (text: string) => {
	console.log(color.red("◇") + "  " + text);
};

export const printIntro = () => {
	console.log("");
	console.log(color.bgCyan(color.white(" Whatsapp AI Bot ")));
	console.log("|-------------------------------------------------------------------------------------------------|");
	console.log("|    Bot for WhatsApp that intercepts messages and generates intelligent responses based on AI    |");
	console.log("|-------------------------------------------------------------------------------------------------|");
	console.log("");
};

export const printQRCode = (qr: string) => {
	console.log(qr);
	console.log("Scan the QR code above to login to Whatsapp Web...");
};

export const printLoading = () => {
	console.log("Loading...");
};

export const printAuthenticated = () => {
	console.log("Authenticated, session started!");
};

export const printAuthenticationFailure = () => {
	console.log("Authentication failed!");
};

export const printInstructions = () => {
	console.log("");
	console.log("The bot is ready to use.");
	console.log("To get started, send a message to the bot with the prompt you want to use.");
	console.log("Use the prefix '!ia' if configured that way.");
};

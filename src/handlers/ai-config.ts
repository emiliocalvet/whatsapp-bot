import { IAiConfig } from "../types/ai-config";

let aiConfig: IAiConfig = { commandsMap: {} };

export function getConfig(target: string, type: string): any {
	if (aiConfig.commandsMap[target] && aiConfig.commandsMap[target][type]) {
		if (typeof aiConfig.commandsMap[target][type].data === "function") {
			return aiConfig.commandsMap[target][type].data();
		}
		return aiConfig.commandsMap[target][type].data;
	}
	return aiConfig[target][type];
}

export { aiConfig };

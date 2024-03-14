import process from "process";
import dotenv from "dotenv";

dotenv.config();

// Config Interface
interface IConfig {
	// Prefix
	prefixEnabled: boolean;
	prefixSkippedForMe: boolean;
	aiPrefix: string;

	// Groupchats
	groupchatsEnabled: boolean;

	// Voice transcription & Text-to-Speech
	transcriptionEnabled: boolean;
}

// Config
export const config: IConfig = {
	// Prefix
	prefixEnabled: getEnvBooleanWithDefault("PREFIX_ENABLED", true), // Default: true
	prefixSkippedForMe: getEnvBooleanWithDefault("PREFIX_SKIPPED_FOR_ME", true), // Default: true
	aiPrefix: process.env.AI_PREFIX || "!ai", // Default: !ai

	// Groupchats
	groupchatsEnabled: getEnvBooleanWithDefault("GROUPCHATS_ENABLED", false), // Default: false

	// Transcription
	transcriptionEnabled: getEnvBooleanWithDefault("TRANSCRIPTION_ENABLED", false), // Default: false
};

/**
 * Get an environment variable as a boolean with a default value
 * @param key The environment variable key
 * @param defaultValue The default value
 * @returns The value of the environment variable or the default value
 */
function getEnvBooleanWithDefault(key: string, defaultValue: boolean): boolean {
	const envValue = process.env[key]?.toLowerCase();
	if (envValue == undefined || envValue == "") {
		return defaultValue;
	}

	return envValue == "true";
}

export default config;

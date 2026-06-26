'use strict';
/**
 * Generates a Base64-encoded JSON string for the `X-Context-Properties` header.
 * This header is used by Discord to provide additional context for interactions
 * (e.g., slash commands, message components). The structure mirrors what the
 * official client sends: a JSON payload with optional fields, then Base64-encoded.
 *
 * @param {Object} options - Context options.
 * @param {string} options.location - Origin of the interaction (e.g., "CHAT_INPUT").
 * @param {string} [options.guild_id] - Guild ID if the interaction occurs in a guild.
 * @param {string} [options.channel_id] - Channel ID of the interaction.
 * @param {string} [options.message_id] - Message ID for component interactions.
 * @returns {string} Base64-encoded JSON string.
 */
function generateContextProperties({ location, guild_id, channel_id, message_id }) {
  const payload = {
    location,
    ...(guild_id && { guild_id }),
    ...(channel_id && { channel_id }),
    ...(message_id && { message_id }),
  };
  const json = JSON.stringify(payload);
  return Buffer.from(json, 'utf8').toString('base64');
}

module.exports = { generateContextProperties };

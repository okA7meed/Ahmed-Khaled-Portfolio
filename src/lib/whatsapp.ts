// Client-side WhatsApp click-to-chat helper.
//
// This module builds a pre-filled WhatsApp message and a `wa.me` link so the
// visitor is taken straight to the owner's WhatsApp chat with the message
// already written. The visitor presses Send manually — nothing is sent
// automatically and no backend or API credentials are involved.

// WhatsApp number in international format (no "+", no spaces).
export const WHATSAPP_NUMBER = "201206411015";

const MESSAGE_TEMPLATE = `NEW PROJECT INQUIRY

Name: {name}

Email: {email}

Project Details:
{message}

Sent from Ahmed Khaled Portfolio.`;

/**
 * Builds the professionally formatted WhatsApp message body from the
 * submitted contact form fields.
 */
export function buildWhatsAppMessage(input: {
  name: string;
  email: string;
  message: string;
}): string {
  return MESSAGE_TEMPLATE.replace("{name}", input.name)
    .replace("{email}", input.email)
    .replace("{message}", input.message);
}

/**
 * Builds a WhatsApp click-to-chat URL with the given message pre-filled and
 * correctly URL-encoded.
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * ArtON site-wide contact links (Gallery Quietism).
 * All "begin exhibition / subscribe" CTAs point to the customer LINE;
 * "become a curator" CTAs point to the curator LINE;
 * all email touchpoints route to the official mailbox.
 */
export const LINKS = {
  email: "mailto:support@arton.tw",
  emailDisplay: "support@arton.tw",
  phone: "tel:0975-678-388",
  phoneDisplay: "0975-678-388",
  customerLine: "https://lin.ee/yEZxsB3",
  curatorLine: "https://lin.ee/7dr8uq4",
  lineQr: "/manus-storage/artonline-line-qr-new_e5c21675.png",
};

/**
 * Build a mailto link with a pre-filled subject and a short template body,
 * so the recipient instantly knows the inquiry purpose and can reply
 * by just filling in name / phone / email.
 */
export function mailLink(subject: string, body: string): string {
  return `mailto:support@arton.tw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Standard consultation template — recipients fill in their info.
 */
export function consultMail(subject: string): string {
  return mailLink(
    `ArtON：${subject}`,
    "您好，我想了解 ArtON 的展示方案，以下是我的資訊：\n\n姓名：\n電話：\nEmail：\n\n需求簡述：",
  );
}

import crypto from "crypto";

export default async function handler(req, res) {
  const ENDPOINT = "https://YOUR-PROJECT-NAME.vercel.app/api/deletion";
  const VERIFICATION_TOKEN = "stazylsqr6b40p62yighr2bskt7lto2s";

  if (req.method === "GET") {
    const challengeCode = req.query.challenge_code;

    if (!challengeCode) {
      return res.status(400).json({ error: "Missing challenge_code" });
    }

    const challengeResponse = crypto
      .createHash("sha256")
      .update(challengeCode)
      .update(VERIFICATION_TOKEN)
      .update(ENDPOINT)
      .digest("hex");

    return res.status(200).json({ challengeResponse });
  }

  if (req.method === "POST") {
    console.log("eBay notification received:", req.body);
    return res.status(204).send("");
  }

  return res.status(405).json({ error: "Method not allowed" });
}
export default async function handler(req, res) {
  const { code, error, error_description } = req.query;

  return res.status(200).json({
    message: code ? "eBay callback received" : "No code received yet",
    code: code || null,
    error: error || null,
    error_description: error_description || null
  });
}

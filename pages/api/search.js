import { searchLettuce } from "../../lib/redis";

export default async function handler(req, res) {
  const q = req.query.q;
  const lettuce = await searchLettuce(q);
  res.status(200).json({ lettuce }); 
}
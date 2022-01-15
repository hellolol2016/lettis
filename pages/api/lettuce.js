import { createLettuce } from "../../lib/redis";

export default async function handler(req, res) {
  const id = await createLettuce(req.body); 
  res.status(200).json({id})
}
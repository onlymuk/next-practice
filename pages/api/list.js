import { connectDB } from "@/util/database";

export default async function list(req, res) {
  if (req.method === "GET") {
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    const timestamp = new Date().toLocaleDateString;
    return res.status(200).json({ result, timestamp });
  }
}

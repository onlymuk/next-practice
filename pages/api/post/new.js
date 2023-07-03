import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title === "") {
      return res.status(500).json("비어있음");
    }
    try {
      const client = await connectDB;
      const db = client.db("forum");
      let result = await db.collection("post").insertOne(req.body);
      return res.status(200).redirect(302, "/list");
    } catch (error) {
      alert("error");
    }
  }
}

import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  return (
    <>
      {result.map((item) => (
        <div className="list-bg" key={item._id}>
          <div className="list-item">
            <Link prefetch={false} href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <DetailLink></DetailLink>
            <p>1월 1일</p>
          </div>
        </div>
      ))}
    </>
  );
}

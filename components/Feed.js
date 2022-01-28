import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
import Input from "../components/Input";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div
      className="text-white flex-grow  max-w-2xl
      border-l border-r border-gray-700 
      sm:ml-[73px] xl:ml-[300px]"
    >
      <div
        className="bg-black text-[#d9d9d9]  border-b border-gray-700
      flex items-center sm:justify-between
       py-2 px-3 sticky top-0 z-50"
      >
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
      </div>

      <Input />

      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

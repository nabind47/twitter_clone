import { useState } from "react";
import { useRouter } from "next/router";
import Moment from "react-moment";
import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";

import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartFilledIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Post = ({ id, post, postPage }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [like, setLike] = useState("false");
  const router = useRouter();

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      {!postPage && (
        <img
          src={post?.userImg}
          alt="post"
          className="h-11 w-11 rounded-full mr-4"
        />
      )}
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex ${!postPage && "justify-between"}`}>
          {postPage && (
            <img
              src={post?.userImg}
              className="h-11 w-11 rounded-full mr-4"
              alt="user"
            />
          )}

          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4
                className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] text-base group-hover:underline
                  ${!postPage && "inline-block "}`}
              >
                {post?.username}
              </h4>
              <span
                className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}
              >
                @{post?.tag}
              </span>
              <span className="hover:underline text-sm sm:text-[15px]">
                <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
              </span>
            </div>
            {!postPage && (
              <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                {post?.text}
              </p>
            )}
          </div>

          <div className="icon group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        {postPage && (
          <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
            {post?.text}
          </p>
        )}
        <img
          src={post?.image}
          className="rounded-lg max-h-[700px] object-cover mr-2"
        />

        <div className="flex justify-around">
          <HeartIcon className="w-8 h-8 p-1 rounded-full text-gray-500 hover:text-pink-500 hover:text-opacity-50 active:scale-125 transition duration-300 ease-out" />

          <ChatIcon className="w-8 h-8 p-1 rounded-full  text-gray-500 hover:text-[#1d9bf0] hover:text-opacity-50 active:scale-125 transition duration-300 ease-out" />

          {session.user.uid === post?.id ? (
            <TrashIcon
              onClick={(e) => {
                e.stopPropagation();
                deleteDoc(doc(db, "posts", id));
                router.push("/");
              }}
              className="w-8 h-8 p-1 rounded-full text-gray-500  hover:text-[#1d9bf0] hover:text-opacity-50 active:scale-125 transition duration-300 ease-out"
            />
          ) : (
            <ShareIcon className="w-8 h-8 p-1 rounded-full  text-gray-500 hover:text-[#1d9bf0] hover:text-opacity-50 active:scale-125 transition duration-300 ease-out" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;

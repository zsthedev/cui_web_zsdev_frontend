import React from "react";

const Post = ({ image, name, created, post }) => {
  return (
    <div className="w-[600px] bg-white p-[20px] rounded-md flex flex-col">
      <div className="image-row flex items-center gap-3">
        <img
          src={image}
          alt=""
          className="w-[72px] h-[72px] bg-zinc-200 rounded-full"
        />
        <div className="img-text">
          <p className="text-xl font-[600]">{name}</p>
          <p className="text-text">Created On: {created}</p>
        </div>
      </div>

      <p className="post mt-[10px] text-lg">{post}</p>
    </div>
  );
};

export default Post;

import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Test() {
  const posts = useLoaderData();
  const { id } = useParams();
  console.log(useParams());

  return (
    <div>
      <ul>
        {posts.map(
          (post) => post.id == id && <li key={post.id}>{post.title}</li>
        )}
      </ul>
    </div>
  );
}

export default Test;

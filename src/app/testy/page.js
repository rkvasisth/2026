"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    setPost(data.posts);

    console.log(data.posts);
  }

  const filteredPosts = useMemo(() => {
    console.log("Filtering posts...");
    return post.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [post, search]);

  
  ///
  async function fetchData(){
  const res = await fetch("https://www.ocrolus.com/wp-json/wp/v2/posts");
  const dat = await res.json();

  console.log(dat[0].link);

  }
  fetchData();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <input
        type="text"
        placeholder="Search Post"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
  transition duration-200 mb-7"
      />
      {filteredPosts.map((post) => {
        return (
          <h1>
            <span>{post.id}</span> {post.title}
          </h1>
        );
      })}
    </div>
  );
};

export default page;

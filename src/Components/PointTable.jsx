import React, { useState, useEffect } from "react";

// let url = "https://jsonplaceholder.typicode.com/posts";
function PointTable() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  function handleDelete(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    }).then(() => setPosts(posts.filter((post) => post.id !== id)));
  }
  return (
    <div>
      <table style={{ border: "1px solid black", backgroundColor: "pink" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>Title</th>
            <th style={{ border: "1px solid black" }}>Body</th>
            <th style={{ border: "1px solid black" }}>Button</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td style={{ border: "1px solid black" }}>{post.id}</td>
              <td style={{ border: "1px solid black" }}>{post.title}</td>
              <td style={{ border: "1px solid black" }}>{post.body}</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={() => handleDelete(post.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default PointTable;

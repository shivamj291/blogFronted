import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function DashBoard() {
  const [state, setState] = useState([]);
  const [search, SetSearch] = useState("");
  useEffect(() => {
    allPost();
  }, []);

  async function allPost() {
    const token = localStorage.getItem("token");
    console.log(search);
    try {
      if (token) {
        let data = await axios.get(
          `http://localhost:4000/posts?keyword=${search}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(data.data.posts);
        setState(data.data.posts);
        return data;
      } else {
        console.log("login first");
      }
    } catch {
      console.log("error");
    }
  }
  return (
    <div>
      <input
        type="text"
        name=""
        placeholder="type for search"
        id=""
        onChange={(e) => SetSearch(e.target.value)}
        style={{padding:'10px 20px',background:'yellow',margin:'20px'}}
      />
      <button onClick={allPost}>search</button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" ,width:'80%',margin:'20px auto'}}>
        {state?.map((ele) => (
          <div style={{ background: "teal", padding: "10px" }}>
            <Link to={`/single/${ele._id}`}>
              <div
                style={{
                  background: "yellow",
                  color: "black",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  <h3>{ele.title}</h3>
                  <p style={{ fontSize: "22px" }}>{ele.blog}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

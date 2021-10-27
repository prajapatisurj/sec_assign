import React from "react";
import "./App.css";
import axios from "axios";


const style = {
  backgroundColor: "black",
  color: "white",
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  display: "block",
  marginBottom: "4px",
  fontWeight: "bold",
};

const App = () => {
  axios.defaults.baseURL = "https://reqres.in/api";

  const getData = () => {
    axios.get("/users").then(({ data: data }) => console.log(data));
  };

  const config = {
    data: {
      name: "John Doe",
      job: "Junior Developer",
    },
    headers: {
      "content-type": "application/json",
    },
  };

  const postData = () => {
    axios
      .post("/users", config)
      .then((res) => console.log(res.data))
      .catch((res) => console.log(res));
  };

  const updateData = async () => {
    try {
      const res = await axios.put("/2", {
        name: "Jane Doe",
        job: "Senior Developer",
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = () => {
    axios.delete("/2").then((res) => console.log(res.status));
  };

  return (
    <>
      <div className='grid'>
        <button style={style} onClick={getData}>
          Get
        </button>
        <button style={style} onClick={postData}>
          Post
        </button>
        <button style={style} onClick={updateData}>
          Update
        </button>
        <button style={style} onClick={deleteData}>
          Delete
        </button>
      </div>
    </>
  );
};

export default App;


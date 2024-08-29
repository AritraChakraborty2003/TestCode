import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    selectedFile: null,
    filename: null,
  });
  const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
    console.log(file);
  };

  const uploadData = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const college = document.getElementById("college").value;
    const password = document.getElementById("password").value;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}` + "user", {
        name: name,
        email: email,
        college: college,
        password: password,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data posted successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const uploadDataDelete = (e) => {
    e.preventDefault();
    const email = document.getElementById("email3").value;
    axios
      .delete(`${import.meta.env.VITE_APP_API_URL}user/delete/data?email=${email}`, {
        email: email,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data deleted successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const uploadData1 = (e) => {
    e.preventDefault();

    const email = document.getElementById("email2").value;
    const college1 = document.getElementById("college1").value;

    axios
      .patch(`${import.meta.env.VITE_APP_API_URL}user/update`, {
        email: email,
        college: college1,
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Data Changed successfully");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadFile = (e) => {
    e.preventDefault();
    let doc = document.getElementById("doc").value;

    let formData = new FormData();
    formData.append("doc", doc);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    let control = true;
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}fileUpload`, formData, config)
      .then((res) => {
        if (res.data.status === 200) {
          alert("File uploaded Successfully");
        } else {
          alert("Upload not successful");
        }
      });
  };
  return (
    <>
      <p className="font-bold  text-3xl">Please Fill the details</p>
      <form className="mt-8">
        <input
          type="text"
          name="name"
          id="name"
          className="w-[40vmin] border-[2px] p-2"
          placeholder="Enter name...."
        />
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          className="w-[40vmin] border-[2px] p-2"
          placeholder="Enter email...."
        />
        <br></br>
        <br></br>
        <input
          type="text"
          id="college"
          className="w-[40vmin] border-[2px] p-2"
          placeholder="Enter college...."
        />
        <br></br>
        <br></br>
        <input
          type="password"
          id="password"
          className="w-[40vmin] border-[2px] p-2"
          placeholder="Enter password...."
        />
        <br></br> <br></br>
        <button className="bg-black text-white p-2" onClick={uploadData}>
          Submit
        </button>
      </form>

      <p className="font-bold  text-3xl mt-[6vmin]">
        Please Fill the details to update...
      </p>
      <form className="mt-5">
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          id="email2"
          className="w-[40vmin] border-[2px] p-2"
          placeholder="Enter email...."
        />
        <br></br>
        <br></br>
        <input
          type="text"
          id="college1"
          className="w-[40vmin] border-[2px] p-2"
          placeholder="Enter college...."
        />
        <br></br>
        <br></br>
        <button className="bg-black text-white p-2" onClick={uploadData1}>
          Submit
        </button>
      </form>

      <p className="font-bold  text-3xl mt-[6vmin]">
        Please Fill the email to Delete...
      </p>
      <form className="mt-5">
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          id="email3"
          className="w-[40vmin] border-[2px] p-2"
          placeholder="Enter email...."
        />
        <br></br>
        <br></br>

        <button className="bg-black text-white p-2" onClick={uploadDataDelete}>
          Submit
        </button>

        <p className="font-bold  text-3xl mt-[6vmin]">
          Please upload the file...
        </p>
        <form className="mt-5">
          <br></br>
          <br></br>
          <input
            type="text"
            id="doc"
            className="w-[40vmin] border-[2px] p-2"
            placeholder="Enter  Doc type...."
          />
          <br></br>
          <br></br>
          <input
            type="file"
            name="file"
            id="file"
            onChange={fileSelectedHandler}
            className="w-[40vmin] border-[2px] p-2"
            placeholder="Insert your file..."
          />
          <br></br>
          <br></br>

          <button className="bg-black text-white p-2" onClick={uploadFile}>
            Submit
          </button>
        </form>
      </form>
    </>
  );
}

export default App;

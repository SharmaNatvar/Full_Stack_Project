import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  const [inputValue, setInputValue] = useState({title:'', desc:''})
  const [arrayValue, setArrayValue] = useState([])

const handleChange =(e) =>{
  const {name , value} = e.target
  setInputValue({...inputValue , [name] : value})
}
console.log(inputValue);


const handleSumbit = () =>{
setArrayValue({...arrayValue , ...inputValue})
setInputValue({title:'', desc:''})
}
console.log(arrayValue);

  return (
    <>
      <div className="container" style={{ height: "85vh" }}>
        <div className="main-block">
          <h1>Add Todo</h1>
          <form action="/">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={inputValue.title}
              required
              onChange={(e) => handleChange(e)}
            />
            <br />
            <input
              type="text"
              name="desc"
              placeholder="message"
              value={inputValue.desc}
              required
              onChange={(e) => handleChange(e)}
            />
            <br />

            <hr />
            <div className="btn-block">
              <button onClick={handleSumbit}>Submit</button>
            </div>
          </form>
        </div>

        <div className="card" style={{ width: "18rem", marginTop: "4rem" }}>
          <div className="card-body p-4">
            <h5 className="card-title">Card title</h5>

            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex">
              <button className="me-3">
                <FaEdit />
              </button>
              <button className="bg-danger ms-3">
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

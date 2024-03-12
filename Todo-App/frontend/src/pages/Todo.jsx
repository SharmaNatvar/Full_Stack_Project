import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWindowClose } from "react-icons/fa";


const Todo = () => {
  const [inputValue, setInputValue] = useState({ title: "", desc: "" });
  const [arrayValue, setArrayValue] = useState([]);
  const [value, setValue] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSumbit = () => {
    if (inputValue.title !== "" && inputValue.desc !== "") {
      setArrayValue([...arrayValue, inputValue]);
      setInputValue({ title: "", desc: "" });
      toast.success("Success Add !");
      toast.error("Task Not Save ! please Login");
    } else {
      toast.error("fill the form");
    }
  };

  const handleUpdte = (e) => {
    setValue(true);
    console.log(e, "e");
    setInputValue(e);
  };

  const handleUpdateBtn = (e) => {
    e.preventDefault()
    // const updateValue =
    console.log(inputValue, "inputValue line 38");
    const result = arrayValue.map((e)=>{
      if(e.title === inputValue.title ){
        console.log(e.title , 'e.title');
        console.log(inputValue.title , 'inputValue.title');
        return {
          ...e,
          title : inputValue.title,
          desc : inputValue.desc
        }
      }
      return e
    })
    setArrayValue(result);
    setValue(false)
    setInputValue({ title: "", desc: "" });
    toast.success("Success Update !");
    toast.error("Task Not Save ! please Login");
  };
  console.log(inputValue, "inputValue");

  const handleDelete = (title) => {
    setArrayValue(arrayValue.filter((e) => e.title !== title));
    toast.success("Success Delete !");
  };

  return (
    <>
      <ToastContainer />
      <div className="container" style={{ minheight: "85vh" }}>
        <div className="main-block mb-5">
          {value ? <div className="d-flex align-items-center justify-content-around"><h1>UpDate Todo</h1> <p className="fs-2" onClick={() =>{ setValue(false) , setInputValue({ title: "", desc: "" })}}><FaWindowClose /></p> </div>: <h1>Add Todo</h1>}
          <form >
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
              {value ? (
                <button className="cbtn" onClick={handleUpdateBtn}>
                  Update
                </button>
              ) : (
                <button className="cbtn" onClick={handleSumbit}>
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="d-flex gap-3 flex-wrap">
          {arrayValue &&
            arrayValue.map((e, index) => {
              return (
                <div
                  className="card "
                  style={{ width: "18rem", marginTop: "1rem" }}
                  key={index}
                >
                  <div className="card-body p-4">
                    <h5 className="card-title">{e.title}</h5>

                    <p className="card-text">{e.desc}</p>
                    <div className="d-flex">
                      <button
                        className="me-3 cbtn"
                        onClick={() => {
                          handleUpdte(e, index);
                        }}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="bg-danger ms-3 cbtn"
                        onClick={() => {
                          handleDelete(e.title);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Todo;

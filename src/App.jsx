import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim()) {
      setList([...list, input]);
      setInput("");
    }
  };
  return (
    <>
      <nav className="w-full bg-blue-300 h-[100px] text-white flex items-center justify-center">
        <h1 className="text-[5.6vw]">TO DO LIST</h1>
      </nav>
      <div className=" bg-slate-100">
        <div className="flex-col text-white  w-[50vw]  bg-green-500 py-6 absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2  rounded h-[180px] px-7 flex">
          <div className="text-[2.3vw]">Add Items</div>
          <div className="py-5 space-x-8">
            <input
              className="border-2 text-black px-2 rounded w-72 h-14"
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              onClick={handleClick}
              className="bg-blue-600 px-7 py-3 rounded-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="m-64 bg-slate-500 h-auto">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {index + 1}:{item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

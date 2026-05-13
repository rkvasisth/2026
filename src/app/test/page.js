"use client";
import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};
const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [advice, setAdvice] = useState("Hello");
  const [adviceCount, setAdviceCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https:api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setAdviceCount((c) => c + 1);
  }

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const inputRef = useRef(null);
  function AutoFocus() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }
  const pRef = useRef(null);
  function TogglePRef() {
    if (pRef.current.style.display != "none") {
      pRef.current.style.display = "none";
    } else {
      pRef.current.style.display = "block";
    }
  }
  const countRef = useRef(0);

  function ConsoleCounter() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }
  const [count, setCount] = useState(0);

  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
    console.log(prevCount.current);
  }, [count]);

  const [state, dispatch] = useReducer(reducer, emptyData);

  const [useCount1, setUseCount1] = useState(0);
  const [useCount2, setUseCount2] = useState(0);

  const useCounter1 = () => {
    setUseCount1(useCount1 + 1);
  };

  const useCounter2 = () => {
    setUseCount2(useCount2 + 1);
  };

  const IsEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return useCount1 % 2 === 0;
  }, [useCount1]);

  return (
    <div>
      <h1 className="w-150 m-auto mb-10 text-[40px]">use Memo Hook</h1>
      <button
        className="bg-green-400 text-4xl p-2 text-white font-semibold cursor-pointer rounded-2xl"
        onClick={useCounter1}
      >
        Counter1 <br />
        {useCount1}
      </button>
      <br />
      <p className="text-[30px] font-bold">
        Counter1 Number is {IsEven ? "Even" : "Odd"}
      </p>
      <br />
      <button
        className="bg-green-400 text-4xl p-2 text-white font-semibold cursor-pointer rounded-2xl"
        onClick={useCounter2}
      >
        Counter2 <br />
        {useCount2}
      </button>
      <h1 className="w-150 m-auto mb-10 text-[40px]">use Reducer Hook</h1>
      <div className="w-150 m-auto">
        <input
          type="text"
          placeholder="Enter Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
  transition duration-200 mb-7"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "name" })
          }
        />
        <input
          type="text"
          placeholder="Enter Password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
  transition duration-200 mb-7"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "password" })
          }
        />
        <input
          type="text"
          placeholder="Enter Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
  transition duration-200 mb-7"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "email" })
          }
        />
        <input
          type="text"
          placeholder="Enter City"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
  transition duration-200 mb-7"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "city" })
          }
        />
        <input
          type="text"
          placeholder="Enter Address"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
  transition duration-200 mb-7"
          onChange={(event) =>
            dispatch({ val: event.target.value, type: "address" })
          }
        />
        <button
          className="bg-green-400 text-4xl p-5 text-white font-semibold cursor-pointer rounded-2xl"
          onClick={() => console.log(state)}
        >
          Add Details
        </button>
        <h1 className="w-150 m-auto mb-5 mt-5 text-[40px]">User Details</h1>
        <ul>
          <li>Name: {state.name}</li>
          <li>Password: {state.password}</li>
          <li>Email: {state.email}</li>
          <li>City: {state.city}</li>
          <li>Address: {state.address}</li>
        </ul>
      </div>
      <h1 className="text-5xl p-5" ref={prevCount}>
        Current Value:{count}
      </h1>
      <h1 className="text-4xl p-5">Previous Value: {prevCount.current}</h1>
      <br />
      <br />
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-400 text-4xl p-5 text-white font-semibold"
      >
        Increment
      </button>{" "}
      <br />
      <br />
      <button
        onClick={() => setCount(count - 1)}
        className="bg-green-400 text-4xl p-5 text-white font-semibold"
      >
        Decrement
      </button>
      <button
        onClick={() => {
          ConsoleCounter();
        }}
        className="bg-red-400 text-4xl p-5 text-white font-semibold cursor-pointer mr-3 rounded-lg"
      >
        Console Counter
      </button>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a text"
        className="border-gray-100 border-2"
      />
      <button
        onClick={() => {
          AutoFocus();
        }}
        className="bg-red-400 text-4xl p-5 text-white font-semibold cursor-pointer mr-3 rounded-lg"
      >
        Get Focus
      </button>
      <p ref={pRef}>Click the button to hide me</p>
      <button
        onClick={() => {
          TogglePRef();
        }}
        className="bg-red-400 text-4xl p-5 text-white font-semibold cursor-pointer mr-3 rounded-lg"
      >
        Toggle
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-[50px] p-5">{time}</h1>
      <button
        onClick={() => setIsRunning(true)}
        className="bg-red-400 text-4xl p-5 text-white font-semibold cursor-pointer mr-3 rounded-lg"
      >
        Start
      </button>
      <button
        onClick={() => setIsRunning(false)}
        className="bg-red-400 text-4xl p-5 text-white font-semibold cursor-pointer mr-3 rounded-lg"
      >
        Stop
      </button>
      <button
        onClick={() => {
          setTime(0);
          setIsRunning(false);
        }}
        className="bg-red-400 text-4xl p-5 text-white font-semibold cursor-pointer rounded-lg"
      >
        Reset
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{advice}</h1>
      <button
        className="bg-green-400 text-4xl p-5 text-white font-semibold cursor-pointer"
        onClick={getAdvice}
      >
        Get Advice
      </button>
      <p>
        You have read <strong>{adviceCount}</strong> Advices
      </p>
      <form
        action="/"
        className=" border text-lg flex flex-col p-4 mx-auto mt-40 w-150"
      >
        <label> Username:</label>
        <input
          name="username"
          className="border outline-none indent-3"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <label> Password:</label>
        <input
          name="password"
          className="border outline-none indent-3"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="border w-50 mx-auto mt-10 h-10 cursor-pointer active:scale-95 duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;

import React,{useState} from 'react'

import {useDispatch} from "@reduxjs/toolkit";
const SearchBar = () => {

    const [text, setText] = useState('');
     useDispatch()
    const handleForm=(e)=>{
        console.log("Form submited!");
     e.preventDefault();
     console.log(text);
     setText('');
     
    }
    return (
        <form onSubmit={handleForm}
        className="flex gap-2 m-10">
            <input
            required
            value={text}
                type="text"
                onChange={(e)=>setText(e.target.value)}
                placeholder="Search Photos,Videos,Gift....."
                className="w-full px-3  py-2 text-black  rounded-xl border-2 outline-none  border-b-blue-950"
            />
            <button
                className=" border border-blue-400 rounded-2xl cursor-pointer active:scale-95 hover:bg-blue-800 text-white bg-blue-500 p-2">Search</button>
        </form>
    )
}

export default SearchBar

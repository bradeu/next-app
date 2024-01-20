'use client'

import Image from 'next/image'
import { useEffect } from 'react';
import axios from "axios"

export default function Home() {

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/query")
      console.log(res)
      return res;
    }
    catch (e) {
      console.log(e)
      return e;
    }
  }

  useEffect(() => {
    try {
      const data = fetchData()
      console.log(data)
    }
    catch (e){
      console.log(e)
    }
  })

  return (
    <div className='flex flex-col mb-5'>
    <h1>hello world</h1>
    <button onClick={fetchData}>FETCH DATA</button>
    </div>

  );
}

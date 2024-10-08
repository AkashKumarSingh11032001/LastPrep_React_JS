import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/AkashKumarSingh11032001")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  const data = useLoaderData();
  
  return (
    <div className="text-center m-4 bg-blue-600 text-white p-4 text-3xl">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="github pics" width={300}/>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/AkashKumarSingh11032001")
    return response.json()
}

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
    // loader optimization ke liye hai, api call phle hi lag jati kisi component ko render krne se phle.
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kailash-kumawat")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   });
  return (
    <div className="text-center text-3xl text-white m-4 p-4 bg-gray-500">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="github-img" width={300}></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kailash-kumawat");
  return response.json();
};

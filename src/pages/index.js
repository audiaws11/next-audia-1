import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
// Client Side Rendering
export default function Home() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods ',
      {headers: {apiKey: 'w05KkI9AWhKxzvPFtXotUva-'},
    })
    setFood(resp.data.data)
    }
    getData()

  }, [])
  

  return (
    <div>
      <ul>
        {food.map((item) => (
          <li>
            <img className="object-cover w-64 h-64" src={item.imageUrl} />
            <h1 className="font-bold">name: {item.name}</h1>
            <p className="font-semibold">description: {item.description}</p>
            <p  className="font-semibold">price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


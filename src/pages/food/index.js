import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [food, setFood] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
          headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' }
        });
        setFood(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAlert = () => {
    alert("Menu add to cart!");
  };

  const handleViewDetails = async () => {
    try {
      const response = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${id}`, {
        headers: { apiKey: 'w05KkI9AWhKxzvPFtXotUva-' }
      });
      // Assuming you have a state to manage modal visibility and content
      setModalContent(response.data.data);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching food details:", error);
    }
    
  };

  return (
   
     <div style={{background: '#fff8ee'}}>
      <Layout className="text-black min-h-screen" style={{background: '#fff8ee'}}>
      <div className="container mx-auto pt-10 pb-10" style={{background: '#fff8ee'}}>
      <h1 className="text-3xl font-bold text-center" style={{color: '#CC3333'}}>Welcome to Our Menu</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {food.map((item, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src={item.imageUrl} alt={item.name} />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <div className="mt-4 flex justify-between items-center">
                <button onClick={handleAlert} className="px-2 py-2 text-white hover:bg-blue-200 rounded-lg" style={{background: '#CC3333'}}>Add to Cart</button>
                <Link href={`/food/${item.id}`} ><button onClick={() => handleViewDetails(item.id)} className="px-2 py-2 bg-gray-500 text-white hover:bg-gray-200 rounded-lg">View Details</button></Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
     </Layout>
     </div>
  );
}

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
    alert("Menu add to carxt!");
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
   
     <Layout className="bg-gray-100 text-black min-h-screen">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Welcome to Our Menu</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {food.map((item, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src={item.imageUrl} alt={item.name} />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <div className="mt-4 flex justify-between items-center">
                <button onClick={handleAlert} className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-200 rounded-lg">Add to Cart</button>
                <Link href={`/ssr/${item.id}`} ><button onClick={() => handleViewDetails(item.id)} className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-200 rounded-lg">View Details</button></Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
     </Layout>
  );
}

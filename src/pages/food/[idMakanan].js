import axios from "axios";
import FoodForm from "@/component/FormFood";
import usePost from "@/hooks/usePost";
import { useState } from "react";
import Layout from "@/layout/Layout";
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.idMakanan}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", kataKunci: "Kopi enak bikin kembung" },
  });

  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const {post, loading} = usePost();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = async ({name, imageUrl, description, ingredients}) => {
    await post(`/update-food/${food.id}`, {
      name,
      imageUrl,
      description,
      ingredients
    });
    setIsModalOpen(false);
    router.push(`/food/${food.id}`);
  };

  const handleDelete = async ({name, imageUrl, description, ingredients}) => {
    try {
  
      await axios.delete(`https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`, {
        method: "DELETE",
        headers: { 
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q"
        },
      });
    } catch (error) {
      console.error("Failed to delete the food item:", error);
    }

    router.push("/food");
  };
  let ingredientsDisplay = '';
    if (typeof food?.ingredients === 'string') {
      ingredientsDisplay = food.ingredients.split(' ').join(', '); // Adjust splitting logic based on actual delimiter
    } else if (Array.isArray(food?.ingredients)) {
      ingredientsDisplay = food.ingredients.join(', ');

    }
    
    console.log(ingredientsDisplay)

  return (
   <Layout>
     <div className="flex justify-center items-center min-h-screen" style={{background: '#fff8ee'}}>
      <div className="max-w-md mx-auto p-8 shadow-lg rounded-lg" style={{ backgroundColor: "#f5f5f5" }}>
        <img src={food?.imageUrl} className="w-full h-auto rounded-lg mb-4" alt={food?.name} />
        <p className="text-lg font-bold">Name: {food?.name}</p>
        <p className="text-lg font-semibold">Description: {food?.description}</p>
        <p className="text-lg font-semibold">Ingredients: {ingredientsDisplay}</p>
        <div className="flex justify-content-center ">
        <button onClick={() => setIsModalOpen(true)} className="bg-gray-500 hover:bg-gray-200 text-white font-bold py-2 px-2 rounded-lg pl-3">
          Update {food?.name}
        </button>

        <button onClick={handleDelete} className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-2 rounded-lg">
          Delete {food?.name}
        </button>
        

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-7 rounded-lg shadow-xl">
              <FoodForm 
                title={`Update ${food?.name}`} 
                defaultName={food?.name} 
                defaultUrl={food?.imageUrl}
                defaultDescription={food?.description}
                defaultIngredients={ingredientsDisplay}
                onSubmitFood={handleUpdate} 
              />
              <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
                Close
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
   </Layout>
  );
}

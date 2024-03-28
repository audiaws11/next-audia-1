import axios from "axios";
import FoodForm from "@/component/FormFood";
import { useState } from "react";
import usePost from "@/hooks/usePost";
import Layout from "@/layout/Layout";

export default function CreateFood() {
    const {post, loading} = usePost();
    const handleCreate = async ({name, imageUrl, description, ingredients})=> {
        await post(`/create-food`, {
            name,
            imageUrl,
            description,
            ingredients
        })
       }  
    return (
    <Layout>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
       
       <FoodForm title={"Create New Food"}
       onSubmitFood={handleCreate}
       loading={loading}/>
    </div>
    </Layout>
    );

}

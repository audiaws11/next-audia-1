import axios from "axios";
import FoodForm from "@/component/FormFood";
import { useState } from "react";
import usePost from "@/hooks/usePost";
import Layout from "@/layout/Layout";
import { useRouter } from 'next/router';

export default function CreateFood() {
    const {post, loading} = usePost();
    const router = useRouter();
    const handleCreate = async ({name, imageUrl, description, ingredients})=> {
        await post(`/create-food`, {
            name,
            imageUrl,
            description,
            ingredients
        })
        router.push("/food");
       }  
    return (
    <Layout>
        <div className="flex justify-center items-center min-h-screen" style={{background: '#fff8ee'}}>
       
       <FoodForm title={"Create New Food"}
       onSubmitFood={handleCreate}
       loading={loading}/>
    </div>
    </Layout>
    );

}

import { useRouter } from "next/router";

export default function productName() {
    const router = useRouter();;
    return <h1>detail product: {router.query.productName}</h1>;
}
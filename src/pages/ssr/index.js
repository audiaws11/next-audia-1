import Image from "next/image";
import axios from "axios";


export async function getServerSideProps() {
  const resp = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods ',
  {headers: {apiKey: 'w05KkI9AWhKxzvPFtXotUva-'},
})
return {
  props: {
    food: resp.data.data || [],
  }
}
}
export default function GetFood({food}) {

  return (
    <div>
      <ul className="grid grid-cols-3 gap-4">
        {food.map((food) => (
          <li>
            <img className="object-cover w-64 h-64" src={food.imageUrl} />
            <h1 className="font-bold text-2xl">{food.name}</h1>
            <p className="font-semibold">description: {food.description}</p>
            <p  className="font-semibold">price: {food.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
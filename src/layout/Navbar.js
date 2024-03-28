import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="text-white p-4" style={{background: '#CC3333'}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="text-white hover:text-gray-300" style={{textDecoration: 'none'}}>
            Madang Resto by Dibimibing
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/create" className="text-white hover:text-gray-300" style={{textDecoration: 'none'}}>
            Add Menu
          </Link>
          <Link href="/food" className="text-white hover:text-gray-300" style={{textDecoration: 'none'}}>
            Menu
          </Link>
         
        </div>
        
      </div>
    </nav>
  );
}

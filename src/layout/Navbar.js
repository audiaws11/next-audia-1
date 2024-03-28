import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/ssr" className="hover:text-gray-300">
            Sambalado Kitchen by Dibimibing
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/create" className="hover:text-gray-300">
            Add Menu
          </Link>
         
        </div>
      </div>
    </nav>
  );
}

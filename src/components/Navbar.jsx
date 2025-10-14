import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        <Link to="/src/pages/Home.jsx" className="hover:underline">Home</Link>
        <Link to="/src/pages/Perfil.jsx" className="hover:underline">Perfil</Link>
        <Link to="/src/pages/Carrinho.jsx" className="hover:underline">Carrinho</Link>
      </div>
    </nav>
  );
}

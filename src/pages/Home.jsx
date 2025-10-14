import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";


export default function Home() {

  const [cardEletronicos, setCardEletronicos] = useState([]);
  const [cardJoias, setCardJoias] = useState([]);
  const [cardRoupas, setCardRoupas] = useState([]);

  const API = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API}react&per_page=5`, {
        
  }
    })
      .then(res => res.json())
      .then(data => { setCardEletronicos(data.items) })
      .catch(err => console.error(err));

  useEffect(() => {
    fetch(`${API}react&per_page=5`, {
        
  }
    })
      .then(res => res.json())
      .then(data => { setCardJoias(data.items) })
      .catch(err => console.error(err));
  
  useEffect(() => {
    fetch(`${API}react&per_page=5`, {
        
  }
    })
      .then(res => res.json())
      .then(data => { setCardRoupas(data.items) })
      .catch(err => console.error(err));       
  
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">FakeStore Explore!</h2>
        <Banner title="Eletrônicos">
          <>
          {cardEletronicos.map(repo => (
            <Card
              key={repo.id} 
              {...repo}
            />
          ))}
          </>
        </Banner>

        <Banner title="Joias">
          <>
          {cardJoias.map(repo => (
            <Card
              key={repo.id} 
              {...repo}
            />
          ))}
          </>
        </Banner>

        <Banner title="Roupas">
          <>
          {cardRoupas.map(repo => (
            <Card
              key={repo.id} 
              {...repo}
            />
          ))}
          </>
        </Banner>
    </div>
  );
}
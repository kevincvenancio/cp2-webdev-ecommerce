export default function Card({image, title, rating, price, button}) {
    return (
    <div className={`flex items-center justify-between border rounded-lg p-4 border-red-700 shadow hover:scale-102 transition transform duration-200`}>
      <div className="p-1.5">
        <img className="border rounded-lg">{image}</img>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-400 mt-2">⭐ {rating}</p>
        <p className="text-sm text-white mt-1 font-bold">{price}</p>
        <button className="border rounded-sm border-yellow-400"></button>
        </div>
    </div>    
    )
}
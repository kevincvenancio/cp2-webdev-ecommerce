export default function Banner({name_Section}) {
    return (
    <div className='bg-black text-yellow-400 px-6 py-4 flex justify-between items-center'>
      <div className="p-1.5">
        <h3 className="font-bold text-lg">{name_Section}</h3>
        </div>
    </div>    
    )
}
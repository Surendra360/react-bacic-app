import React from 'react'

const App = () => {

  const data = [

    {
      "id": 1,
      "img": "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlfGVufDB8fDB8fHww",
      "name": "Red Apple",
      "description": "A fresh red apple, perfect for a healthy snack.",
      "button": "Explore More"
    },
    {
      "id": 2,
      "img": "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww",
      "name": "Banana",
      "description": "A ripe banana, great for breakfast or a quick energy boost.",
      "button": "Explore More"
    },
    {
      "id": 3,
      "img": "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Orange",
      "description": "A juicy orange, packed with vitamin C.",
      "button": "Explore More"
    },
    {
      "id": 4,
      "img": "https://images.unsplash.com/photo-1554118879-e459bb1fe1ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Strawberry",
      "description": "A sweet strawberry, delicious on its own or in desserts,.",
      "button": "Explore More"
    }

  ]

  const Card = ({img, name, description, button})=>(

    <>
      <div className='shadow-md truncate px-3 py-2 border border-black w-cover rounded-sm hover:bg-slate-100 h-[25rem] w-[20rem] cursor-pointer transition-all ease-out'>
        <div className='h-[15rem] w-full object-cover truncate'>
        <img className='h-[15rem] w-full object-cover hover:scale-150 duration-500' src={img} alt="loading..." />
        </div>
        <h1 className='text-2xl font-mono'>{name}</h1>
        <p className='mb-4 text-wrap'>{description}</p>
        <button className='px-3 py-1 bg-black text-white rounded-full hover:bg-white hover:text-black duration-400 hover:border hover:border-black'>{button}</button>
      </div>
    </>

  )

  return (
    <>
    <h1 className='text-3xl flex items-center justify-center my-10 font-bold'>The topic is Map</h1>
      <div className='h-fit w-full bg-white flex flex-wrap gap-5 items-center justify-center'>
      {data.map(item=>(
        <Card key={item.id} img={item.img} name={item.name} description={item.description} button={item.button} />
      ))}
    </div>
    </>
    
  )
}

export default App






// map ek object h jo ki keys ko origional order me rakhta h
//{}=> jsx --> javaScript xml
// <> => fregments
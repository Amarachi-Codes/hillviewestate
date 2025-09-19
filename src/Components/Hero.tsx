

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
     <video
     autoPlay 
     loop
     muted
     playsInline
     className='absolute inset-0 w-full h-168 object-cover'>

      <source src='/Hero_Hillview 2.mp4' type='video/mp4' />
     </video>
     <div className="relative z-10 flex items-center justify-center h-168">
    <h1 className="text-white text-5xl font-bold">Welcome to Hillview Estate</h1>
  </div>
     </div>
    </>
  )
}

export default Hero

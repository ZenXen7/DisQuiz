

 const Hero = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
    Join a Community of 
    <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> Learners </span>
    Like You!
    </h1>
    <p1 className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    Turn your learning journey into an adventure! 
Unlock rewards, beat challenges, and master 
new skills—all while having fun.
    </p1>
    <span className="mt-10 text-xl bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
    Start Your Adventure Now
    </span>
    <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">Get Started</a>
    </div>
   </div>
  )
}

export default Hero

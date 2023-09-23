import interview from '../assets/interview.png'

const HeroSection = () => {
  return (
    <div className='my-10 px-5 flex flex-col text-left md:my-20 md:mx-auto lg:flex-row justify-center items-center lg:px-20'>
      <div className="w-full lg:w-1/2 mx-4">
        <h1 className="text-3xl md:text-6xl font-blod tracking-wide mb-5 md:text-center lg:text-left">Elevate Your <span className='text-highlight'>Interview</span> Game</h1>
        <p className="text-xl text-left text-slate-300 mb-5 md:text-center lg:text-left">Unleash your potential, master the art of interviews, and step confidently into a future full of exciting career possibilities.</p>
        <div className='text-left md:text-center lg:text-left'>
          <button className='bg-buttonColor text-white text-xl px-4 py-2 rounded hover:bg-buttonHoverColor w-4/5 md:w-2/5'>Start free trial</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-7 lg:flex justify-end">
        <img src={interview} alt="interview" className="rounded-lg md:mx-auto"  />
      </div>
    </div>
  );
};

export default HeroSection;


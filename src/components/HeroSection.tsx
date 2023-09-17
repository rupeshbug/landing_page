import interview from '../assets/interview.png'

const HeroSection = () => {
  return (
    <div className='my-10 md:my-20 px-5 flex flex-col md:flex-row justify-between items-center'>
      <div className="w-full md:w-1/2 mx-4">
        <h1 className="text-4xl md:text-6xl font-blod tracking-wide mb-5 text-center md:text-left">Elevate Your <span className='text-highlight'>Interview</span> Game</h1>
        <p className="text-xl text-slate-300">Unleash your potential, master the art of interviews, and step confidently into a future full of exciting career possibilities.</p>
      </div>
      <div className="w-full md:w-1/2 mt-7 md:mt-0">
        <img src={interview} alt="interview" className="rounded-lg"  />
      </div>
    </div>
  );
};

export default HeroSection;

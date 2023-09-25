import people from '../assets/people.png';

const testimonials = [
  {
    image: people,
    name: "Jane Smith",
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam laudantium',
  },
  {
    image: people,
    name: "John Doe",
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam laudantium',
  },
  {
    image: people,
    name: "Jane Smith",
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam laudantium',
  },
  {
    image: people,
    name: "John Doe",
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam laudantium',
  },
  {
    image: people,
    name: "Jane Smith",
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam laudantium',
  },
  {
    image: people,
    name: "John Doe",
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam laudantium',
  },
];

const KnowMore = () => {
  return (
    <div className="flex flex-col py-5 px-5 md:px-20">
      <div className="my-5 mb-10">
        <h1 className="text-3xl text-center tracking-wide font-bold mb-5">Want to know more?</h1>
        <h2 className="text-xl tracking-wide text-slate-300 text-center">
          Check out these nice things people are saying about us
        </h2>
      </div>
      <div className="flex flex-wrap gap-5 w-full justify-between items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full px-2 py-3 testimonial flex items-center gap-6 border border-opacity rounded-lg cursor-pointer hoverTestimonials"
          >
            <div className="flex flex-col items-center" style={{width: "260px"}}>
              <img
                className="hoverImage"
                src={testimonial.image}
                alt="people"
                style={{ height: '60px', width: '60px', borderRadius: '50%' }}
              />
              <p className="text-slate-200 mt-2 text-center text-sm">{testimonial.name}</p>
            </div>
            <div>
              <p  style={{fontSize: '0.9rem', fontWeight: '500'}}>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowMore;

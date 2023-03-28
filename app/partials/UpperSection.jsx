export default function UpperSection() {
  return (
    <section className="grid grid-cols-2 h-60 my-4">
      <section className="flex items-center">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
         ./FForFachriza Blog
        </h1>
      </section>
      <section className="flex items-center justify-center">
        <h1 className="text-justify text-xl text-opacity-40 text-black  font-bold hover:text-opacity-100 transition-all duration-300">
          Blog about my life, my journey, my experience, my knowledge, 
          <br />
          my skills, my hobbies, my passion, my love, my hate, my everything.
        </h1>
      </section>
    </section>
  );
}

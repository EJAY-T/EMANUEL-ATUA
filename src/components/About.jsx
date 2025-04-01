export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-center">
      <div className="max-w-3xl">
        <h2 className="text-5xl font-extrabold text-black mb-6 drop-shadow-lg">
          About Me
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a Civil Engineer by profession, with a deep passion for software engineering, web design, and app development. My expertise lies in building flexible pavements and integrating technology into infrastructure to enhance efficiency and sustainability.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Beyond engineering, I am also a Software Engineer and Web Designer, constantly exploring innovative digital solutions to optimize construction processes, infrastructure management, and technological advancements.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          In addition to my technical expertise, I am the Founder and Director of <span className="font-bold text-black">Jay-T Forex Hub</span>, where I combine my analytical skills with financial market strategies, helping individuals navigate the world of forex trading and investment.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          With a unique blend of engineering, technology, and finance, I am committed to bridging the gap between infrastructure and digital transformation, leveraging my skills to create impactful solutions that drive progress.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-semibold bg-green-700 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
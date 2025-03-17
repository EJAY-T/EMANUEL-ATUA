const Projects = () => (
  <section className="p-10 text-center bg-gray-100">
    <h2 className="text-4xl font-bold text-gold">Projects</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Civil Engineering Projects */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gold">CIVIL ENG PROJECTS</h3>
        <ul className="text-gray-600 text-left list-disc pl-5">
          <li>Road Design</li>
          <li>Road Maintenance</li>
          <li>Road Inspection</li>
          <li>Surveying & Land Development</li>
          <li>Materials Engineering</li>
          <li>House Architectural Design</li>
          <li>Structural Design</li>
          <li>
            <a href="UPLOAD CERT LINK HERE" className="text-blue-500 underline">
              View Recommendation Certificates & CV
            </a>
          </li>
        </ul>
      </div>
      
      {/* Financial Market */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gold">FINANCIAL MARKET</h3>
        <ul className="text-gray-600 text-left list-disc pl-5">
          <li>
            <a href="https://hfm.com/?refid=30440649" className="text-blue-500 underline flex items-center gap-2">
              <img 
                src="/photos/Capture.JPG" 
                alt="HFM Logo" 
                className="w-6 h-6"
              />
              HFM Affiliate
            </a>
          </li>
          <li>
            <a href="https://app.fundingpips.com/certificates/verify/fd5f9266-2ea6-4fcf-bf58-25badaf8753a" className="text-blue-500 underline">
              Certified Forex Trader
            </a>
          </li>
          <li>
            Founder: <strong>Jay-T Forex Hub</strong> - Expert in ICT Concepts
            <div className="mt-2 flex items-center gap-2">
              <img 
                src="/photos/logo.jpeg"  
                alt="Jay-T Forex Hub Logo" 
                className="w-10 h-10"
              />
              <a href="https://t.me/JayTforexhub" className="text-blue-500 underline flex items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
                  alt="Telegram" 
                  className="w-5 h-5"
                />
                Telegram Channel
              </a>
            </div>
          </li>
        </ul>
      </div>
      
      {/* Software Design */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gold">SOFTWARE DESIGN</h3>
        <ul className="text-gray-600 text-left list-disc pl-5">
          <li>Languages: HTML, CSS, JavaScript</li>
          <li>React JS</li>
          <li>Web Development</li>
          <li>App Development</li>
          <li>
            <a href="https://drive.google.com/file/d/19YOUvJSkMN4df5VsIUrsDRJH32Nhcc_F/view?usp=drivesdk" className="text-blue-500 underline">
              Skies Rapid TECH Program Admission
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;

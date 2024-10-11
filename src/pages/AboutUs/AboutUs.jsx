import Footer from "../../components/Footer";
import MemberWrapper from "../../components/MemberWrapper";
import Navbar from "../../components/Navbar";
import amandaImage from 'src/assets/images/amanda.png';
import myAiImage from 'src/assets/images/myAi.png';
import chelImage from 'src/assets/images/chel.png';
import esiImage from 'src/assets/images/esi.png';
import img2 from 'src/assets/images/img2.png';
import img4 from 'src/assets/images/img4.png';



function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="about-header-wrapper relative pb-10 text-center">
  <h1 className="text-stroke text-[#FACC15] text-5xl font-extrabold tracking-wider">
    ABOUT US
  </h1>
</div>

{/* Our Mission Section */}
<div className="flex flex-col lg:flex-row justify-around items-center mt-10 space-y-8 lg:space-y-0">
  <div className="lg:w-1/2 flex justify-center">
    <img src={img2} alt="About Us" className="rounded-lg shadow-lg max-w-full lg:max-w-md" />
  </div>
  
  <div className="lg:w-1/2 px-4 lg:px-0">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR MISSION</h2>
    <p className="text-lg leading-relaxed text-gray-700">
      "Our mission is to inspire a love for reading and learning by providing 
      a diverse selection of books and resources, fostering a community of knowledge seekers, 
      and creating welcoming spaces that encourage exploration and growth."
    </p>
  </div>
</div>

{/* Meet Our Team Section */}
<div className="pt-20 text-center">
  <h2 className="text-4xl font-bold mb-6">MEET OUR TEAM</h2>
  <p className="w-full lg:w-3/5 mx-auto text-lg text-gray-600 leading-relaxed mb-10">
    "Meet our passionate team of readers and creative thinkers dedicated to providing exceptional service.
    Together, we bring our mission to life and foster a community that shares a love for books."
  </p>

  {/* Team Members Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
    <MemberWrapper image={amandaImage} name="Amanda" role="Back-end Developer" />
    <MemberWrapper image={myAiImage} name="Gideon Odoom" role="Back-end Developer" />
    <MemberWrapper image={chelImage} name="Recheal" role="Front-end Developer" />
    <MemberWrapper image={esiImage} name="Ewurasi Ayanful Nyarkoa" role="Front-end Developer" />
  </div>
</div>

{/* Our Services Section */}
<div className="flex flex-col lg:flex-row justify-around items-center mt-20 space-y-8 lg:space-y-0">
  <div className="lg:w-1/2 flex justify-center">
    <img src={img4} alt="Our Services" className="rounded-lg shadow-lg max-w-full lg:max-w-md" />
  </div>

  <div className="lg:w-1/2 px-4 lg:px-0">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR SERVICES</h2>
    <p className="text-lg leading-relaxed text-gray-700">
      "We offer a wide range of services designed to enhance your literary journey, including personalized book recommendations, engaging author events, workshops,
      and access to exclusive online resources. Whether you're a casual reader or a passionate bibliophile, we have something for everyone."
    </p>
  </div>
</div>

<Footer />
    </div>
  )
}

export default AboutUs

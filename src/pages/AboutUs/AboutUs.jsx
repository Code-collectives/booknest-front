import MemberWrapper from "../../components/MemberWrapper"

function AboutUs() {
  return (
    <div>
 <div className="about-header-wrapper relative pb-10 text-center">
  <h1 className="text-stroke text-[#FACC15] text-5xl">ABOUT US</h1>

</div>

<div className="flex justify-around items-center mt-10">
  <div>
    <img src="src/assets/images/img2.png" alt="About Us" className="rounded-lg shadow-md" />
  </div>
  
  <div className="w-[40%]">
    <h2 className="text-2xl font-bold">OUR MISSION</h2>
    <p className="mt-2 text-gray-700">
    "Our mission is to inspire a love for reading and learning by providing 
    a diverse selection of books and resources, fostering a community of knowledge seekers, 
    and creating welcoming spaces that encourage exploration and growth."
    </p>
  </div>
</div>

<div className="pt-20 text-center">
  <h2 className="text-3xl font-bold">MEET OUR TEAM</h2>
  <p className="mt-2 w-3/4 mx-auto text-gray-600">
  "Meet our passionate team of readers and creative thinkers dedicated to providing exceptional service.
   Together, we bring our mission to life and foster a community that shares a love for books."
  </p>
</div>

<div className="flex justify-around mt-10">
  <MemberWrapper image='src/assets/images/amanda.png' name="Amanda" role="Back-end Developer" />
  <MemberWrapper image='src/assets/images/animate_image2.jpg' name="Gideon" role="Back-end Developer" />
  <MemberWrapper image='src/assets/images/chel.png' name="Recheal" role="Front-end Developer" />
  <MemberWrapper image='src\assets\images\esi.png' name="Ewurasi Ayanful Nyarkoa" role="Front-end Developer" />
</div>

<div className="flex justify-around items-center mt-20">
  <div>
    <img src="src/assets/images/img4.png" alt="Our Services" className="rounded-lg shadow-md" />
  </div>
  
  <div className="w-[40%]">
    <h2 className="text-2xl font-bold">OUR SERVICES</h2>
    <p className="mt-2 text-gray-700">
    "We offer a wide range of services designed to enhance your literary journey, including personalized book recommendations, engaging author events, workshops,
     and access to exclusive online resources. Whether you're a casual reader or a passionate bibliophile, we have something for everyone."
     </p>
  </div>
</div>

    </div>
  )
}

export default AboutUs

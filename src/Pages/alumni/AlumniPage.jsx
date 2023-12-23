import React from "react";
import ProfileCard from "./ProfileCard";

function AlumniPage() {
  // Data of all Alumni is placed here in the form of 'array of object'. In future if anyone want to add new alumni in page , you jus have to add their details in the form of object into this Array. example:- { name: "...", course: "...", details: "...", batch: "...", image:"path of image" },
  //image should be in the public/assets/alumniImage/imageName.jpg/png...| AND CROP THE IMAGE INTO 1:1 ASPECT RATIO.
  const alumniData = [
    {
      name: "Ankush Khanna",
      course: "B.sc (H) Computer Science",
      details: "Software Development Engineer II at Zomato",
      batch: "2016 - 2019",
      image: "./assets/alumniImage/AnkushKhanna.png",
    },
    {
      name: "Tarun khanna",
      course: "B.sc (H) Computer Science",
      details: "Knowledge excel private limited. Director",
      batch: "2002 - 2005",
      image: "/assets/alumniImage/TarunKhanna.jpeg",
    },
    {
      name: "Gaurav Arora",
      course: "B.sc (H) Computer Science",
      details: "Working with Deloitte Consulting USI as a Specialist Master",
      batch: "2004-2007",
      image: "/assets/alumniImage/GauravArora.jpg",
    },
    {
      name: "Himank",
      course: "B.sc (H) Computer Science",
      details: "IIM Ranchi MBA Batch of 25",
      batch: "2019-22",
      image: "/assets/alumniImage/BA048-23_PHOTO.png",
    },
    {
      name: "Shruti Garg",
      course: "B.sc (H) Computer Science",
      details: "MBA at KJ Saumya Institute of Managment",
      batch: "2019-22",
      image: "/assets/alumniImage/Shruti.png",
    },
    {
      name: "Varchasva Khulbe",
      course: "B.sc (H) Computer Science",
      details: "MBA from SIBM Pune",
      batch: "2019-22",
      image: "/assets/alumniImage/Varchasva.png",
    },
    {
      name: "Himanshu Singhal",
      course: "B.sc (H) Computer Science",
      details: "Senior Software Engineer at Info Edge India Ltd.",
      batch: "2017",
      image: "/assets/alumniImage/Himanshu.png",
    },
    {
      name: "Dishika Ruhela",
      course: "B.sc (H) Computer Science",
      details: "MCA (2023-2025) from IGDTUW",
      batch: "2019-22",
      image: "/assets/alumniImage/dishika.jpg",
    },
    {
      name: "Yamini Goel",
      course: "B.sc (H) Computer Science",
      details: "Software Engineer",
      batch: "2014-17",
      image: "/assets/alumniImage/YaminiGoel.jpg",
    },
    {
      name: "Manish Chauhan",
      course: "B.sc (H) Computer Science",
      details: "Punjab National Bank; Scale-1 Officer",
      batch: "2017-2020",
      image: "/assets/alumniImage/ManishChauhan.jpg",
    },
    {
      name: "Dr. Chhavi Sharma",
      course: "B.sc (H) Computer Science",
      details: "Assistant Professor",
      batch: "2010",
      image: "/assets/alumniImage/ChhaviSharma.jpg",
    },
    {
      name: "Pooja Rana",
      course: "B.sc (H) Computer Science",
      details: "Guest Faculty DDUC",
      batch: "2013-2016",
      image: "/assets/alumniImage/Pooja.jpg",
    },
    {
      name: "Neha Tomar",
      course: "B.sc (H) Computer Science",
      details: "Guest Faculty DDUC",
      batch: "2013-2016",
      image: "/assets/alumniImage/Neha.jpg",
    },
    {
      name: "Tanisha Roy",
      course: "B.sc (H) Computer Science",
      details: "Ciena - Embedded Software Engineer 1",
      batch: "2018-2021",
      image: "/assets/alumniImage/TanishaRoy.jpg",
    },
    {
      name: "Ankit",
      course: "B.sc (H) Computer Science",
      details: "Info Edge - Software Engineer",
      batch: "2017-2020",
      image: "/assets/alumniImage/AnkitKumar.jpg",
    },
    {
      name: "Ankit Rajpal",
      course: "B.sc (H) Computer Science",
      details: "Assistant Professor",
      batch: "2004-07",
      image: "/assets/alumniImage/AnkitRajpal.jpg",
    },
    {
      name: "Vaniya",
      course: "B.sc (H) Computer Science",
      details: "SDE-1 at Truminds Software Solutions",
      batch: "2018-2021",
      image: "/assets/alumniImage/Vaniya.JPG",
    },
    {
      name: "Arpan Agrawal",
      course: "B.sc (H) Computer Science",
      details: "Greyorange Robotics principal architect",
      batch: "2004-2007",
      image: "/assets/alumniImage/ArpanAgrawal.jpeg",
    },
    {
      name: "Anmol Mehta",
      course: "B.sc (H) Computer Science",
      details: "Software Engineer at Apple India Pvt Ltd.",
      batch: "2014",
      image: "/assets/alumniImage/AnmolMehta.jpeg",
    },
    {
      name: "Ramit Taneja",
      course: "B.sc (H) Computer Science",
      details: "Hewlett Packard",
      batch: "06-09",
      image: "/assets/alumniImage/RamitTaneja.jpg",
    },
    {
      name: "Pankaj Bahl",
      course: "B.sc (H) Computer Science",
      details: "Kingston multi products India pvt Ltd",
      batch: "2007",
      image: "/assets/alumniImage/PankajBahl.jpg",
    },
    {
      name: "Hunny Tokas",
      course: "B.sc (H) Computer Science",
      details: "PGT COMPUTER SCIENCE",
      batch: "2011-14",
      image: "/assets/alumniImage/hunnyTokas.jpg",
    },
    {
      name: "Squadron Leader Umang Gupta",
      course: "B.sc (H) Computer Science",
      details: "Helicopter Pilot at Indian Air Force",
      batch: "2009-2012",
      image: "/assets/alumniImage/UmangGupta.jpeg",
    },
    {
      name: "Dr. Sachin Gupta",
      course: "B.sc PSCS",
      details: "Dean",
      batch: "1996-99",
      image: "/assets/alumniImage/sachingupta.jpg",
    },
    {
      name: "Umang Bhargava",
      course: "B.sc (H) Computer Science",
      details: "Cisco",
      batch: "2012-2015",
      image: "/assets/alumniImage/UmangBhargava.jpg",
    },
    {
      name: "Aastha Agarwal",
      course: "B.sc (H) Computer Science",
      details: "American Express (Software Engineer)",
      batch: "2021",
      image: "/assets/alumniImage/AasthaAgarwal.jpg",
    },
    {
      name: "Bhawna Sehgal",
      course: "B.sc (H) Computer Science",
      details: "Co-founder",
      batch: "2017-2020",
      image: "/assets/alumniImage/BhawnaSehgal.jpg",
    },
    {
      name: "Sumit Yadav",
      course: "B.sc (H) Computer Science",
      details: "Product Owner",
      batch: "2014-2017",
      image: "/assets/alumniImage/SumitYadav.jpg",
    },
    {
      name: "Gaurav Kumar",
      course: "B.sc (H) Computer Science",
      details: "Front-end Devloper",
      batch: "2019-22",
      image: "/assets/alumniImage/gaurav.jpg",
    },
    {
      name: "Ankita Saha",
      course: "B.sc (H) Computer Science",
      details:
        "Research Assistant at Institute of Parallel and Distributed Systems",
      batch: "2019-22",
      image: "/assets/alumniImage/AnkitSaha.jpg",
    },
  ];

  return (
    <>
      {/* alumniPage layout */}
      <section className="bg-[#1e1e1e]  p-5 font-Poppins">
        <div className="my-1.5  mx-auto text-[#bcd1d9] md:w-[85%] w-[90%]">
          <h1 className="pb-4 mb-1 text-left md:text-6xl text-5xl">
            Our Alumni
          </h1>
          <p className="text-md font-light">
            Step back into the halls of nostalgia as you explore our Alumni
            Page. Here, you'll find updates, events, and a community eager to
            reconnect. Cherish memories, celebrate successes, and stay engaged
            with your alma mater. Your journey continues with us—welcome back!
          </p>
        </div>
        <div className="flex flex-wrap my-2 justify-center items-center p-0.5">
          {alumniData.map((alumni, index) => (
            <ProfileCard //mapping alumniData for rendering in alumniCard.js
              key={index}
              indexData={index}
              name={alumni.name}
              image={alumni.image}
              details={alumni.details}
              course={alumni.course}
              batch={alumni.batch}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AlumniPage;

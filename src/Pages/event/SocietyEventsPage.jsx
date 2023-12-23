import React from 'react';
import EventCard from './EventCard'; // Path to your EventCard component
//this page conatins all data regarding events and displaying them using eventcard
const SocietyEventsPage = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: '1. Outreach Program',
      description1: 'On October 19-20, 2023, our outreach program for "Asha Grih Children Home" successfully equipped children with essential computer skills and MS Office knowledge, fueled by their overwhelming enthusiasm.',
      description2:'Collaborative efforts of the organizing committee, speakers, and the council, guided by our esteemed teacher, led to the program\'s success. Certificates were awarded to acknowledge the contributions of both participating children and organizers.',
      description3:'Sanganika\'s outreach program empowered underprivileged children, showcasing the positive impact of such initiatives. With unwavering enthusiasm and dedicated efforts, we anticipate more meaningful endeavors in the future.',
      poster: '/assets/event/Events/poster2.svg',
      images: ['/assets/event/Events/1.svg','/assets/event/Events/2.svg','/assets/event/Events/3.svg'],
    },
    {
      id: 2,
      title: '2. Google Workspace and Linked in workshop',
      description1: `Embarking on the 2023-24 term, Sanganika, the Computer Science Society, ignited the stage with an empowering workshop titled "Google Workspace and LinkedIn Management." It wasn't your average affair but a digital rollercoaster of skills and insights.`,
      description2:'The workshop unfolded in two acts. Act one immersed students in the vibrant world of Google Workspace, mastering collaboration with Slides, Sheets, Docs, Google Forms, and the Autocrat Extension. Act two spotlighted LinkedIn profile mastery, transforming it into a professional haven for crafting career narratives, networking, and gaining insider tips.',
      description3:'This workshop was no spectator sport; it was an immersive experience turning theory into real-world skills. The resounding success celebrated not just Sanganika but every participant diving into the digital deep end, promising more mind-blowing workshops ahead. Preparing for the digital future is a journey best taken together, one workshop at a time!',
      poster: '/assets/event/Events/poster1.svg',
      images: ['/assets/event/Events/4.svg','/assets/event/Events/5.svg','/assets/event/Events/6.svg'],
    }
    //more events can be added
  ];

  return (
    <div >
      <h1 className="text-3xl font-bold mb-6">Events and Gallery</h1>
      <p className="text-gray-300 mb-4">Welcome to our digital chronicle—a vibrant space showcasing the creativity and intellect of our community. Dive into diverse events, from hackathons to design challenges, capturing shared learning and triumphs. Explore our gallery, freeze-framing moments of joy and brilliance. Join us in reliving these experiences and stay tuned for upcoming events shaping our ever-evolving saga</p>
      <hr className="border-t-2 border-solid border-green-300" />
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default SocietyEventsPage;

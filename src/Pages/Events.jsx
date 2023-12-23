import React from 'react'
import SocietyEventsPage from './event/SocietyEventsPage'
import SocietyTripPage from './event/SocietyTripPage'
import AnnualFestPage from './event/AnnualFestPage'
//this conatins all the components to be rendered over our  page
function Events() {
  return (
    <div className="bg-gray-900  text-white container mx-auto p-6 ">
      {/* Set background color and text color */}
      <SocietyEventsPage /> {/* Render your main page/component */}
      <SocietyTripPage></SocietyTripPage>
      <AnnualFestPage></AnnualFestPage>
    </div>
  )
}

export default Events
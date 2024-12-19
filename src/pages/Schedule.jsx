import React from "react";
import { motion } from "framer-motion";

const scheduleData = [
  {
    time: "9:00 AM - 10:00 AM",
    event: "Registration & Breakfast",
    description:
      "Kickstart the day by registering for the event and enjoying a delicious breakfast. Meet other attendees and get familiar with the schedule.",
    image:
      "https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2019/06/Registration-and-stamp-duty-fees-1.jpg",
  },
  {
    time: "10:00 AM - 11:00 AM",
    event: "Keynote Speech",
    description:
      "An inspiring keynote speech by our guest speaker, addressing the latest trends and innovations in the industry.",
    image:
      "https://i0.wp.com/publicwords.com/wp-content/uploads/2019/08/shutterstock_1014039049.jpg?fit=1000%2C665&ssl=1",
  },
  {
    time: "11:15 AM - 1:00 PM",
    event: "Technical Sessions",
    description:
      "Engage in interactive technical sessions led by experts. Topics range from AI advancements to practical implementation strategies.",
    image:
      "https://www.europm2019.com/images/phocagallery/technical/thumbs/phoca_thumb_l_141019-473LowRes.jpg",
  },
  {
    time: "1:00 PM - 2:00 PM",
    event: "Lunch Break",
    description:
      "Enjoy a variety of cuisines and take this opportunity to network with other participants.",
    image:
      "https://static.vecteezy.com/system/resources/previews/018/731/262/non_2x/modern-lunch-break-logo-design-lunch-break-sticker-design-lunch-break-t-shirt-design-hand-lettered-calligraphic-design-vector.jpg",
  },
  {
    time: "2:00 PM - 4:00 PM",
    event: "Workshops & Panel Discussions",
    description:
      "Participate in hands-on workshops and gain insights from panel discussions featuring industry leaders.",
    image:
      "https://fourwaves.com/media/0inneadj/evangeline-shaw-nwltvwb7dbu-unsplash.jpg?rmode=min&width=1560&format=jpeg&quality=90&bgcolor=fff&rnd=132998674919900000",
  },
  {
    time: "4:00 PM - 5:00 PM",
    event: "Closing Remarks & Networking",
    description:
      "Wrap up the event with final remarks and connect with fellow attendees for future collaborations.",
    image:
      "https://nova-live.imgix.net//migration-ProfessionalNetworkingIMGT.jpg",
  },
];

const Schedule = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 py-16">
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-5xl font-extrabold mt-16 text-center text-pink-600 mb-20">
          Event Schedule
        </h1>
        <div className="space-y-20 flex flex-col items-center">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image Section */}
              <div className="w-96 h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.event}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Content */}
              <div className="bg-white text-center p-8 rounded-lg shadow-lg flex-grow max-w-xl border-l-4 border-pink-500">
                <h2 className="text-2xl font-bold text-pink-700 mb-4">
                  {item.time}
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.event}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Shapes */}
      <motion.div
        className="absolute top-16 left-16 w-64 h-64  max-md:hidden bg-gradient-to-r from-purple-400 to-pink-500 rounded-full z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-r from-pink-400 to-yellow-500 rounded-lg z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Schedule;

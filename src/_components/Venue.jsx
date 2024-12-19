import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  GoogleMap,
  LoadScript,
  MarkerF as Marker, // Using MarkerF (new component with support for the latest markers)
  InfoWindow,
} from "@react-google-maps/api";

// Coordinates for St. Joseph's Institute of Technology, Chennai
const position = { lat: 13.0389, lng: 80.1862 };

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const Venue = () => {
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((e) => {
    setSelected({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 to-blue-300 py-16">
      <div className="container mx-auto px-6 z-10">
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold mt-16 text-center text-blue-800 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Venue 🌍
        </motion.h1>

        {/* Venue Map Section */}
        <motion.div
          className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            St. Joseph's Institute of Technology, Chennai 🏫
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Our college is located in the heart of Chennai, offering a diverse
            and engaging campus experience. Find the location on the map below!
            📍
          </p>

          {/* Google Map using @react-google-maps/api */}
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={16}
              onClick={onMapClick}
            >
              {/* Marker */}
              <Marker
                position={position}
                onClick={() => setSelected(position)}
              />

              {/* InfoWindow */}
              {selected && (
                <InfoWindow
                  position={selected}
                  onCloseClick={() => setSelected(null)}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">
                      St. Joseph's Institute of Technology
                    </h3>
                    <p>Located in the heart of Chennai.</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            How to Reach Us 📍
          </h3>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>
              Located on OMR, Chennai - a central and accessible location 🚗
            </li>
            <li>Nearby bus stops and metro stations 🚉</li>
            <li>Ample parking space for visitors and staff 🚗</li>
          </ul>
        </motion.div>
      </div>

      {/* Background Gradient Shapes */}
      <motion.div
        className="absolute top-16 left-16 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full z-0"
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

export default Venue;

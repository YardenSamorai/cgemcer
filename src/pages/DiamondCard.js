import React from "react";
import TC167C from "../imges/TC167C.jpg";
import Certef from "../imges/Certef.png";

const DiamondCard = ({ details }) => {
  return (
    <div className="max-w-3xl mx-auto p-6  shadow-lg rounded-lg border border-gray-200 bg-white">
      {/* Diamond Details */}
      <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Diamond Details</h2>
      <div className="grid grid-cols-1 ml-28 sm:grid-cols-2 gap-x-44 gap-y-4 text-gray-700 text-md">
        <p><span className="font-semibold">Stone ID:</span> <span className="text-green-600">{details.stone_id}</span></p>
        <p><span className="font-semibold">Shape:</span> <span className="text-green-600">{details.shape}</span></p>
        <p><span className="font-semibold">Carat:</span> <span className="text-green-600">{details.carat}</span></p>
        <p><span className="font-semibold">Clarity:</span> <span className="text-green-600">{details.clarity}</span></p>
        <p><span className="font-semibold">Lab:</span> <span className="text-green-600">{details.lab}</span></p>
        <p><span className="font-semibold">Origin:</span> <span className="text-green-600">{details.origin}</span></p>
        <p><span className="font-semibold">Measurements:</span> <span className="text-green-600">{details.Measurements}</span></p>
        <p><span className="font-semibold">Ratio:</span> <span className="text-green-600">{details.ratio}</span></p>
        <p><span className="font-semibold">Certificate #:</span> <a href="#" className="text-green-600 underline">{details.certificate_number}</a></p>
        <p><span className="font-semibold">Price C/T:</span> <span className="font-bold text-green-700">{details.price}</span></p>
      </div>
      
      {/* Total Price */}
      <p className="text-center font-semibold text-xl text-green-700 mt-4">Total Price: {details.total_price}</p>
      
      {/* Image & Certificate */}
      <div className="grid grid-cols-1 w-112/12 md:grid-cols-2 gap-4 mt-8 text-center">
        <div>
          <h3 className="font-semibold text-gray-700">Photo</h3>
          <img 
            src={TC167C} 
            alt="Diamond" 
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Certificate</h3>
          {details.cert_pdf ? (
            <a href={details.cert_pdf} target="_blank" rel="noopener noreferrer">
              {details.cert_img ? (
                <img 
                  src={Certef} 
                  alt="Certificate Preview" 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
              ) : (
                <p className="text-green-600 underline">View Certificate (PDF)</p>
              )}
            </a>
          ) : (
            <p className="text-gray-500">No Certificate Available</p>
          )}
        </div>
      </div>
      
      {/* Video Placeholder */}
      <div className="mt-6 text-center">
        <h3 className="font-semibold text-gray-700">Video</h3>
        {details.video ? (
          <iframe
            className="w-full h-96 rounded-lg"
            src={details.video}
            title="Video Preview"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">No Video Available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiamondCard;

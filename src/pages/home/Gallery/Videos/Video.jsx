import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const VideoGallery = () => {


    const videos = [
        {
          thumbnail: 'fav.jpg',
          videoLink: 'https://www.youtube.com/watch?v=boj_0zKbalQ',
        },
        {
          thumbnail: 'home banner.jpg',
          videoLink: 'https://www.youtube.com/watch?v=d9Bbe1E_zr4',
        },
        {
          thumbnail: 'homedesign12.jpg',
          videoLink: 'https://www.youtube.com/watch?v=fVkkFleYK5Y',
        },
        {
          thumbnail: 'homedesign10.jpg',
          videoLink: 'https://www.youtube.com/watch?v=ioSb6nxBLZc',
        },
        {
          thumbnail: 'homedesign9.jpg',
          videoLink: 'https://www.youtube.com/watch?v=lC_Ab5e-64A',
        },
        {
          thumbnail: 'homedesign8.jpg',
          videoLink: 'https://www.youtube.com/watch?v=iQdXDSEUxGY',
        },
        {
          thumbnail: 'homedesign7.jpg',
          videoLink: 'https://www.youtube.com/watch?v=Hh2sJKIeZ4I',
        },
        {
          thumbnail: 'homedesign12.jpg',
          videoLink: 'https://www.youtube.com/watch?v=d9Bbe1E_zr4',
        },
     
        // Add more video thumbnails and links
      ];

  const openVideo = (videoLink) => {
    window.open(videoLink, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-[#17253b] from-0% to-[#1b3969] to-100% py-12 section-container mt-16 p-12">
      <div>
        <h1 className="text-3xl font-bold mb-6 mt-6 ml-6 mr-6 text-white">Watch Our Work Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openVideo(video.videoLink)}
            >
              <img
                src={video.thumbnail}
                alt={`video-${index}`}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg transition duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaYoutube className="text-rose-700 text-7xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;

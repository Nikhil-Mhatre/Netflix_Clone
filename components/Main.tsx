import React from 'react'
import { MdFileDownload } from 'react-icons/md'

function Main() {
  return (
    <>
    {/* Enjoy on TV section */}
    <section
        className="flex flex-col items-center justify-center bg-black
       text-white lg:h-full lg:flex-row lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">Enjoy on your TV</h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="relative z-10">
          <div
            className="absolute left-12 top-16 -z-10
          md:left-20 md:top-24 lg:left-14 lg:top-16"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/images/home/home-tv-video.m4v"
            />
          </div>
          <img
            src="/images/home/home-tv-img.png"
            alt="home-tv"
            className="opacity-90"
          />
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* Download show section */}
      <section
        className="flex flex-col items-center justify-center bg-black
       py-12 text-white lg:h-full lg:flex-row-reverse lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">
            Download your shows to watch offline
          </h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="/images/home/home-download-img.jpg" alt="" />
          <div
            className="text flex items-center justify-center gap-4
          rounded-lg border-2 border-gray-500 px-6 py-2"
          >
            <img
              className="h-full w-10"
              src="/images/home/home-download-st-img.png"
              alt=""
            />
            <p className="flex flex-col items-start justify-center">
              <span className="font-bold">Stranger Things</span>
              <span className="text-sm text-blue-500">Dowloading</span>
            </p>
            <MdFileDownload className="text-blue-600" size={30} />
          </div>
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* Watch Everywhere sections */}
      <section
        className="flex flex-col items-center justify-center bg-black
       text-white lg:h-full lg:flex-row lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">Watch everywhere</h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="relative z-10">
          <div
            className="absolute left-32 top-10 -z-10 w-6/12
          md:left-36 md:top-16 md:w-7/12 lg:left-24 lg:top-11"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/images/home/home-watch-video.m4v"
            />
          </div>
          <img src="/images/home/home-watch-img.png" alt="home-tv" />
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
      {/* kids section */}
      <section
        className="flex flex-col items-center justify-center bg-black
       text-white lg:h-full lg:flex-row-reverse lg:px-32"
      >
        <div
          className="flex flex-col items-center justify-center gap-6 p-12
        lg:items-start"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">
            Create profiles for kids
          </h1>
          <p className="text-sm font-semibold md:text-lg lg:text-xl">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <div>
          <img src="/images/home/home-kids-img.png" alt="" />
        </div>
      </section>
      <div className="h-2 w-full bg-gray-500 " />
    </>
  )
}

export default Main
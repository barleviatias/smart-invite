"use client";
import React, { useState, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useSearchParams, usePathname } from 'next/navigation';

const DateInvitation = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const to = searchParams.get('to');
  const from = searchParams.get('from');
  const phoneNumber = searchParams.get('phoneNumber');
  const proposal = searchParams.get('proposal');

  const [saidYes, setSaidYes] = useState(false);
  const noBtnRef = useRef(null);

  const sayYes = () => {
    setSaidYes(true);
  };

  const moveButton = () => {
    if (noBtnRef.current) {
      const x = Math.random() * (window.innerWidth - noBtnRef.current.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtnRef.current.offsetHeight);
      noBtnRef.current.style.left = `${x}px`;
      noBtnRef.current.style.top = `${y}px`;
    }
  };

  const shareUrl = () => {
    const url = `${window.location.origin}${pathname}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy URL: ', err);
      });
  };

  const shareOnWhatsApp = () => {
    const url = `${window.location.origin}${pathname}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (saidYes) {
    return (
      <div dir="rtl" className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-black">
        <Player
          src="https://lottie.host/609f8225-e770-4168-86c5-b69c5a61195f/rbp1wRThR0.json"
          background="transparent"
          speed={1}
          style={{ width: '300px', height: '300px', margin: '0 auto' }}
          loop
          autoplay
        />
        
        <h1 className="text-4xl font-bold mb-4 text-pink-600">יש! 🎉</h1>
        <p className="text-xl mb-8 text-pink-800">אני כל כך שמח/ה שאמרת כן!</p>
        
        <div className="text-center">
          <p className="text-lg mb-2 text-pink-700">נפגש ב:</p>
          <p className="text-2xl font-semibold text-pink-900">יום שישי, 20:00</p>
          <p className="text-xl text-pink-800">במסעדה האהובה עלינו 🍽️</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">To: {to}</h2>
        <h2 className="text-2xl font-bold mb-4">From: {from}</h2>
        <h2 className="text-2xl font-bold mb-4">Phone Number: {phoneNumber}</h2>
        <h2 className="text-2xl font-bold mb-4">Proposal: {proposal}</h2>

        <Player
          src="https://lottie.host/d8cdab7a-74ce-4a21-9eb9-94c7e839142a/ebx71dR66E.json"
          background="transparent"
          speed={1}
          style={{ width: '300px', height: '300px', margin: '0 auto' }}
          loop
          autoplay
        />
        
        <h1 className="text-4xl font-bold mb-8">היי {to}</h1>
        <h1 className="text-4xl font-bold mb-8">{proposal}</h1>
        
        <div className="buttons space-x-4">
          <button
            className="btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={sayYes}
          >
            כן 🥳
          </button>
          <button
            ref={noBtnRef}
            className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded absolute"
            onMouseOver={moveButton}
          >
            לא 👎
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={shareUrl}
          >
            Copy Link
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={shareOnWhatsApp}
          >
            Share on WhatsApp
          </button>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={shareUrl}
        >
          Share Invitation
        </button>
      </div>
    </div>
  );
};

export default DateInvitation;
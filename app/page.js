'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';

export default function Home() {
  const [formData, setFormData] = useState({
    to: "",
    from: "",
    phoneNumber: "",
    proposal: "",
    date: "", // Add this line
    time: "", // Add this line
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const inviteId = nanoid(); // Generate a unique ID
      const shareUrl = `/invite/${inviteId}?to=${formData.to}&from=${formData.from}&phoneNumber=${formData.phoneNumber}&proposal=${formData.proposal}&date=${formData.date}&time=${formData.time}`;
      router.push(shareUrl);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.to) {
      errors.to = "שדה זה הוא חובה";
    }

    if (!formData.from) {
      errors.from = "שדה זה הוא חובה";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "שדה זה הוא חובה";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "מספר הטלפון חייב להכיל רק ספרות";
    }

    if (!formData.proposal) {
      errors.proposal = "שדה זה הוא חובה";
    }

    // Add these blocks
    if (!formData.date) {
      errors.date = "שדה זה הוא חובה";
    }

    if (!formData.time) {
      errors.time = "שדה זה הוא חובה";
    }

    return errors;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" dir="rtl">
      <header className="bg-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">הזמנה שקשה לסרב לה</h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto text-black"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">צור הזמנה</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="to"
            >
              אל
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.to ? 'border-red-500' : 'focus:border-purple-500'}`}
              id="to"
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="הכנס שם"
            />
            {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="from"
            >
              מאת
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.from ? 'border-red-500' : 'focus:border-purple-500'}`}
              id="from"
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="הכנס שם"
            />
            {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phoneNumber"
            >
              מספר טלפון
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber ? 'border-red-500' : 'focus:border-purple-500'}`}
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="הכנס מספר טלפון"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="proposal"
            >
              הצעה
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.proposal ? 'border-red-500' : 'focus:border-purple-500'}`}
              id="proposal"
              type="text"
              name="proposal"
              value={formData.proposal}
              onChange={handleChange}
              placeholder="הכנס הצעה"
            />
            {errors.proposal && <p className="text-red-500 text-sm mt-1">{errors.proposal}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              תאריך
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.date ? 'border-red-500' : 'focus:border-purple-500'}`}
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="time"
            >
              שעה
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.time ? 'border-red-500' : 'focus:border-purple-500'}`}
              id="time"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            שלח
          </button>
        </form>
      </main>

      <footer className="bg-white py-4 shadow mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} הזמנה חכמה. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}
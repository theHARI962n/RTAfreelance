import { useState } from "react";

export default function WaitlistModal({
  isOpen,
  onClose,
  courseName,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-3xl bg-[#fffef9] border border-[#e8e2d8] p-6 shadow-xl">

        <h2 className="text-2xl font-light text-[#2c2218]">
          Join Waitlist
        </h2>

        <p className="mt-2 text-sm text-[#6b5d4f]">
          We'll notify you when the next batch opens.
        </p>

        <div className="mt-6 space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#e8e2d8] px-4 py-3 bg-white outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#e8e2d8] px-4 py-3 bg-white outline-none"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#e8e2d8] px-4 py-3 bg-white outline-none"
          />

          <div className="rounded-xl bg-[#faf8f3] border border-[#e8e2d8] px-4 py-3 text-sm text-[#6b5d4f]">
            Course: {courseName}
          </div>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 rounded-full border border-[#e8e2d8] py-3"
          >
            Cancel
          </button>

          <button
            className="flex-1 rounded-full bg-[#2c2218] text-white py-3"
          >
            Join Waitlist
          </button>

        </div>
      </div>
    </div>
  );
}
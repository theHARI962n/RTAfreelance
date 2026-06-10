import { useState } from "react";



export default function WaitlistModal({
  isOpen,
  onClose,
  courseName,
}) {

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);


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

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://rta-backend-kuz4.onrender.com/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          course: courseName,
        }),
      });

      const data = await response.json();

      // alert(data.message);

      // onClose();

      if (!response.ok) {
        setMessage(data.message || "Failed to save waitlist entry");
        setMessageType("error");
        return;
      }


      setMessage(data.message);
      setMessageType("success");

      setTimeout(() => {
        onClose();

        setFormData({
          name: "",
          phone: "",
          city: "",
        });

        setMessage("");
        setMessageType("");
      }, 2000);

      


    } catch (error) {
      console.error(error);
      setMessage("Failed to save waitlist entry");
      setMessageType("error");
    }
  };




  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-3xl bg-[#fffef9] border border-[#e8e2d8] p-6 shadow-xl">
        <h2 className="text-2xl font-light text-[#2c2218]">Join Waitlist</h2>

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

        {message && (
          <div
            className={`mt-4 rounded-xl px-4 py-3 text-sm border ${
              messageType === "success"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {message}
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-full border border-[#e8e2d8] py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 rounded-full bg-[#2c2218] text-white py-3"
          >
            {loading ? "Submitting..." : "Join Waitlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
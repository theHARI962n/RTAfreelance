import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../Landingpage/FooterSection";
import fashionImg from "../../../src/assets/carousel/fash.jpg";
import muralImg from "../../../src/assets/carousel/mural.jpg";
import tanjoreImg from "../../../src/assets/carousel/tanj.png";
import aariImg from "../../../src/assets/carousel/aari.jpg";
import AnnouncementStrip from "../Landingpage/AnnouncementStrip";
import WaitlistModal from "../Landingpage/WaitlistModal";
import { useState } from "react";

export default function AariEmbroidery() {

  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      {/* Back Button */}
      <div className="absolute top-24 left-6 z-20">
        <Link
          to="/"
          className="flex items-center gap-2 text-white/90 hover:text-white text-sm"
        >
          <ArrowLeft size={18} />
          Back to Courses
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[75vh] w-full">
        <img
          src={aariImg}
          alt="Aari Embroidery"
          className="h-full w-full object-cover"
        />

        {/* Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-[#faf9f7]" />

        {/* Hero Content */}
        <div className="absolute bottom-24 left-6 right-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            Aari Embroidery
          </h1>
          <p className="mt-3 text-lg text-white/90 max-w-xl">
            Transform your creativity into a skill you’ll love.
          </p>
        </div>
      </div>

      {/* Announcement Strip */}
      <AnnouncementStrip />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 mt-4 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
          {/* Benefits */}
          <ul className="space-y-3 text-gray-800 text-base">
            <li>✔ Beginner-friendly & confidence building</li>
            <li>✔ Practical, creative, hands-on learning</li>
            <li>✔ Helps you take your first step into fashion</li>
          </ul>

          {/* Who is this for */}
          <p className="mt-4 text-sm text-gray-500">
            Perfect for students, creatives, homemakers, and anyone passionate
            about fashion.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setShowWaitlist(true)}
              className="rounded-full bg-[#2c2218] text-white py-3 px-6 text-sm hover:bg-[#5c4a3a] transition"
            >
              Join Waitlist
            </button>

            <a
              href="https://wa.me/919840918392"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gray-300 py-3 px-6 text-sm text-center hover:bg-gray-50 transition"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Essential Info */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
            <span>⏱ 3 Months</span>
            <span>💻 Online</span>
            <span>🗣 Tamil & English</span>
          </div>
        </div>

        <div className="mt-6 border border-[#e8e2d8] bg-[#fffef9] rounded-2xl p-5">
          <h3 className="text-[#2c2218] font-medium mb-3">Batch Status</h3>

          <p className="text-[#6b5d4f] leading-relaxed">
            Dates will be announced for next batch.
          </p>

          <p className="mt-3 text-[#6b5d4f] leading-relaxed">
            Interested in joining? Contact us on WhatsApp and we'll notify you
            when enrollment opens.
          </p>
        </div>

        {/* Cross Sell */}
        <div className="mt-20">
          <h2 className="text-xl font-medium text-gray-900 mb-6">
            You might also like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <Link
              to="/courses/mural-painting"
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={muralImg}
                alt="Mural Painting"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Mural Painting
                </h3>
                <span className="text-sm text-gray-500 group-hover:text-gray-800">
                  View Course →
                </span>
              </div>
            </Link>

            <Link
              to="/courses/tanjore-painting"
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={tanjoreImg}
                alt="Tanjore Painting"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Tanjore Painting
                </h3>
                <span className="text-sm text-gray-500 group-hover:text-gray-800">
                  View Course →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <WaitlistModal
        isOpen={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        courseName="Aari Embroidery"
      />
      <Footer />
    </div>
  );
}

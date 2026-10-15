
import { Link } from "react-router-dom";

export default function LegalPageLayout({
  title,
  children,
}) {
  return (
    <main className="min-h-screen bg-[#F7F3EE] text-[#171717]">

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-36 sm:px-10 md:pt-44 lg:px-16">

        {/* Small brand label */}
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-[#9A5B45]">
          Renu Thread & Brush Arts
        </p>

        {/* Large editorial heading */}
        <h1
          className="mb-14 max-w-5xl text-[clamp(3.2rem,7vw,6.5rem)] font-normal leading-[1.12] tracking-[-0.045em] text-[#171717]"
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontWeight: 400,
          }}
        >
          {title}
        </h1>

        {/* Divider */}
        <div className="mb-14 h-px w-full bg-[#D8D0C8]" />

        {/* Policy content */}
        <article
          className="max-w-4xl text-[19px] font-normal leading-[1.65] text-[#24211F] sm:text-[21px] md:text-[23px]"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 400,
          }}
        >
          {children}
        </article>

        {/* Bottom navigation */}
        <div className="mt-24 border-t border-[#D8D0C8] pt-7">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-normal text-[#9A5B45] transition hover:text-[#171717]"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}

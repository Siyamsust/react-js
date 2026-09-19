
import bannerImage from "../assets/banner.png";

export default function Banner() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24"
    >
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="brand-text">Development Stack</span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
          Explore frontend, backend, database and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="brand-bg rounded-lg px-6 py-3 font-semibold text-white shadow-sm"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={bannerImage}
          alt="Layers of a modern development stack"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
}

const groups = [
  { title: "Product", items: ["Home", "Technologies", "Projects"] },
  { title: "Company", items: ["About", "Contact", "Careers"] },
  { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="brand-bg flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white">
                DS
              </span>
              <span className="text-xl font-extrabold">
                Dev <span className="brand-text">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Curated tools, technologies and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-5 text-sm font-medium text-slate-700">
              <a href="https://github.com" className="hover:text-pink-600">
                GitHub
              </a>
              <a href="https://twitter.com" className="hover:text-pink-600">
                Twitter
              </a>
              <a href="https://linkedin.com" className="hover:text-pink-600">
                LinkedIn
              </a>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold tracking-wide text-slate-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#home" className="hover:text-pink-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-pink-600">
              Privacy
            </a>
            <a href="#home" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?hl=en&authuser=3&user=SMQ9e18AAAAJ",
      color: "group-hover:text-[#4285F4]",
      icon: (
        <svg className="w-6 h-6 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M12 2L1 7l11 5 9-4.09V14c0 .55.45 1 1 1s1-.45 1-1V7.82L12 2zm1.88 9.59c-.56-.16-1.15.15-1.32.7-.22.68-.78 1.15-1.46 1.25-1.1.15-2.07-.63-2.17-1.73-.08-.94.6-1.76 1.54-1.89a1.996 1.996 0 0 1 2.19 1.4c.12.39.48.65.88.65.62 0 1.07-.6 0.88-1.2A3.992 3.992 0 0 0 13.38 8c-2.47.33-4.22 2.6-3.89 5.07.29 2.17 2.12 3.82 4.31 3.82 1.63 0 3.03-.99 3.63-2.42.23-.55-.07-1.17-.63-1.33l-1.68-.42z"/>
        </svg>
      )
    },
    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Md-Sharfuddin?ev=hdr_xprf",
      color: "group-hover:text-[#00CCBB]",
      icon: (
        <svg className="w-6 h-6 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z"/>
        </svg>
      )
    },
    {
      name: "ORCID",
      href: "https://orcid.org/my-orcid?orcid=0009-0006-5783-9992",
      color: "group-hover:text-[#A6CE39]",
      icon: (
        <svg className="w-6 h-6 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm.797 3.328v9.916H6.572V7.706h1.594zm6.656 5.306c0 1.959-1.2 3.197-3.084 3.197h-2.316V7.706h2.512c1.781 0 2.887 1.153 2.887 3.197v2.131zm-1.612-2.1c0-.984-.506-1.547-1.444-1.547H10.15v5.194h1.097c.938 0 1.444-.563 1.444-1.547v-2.1z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/md-sharfuddin96/",
      color: "group-hover:text-[#0A66C2]",
      icon: (
        <svg className="w-6 h-6 fill-current transition-colors duration-300" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#061630] dark:bg-surface-container-lowest text-slate-100 border-t border-slate-800 dark:border-outline-variant/60 transition-colors duration-300 mt-auto relative overflow-hidden">
      {/* Subtle abstract glow background patterns */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-max-width mx-auto px-6 md:px-margin-desktop py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 dark:border-outline-variant/60 pb-12">
          {/* Column 1: Title & Description */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-headline-lg text-2xl font-bold text-white tracking-tight">
              Md Sharfuddin
            </h3>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              MBA in MIS | AI &amp; Data Analytics Researcher
            </p>
            <p className="font-body-md text-sm text-slate-300 leading-relaxed max-w-sm">
              Bridging business management systems, predictive machine learning algorithms, and intelligent decision science frameworks to empower organizational efficiency.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-label-sm text-xs font-bold text-slate-100 uppercase tracking-widest border-l-2 border-secondary pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-secondary transition-colors duration-200">
                  Home Portfolio
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-slate-300 hover:text-secondary transition-colors duration-200">
                  Research Interests
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-slate-300 hover:text-secondary transition-colors duration-200">
                  Publications &amp; Patents
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-300 hover:text-secondary transition-colors duration-200">
                  Professional Journey
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-secondary transition-colors duration-200">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Identifiers */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-label-sm text-xs font-bold text-slate-100 uppercase tracking-widest border-l-2 border-secondary pl-2">
              Contact &amp; Identifiers
            </h4>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-xl">mail</span>
              <a
                href="mailto:sharfuddin.md50@yahoo.com"
                className="text-sm text-slate-200 hover:text-secondary hover:underline transition-colors font-medium"
              >
                sharfuddin.md50@yahoo.com
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3">
                Academic Networks &amp; Registry
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-800 hover:border-slate-500 hover:scale-110 shadow-sm transition-all duration-300 group ${link.color}`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} Md Sharfuddin. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
            <span>Academic Portfolio &amp; Research Profile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

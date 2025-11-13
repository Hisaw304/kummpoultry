import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const quick = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy and Policy", href: "/privacy" },
  ];

  return (
    <footer className="mt-12 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / Contact */}
        <div>
          <div className="flex items-center gap-3">
            <div>
              <a href="/" className="font-extrabold text-xl kp-text-yellow">
                KummPoultry
              </a>
              <p className="text-sm">Fresh poultry delivered to your door.</p>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={14} /> <span>kummpoultry@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Phone size={14} /> <span>+1 (402) 257-5507</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2 text-sm">
            {quick.map((q) => (
              <li key={q.href}>
                <a
                  href={q.href}
                  className="hover:underline decoration-[var(--kp-blue)] link-hover-underline"
                >
                  {q.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <p className="text-sm mb-3">Get fresh offers and farm updates.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-md border"
            />
            <button className="px-4 py-2 rounded-md bg-[var(--kp-blue)] text-white">
              Subscribe
            </button>
          </form>

          <div className="mt-6 text-sm">
            <p>Follow us</p>
            <div className="flex items-center gap-3 mt-2">
              {/* Placeholder social links */}
              <a href="#" className="kp-focus">
                Twitter
              </a>
              <a href="#" className="kp-focus">
                Facebook
              </a>
              <a href="#" className="kp-focus">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[var(--kp-body-bg)] py-4">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <span>
            © {new Date().getFullYear()} KummPoultry — All rights reserved
          </span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

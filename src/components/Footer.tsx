import { useTranslation } from 'react-i18next';
import { navLinks } from '@/mocks/tunaiNowData';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full bg-background-900 text-foreground-50 py-12 md:py-16">
      <div className="w-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="md:col-span-1">
            <a
              href="#"
              className="flex items-center gap-2 text-xl md:text-2xl font-heading font-bold mb-4"
            >
              <span className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-background-900 text-sm">
                <i className="ri-wallet-3-line" />
              </span>
              <span>
                Tunai<span className="text-accent-500">Now</span>
              </span>
            </a>
            <p className="text-sm text-foreground-400 leading-relaxed">
              {t('footer_desc', {
                defaultValue:
                  'Malaysia\'s trusted loan repayment platform. Fast, safe, and transparent repayment services.',
              })}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground-100">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground-100">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground-100">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-foreground-400 hover:text-foreground-100 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground-800 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-foreground-500">
              {t('copyright', { defaultValue: '© 2026 TunaiNow. All rights reserved.' })}
            </p>
            <p className="text-xs md:text-sm text-foreground-500 text-center">
              {t('copyright_legal', {
                defaultValue:
                  'TunaiNow is a registered trademark. Licensed by Bank Negara Malaysia under the Money Services Business Act 2011.',
              })}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground-800 hover:bg-foreground-700 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <i className="ri-facebook-line" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground-800 hover:bg-foreground-700 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <i className="ri-twitter-line" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-foreground-800 hover:bg-foreground-700 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
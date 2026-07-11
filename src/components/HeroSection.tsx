import { useTranslation } from 'react-i18next';
import { useInView } from '@/hooks/useInView';
import { trustStats, heroTags } from '@/mocks/tunaiNowData';
import LoanCalculator from './LoanCalculator';

export default function HeroSection() {
  const { t } = useTranslation();
  const { ref: sectionRef, inView: sectionInView } = useInView(0.2);

  return (
    <section className="relative w-full pt-32 md:pt-40 pb-16 md:pb-24 bg-background-50 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient -z-10" />
      <div className="w-full px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            ref={sectionRef}
            className={`transition-all duration-1000 ${
              sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs md:text-sm font-medium mb-5 md:mb-6">
              <i className="ri-verified-badge-line" />
              {t('hero_badge', { defaultValue: 'Licensed by Bank Negara Malaysia' })}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground-950 mb-5 md:mb-6 leading-tight text-balance">
              {t('hero_title_prefix', { defaultValue: 'Pay Your Loan' })}
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                {t('hero_amount', { defaultValue: 'Easy & Fast' })}
              </span>
              <br />
              {t('hero_title_suffix', { defaultValue: 'Anytime, Anywhere' })}
            </h1>

            <p className="text-base md:text-lg text-foreground-600 mb-8 leading-relaxed max-w-xl text-balance">
              {t('hero_subtitle', {
                defaultValue:
                  'Manage your loan repayment with ease. Check balance, make payments, and track your progress online.',
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-12">
              <button className="px-6 py-3.5 text-sm md:text-base font-semibold bg-primary-500 text-background-50 rounded-xl hover:bg-primary-600 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                {t('cta_primary', { defaultValue: 'Pay Now' })}
                <i className="ri-arrow-right-line" />
              </button>
              <button className="px-6 py-3.5 text-sm md:text-base font-semibold border-2 border-primary-500 text-primary-600 rounded-xl hover:bg-primary-50 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                <i className="ri-information-line" />
                {t('cta_secondary', { defaultValue: 'Check Balance' })}
              </button>
            </div>

            <div className="flex items-center gap-6 md:gap-8">
              {trustStats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-xl md:text-2xl font-heading font-bold text-foreground-950">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-foreground-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative h-full">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />

              <LoanCalculator />

              <div className="absolute -bottom-4 -right-4 flex gap-2 flex-wrap">
                {heroTags.map((tag, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-lg bg-background-50 border border-background-200/70 text-xs md:text-sm font-medium text-foreground-700 flex items-center gap-1.5 transition-all duration-700 ${
                      sectionInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: `${400 + idx * 100}ms`,
                    }}
                  >
                    <i className={`${tag.icon} text-primary-600`} />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
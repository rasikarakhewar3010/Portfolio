'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Menu, X } from 'lucide-react'

const defaultProps = {
  logo: {
    src: "/logo/Logo_For_R_____2_-removebg-preview.png",
    alt: "Company Logo",
    companyName: "Your Company"
  },
  navigation: [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ],

//   titleSize: "large",
  gradientColors: {
    from: "oklch(0.646 0.222 41.116)",
    to: "oklch(0.488 0.243 264.376)"
  },

}

export function HeroLanding(props) {
  const {
    logo,
    navigation,
    loginText,
    loginHref,
    title,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    gradientColors,
    className
  } = { ...defaultProps, ...props }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return 'text-2xl sm:text-3xl md:text-5xl'
      case 'medium':
        return 'text-2xl sm:text-4xl md:text-6xl'
      case 'large':
      default:
        return 'text-3xl sm:text-5xl md:text-7xl'
    }
  }

  const renderCallToAction = (cta, index) => {
    if (cta.variant === 'primary') {
      return (
        <a
          key={index}
          href={cta.href}
          className="rounded-lg bg-primary px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors"
        >
          {cta.text}
        </a>
      )
    } else {
      return (
        <a
          key={index}
          href={cta.href}
          className="text-xs sm:text-sm/6 font-semibold text-foreground hover:text-muted-foreground transition-colors"
        >
          {cta.text} <span aria-hidden="true">→</span>
        </a>
      )
    }
  }

  return (
    <div className={`min-h-screen w-screen overflow-x-hidden relative ${className || ''}`}>
      
      {/* Top gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 min-h-screen"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div>

      {/* Bottom gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] min-h-screen"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div>

      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-1">
        <nav aria-label="Global" className="flex items-center justify-between p-4 sm:p-6 lg:px-8">
          
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{logo?.companyName}</span>
              <img alt={logo?.alt} src={logo?.src} className="h-9 sm:h-8 w-auto" />
            </a>
          </div>

          {/* mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="size-6" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
            {navigation?.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href={loginHref} className="text-sm/6 font-semibold text-foreground hover:text-muted-foreground">
              {loginText} 
            </a>
          </div>
        </nav>

        {/* MOBILE DRAWER */}
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-border lg:hidden">
            
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">{logo?.companyName}</span>
                <img alt={logo?.alt} src={logo?.src} className="h-6 sm:h-8 w-auto" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Close menu</span>
                <X className="size-6" />
              </button>
            </div>

            <div className="mt-2">
              <div className="-my-6 divide-y">
                
                <div className="space-y-2 py-6">
                  {navigation?.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-card-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                    href={loginHref}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-card-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {loginText}
                  </a>
                </div>

              </div>
            </div>

          </DialogContent>
        </Dialog>
      </header>

      {/* HERO SECTION */}
      <div className="relative isolate px-6 pt-1 min-h-screen flex flex-col justify-center">
        
        <div className="mx-auto max-w-4xl pt-20 sm:pt-25">

          {announcementBanner && (
            <div className="hidden sm:flex sm:justify-center mb-2">
              <div className="relative rounded-full px-3 py-1 text-sm text-muted-foreground ring-1 ring-border hover:ring-ring">
                {announcementBanner.text}{' '}
                <a href={announcementBanner.linkHref} className="font-semibold text-primary hover:text-primary/80">
                  {announcementBanner.linkText} →
                </a>
              </div>
            </div>
          )}

          <div className="text-center">
            <h1 className={`${getTitleSizeClasses()} font-semibold tracking-tight text-foreground`}>
              {title}
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-muted-foreground sm:text-xl">
              {description}
            </p>

            {callToActions && (
              <div className="mt-10 flex justify-center gap-4">
                {callToActions.map((cta, i) => renderCallToAction(cta, i))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

interface PageHeaderProps {
  title: string
  subtitle: string
  backgroundImage?: string
  breadcrumbs?: { label: string; href?: string }[]
}

export default function PageHeader({ 
  title, 
  subtitle, 
  backgroundImage = '/image/Roof2.avif',
  breadcrumbs 
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="mx-auto max-w-7xl relative z-10 text-center px-4">
        {breadcrumbs && (
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="inline-flex items-center">
                  {index > 0 && (
                    <svg className="w-6 h-6 text-[#E8EDE6]/60 mx-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {crumb.href ? (
                    <a
                      href={crumb.href}
                      className="text-[#E8EDE6]/80 hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-[#E8EDE6]">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="mb-6 text-4xl font-bold text-[#E8EDE6] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#E8EDE6]/90 md:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

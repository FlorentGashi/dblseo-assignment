import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="bg-white border-b border-[#4A6741]/20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="py-4">
          <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
            <Image
              src="/ApexTransparentLogo.png"
              alt="Apex Roofing - Professional Roofing Services"
              width={280}
              height={80}
              className="h-auto w-auto max-h-[80px] object-contain"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Electrical Brands | MEG Electrical Solutions",
  description:
    "Discover established electrical brands and product categories available through MEG Electrical Solutions.",
  openGraph: {
    title: "Electrical Brands | MEG",
    description: "Explore established electrical brands available through MEG.",
  },
  alternates: {
    canonical: "/brands",
  },
};

type Brand = {
  name: string;
  logo?: string;
  href?: string;
};

const brands: Brand[] = [
  {
    name: "Schneider Electric",
    logo: "/brands/schneider.svg",
    href: "https://www.se.com/ww/en/",
  },
  {
    name: "Havells",
    logo: "/brands/havells.svg",
    href: "https://www.havells.com/",
  },
  {
    name: "Philips",
    logo: "/brands/philips.png",
    href: "https://www.philips.co.in/",
  },
  {
    name: "Legrand",
    logo: "/brands/legrand.png",
    href: "https://www.legrand.com/",
  },
  {
    name: "Panasonic",
    logo: "/brands/panasonic.png",
    href: "https://www.panasonic.com/",
  },
  {
    name: "Bosch",
    logo: "/brands/bosch.png",
    href: "https://www.bosch.com/",
  },
  {
    name: "Plycab",
    logo: "/brands/polycab.png",
    href: "https://polycab.com/",
  },
  {
    name: "PM Cona",
    logo: "/brands/pmcona.png",
    href: "https://www.pmcona.in/",
  },
  {
    name: "Crompton",
    logo: "/brands/crompton.png",
    href: "https://www.crompton.co.in/",
  },
  {
    name: "Usha",
    logo: "/brands/usha.png",
    href: "https://www.usha.com/",
  },
  {
    name: "RR Kabel",
    logo: "/brands/rr.svg",
    href: "https://www.rrkabel.com/",
  },
  {
    name: "Mitsubishi Electric",
    logo: "/brands/mitsubishi.svg",
    href: "https://mitsubishielectric.in/",
  },
  {
    name: "Lloyd",
    logo: "/brands/lloyd.svg",
    href: "https://havells.com/lloyd/",
  },
  {
    name: "Voltas",
    logo: "/brands/voltas.svg",
    href: "https://www.voltas.com/",
  },
  {
    name: "Symphony",
    logo: "/brands/sumphony.png",
    href: "https://symphonylimited.com/",
  },
  {
    name: "Aeroking",
    logo: "/brands/aeroking.png",
    href: "https://aroking.in/",
  },
  {
    name: "Khaitan",
    logo: "/brands/khaitan.gif",
    href: "https://www.khaitan.com/",
  },
];

const categories = [
  { name: "Lighting", slug: "lighting" },
  { name: "Switches & Sockets", slug: "switches-sockets" },
  { name: "Wires & Cables", slug: "wires-cables" },
  { name: "Protection", slug: "protection" },
  { name: "Fans & Appliances", slug: "fans-appliances" },
  { name: "Industrial Electrical", slug: "industrial-electrical" },
];

export default function BrandsPage() {
  return (
    <>
      <PageIntro
        kicker="Brand directory"
        title="Trusted brands. Reliable choices."
        text="MEG brings established electrical names together to make product discovery and sourcing simpler."
        dark
      />

      <section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Brand directory</p>

            <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Established names we work with.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            The names below represent brands commonly requested across the
            electrical market. Current availability and any dealer relationship
            must be confirmed directly with MEG.
          </p>
        </div>

        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => {
            const content = (
              <>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.12em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex min-h-36 items-center justify-center px-6 py-8">
                  {brand.logo ? (
                    <div className="relative h-20 w-full max-w-[200px]">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        fill
                        sizes="200px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <h3 className="font-display text-2xl uppercase leading-tight text-center text-paper group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                  )}
                </div>

                <div>
                  {brand.logo && (
                    <h3 className="font-display text-2xl uppercase leading-none">
                      {brand.name}
                    </h3>
                  )}

                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Availability on enquiry
                  </p>
                </div>
              </>
            );

            return brand.href ? (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-h-[360px] border-b border-r border-border bg-ink p-7 text-paper bg-gradient-to-b transition-all duration-300 hover:from-ink hover:to-zinc-900"
              >
                {content}
              </a>
            ) : (
              <div
                key={brand.name}
                className="group min-h-[360px] border-b border-r border-border bg-ink p-7 text-paper bg-gradient-to-b transition-all duration-300 hover:from-ink hover:to-zinc-900"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-paper sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <p className="eyebrow">Across the range</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category.slug}
                className="border border-paper/20 px-5 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {category.name}
              </span>
            ))}
          </div>

          <Link
            href="/products"
            className="mt-10 inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore products
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
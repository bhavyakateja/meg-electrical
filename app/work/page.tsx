import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { PageIntro } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Our Work | MEG Electrical Solutions",
  description:
    "Explore organizations and institutions served by MEG Electrical Solutions through electrical product supply and sourcing.",
  openGraph: {
    title: "Our Work | MEG Electrical Solutions",
    description:
      "Organizations and institutions served by MEG Electrical Solutions.",
  },
  alternates: {
    canonical: "/work",
  },
};

type Client = {
  name: string;
  category: string;
  logo?: string;
  href?: string;
  external?: boolean;
};

const clients: Client[] = [
  {
    name: "Miraj",
    category: "Corporate & Industrial",
    logo: "/work/logos/miraj.png",
    href: "https://www.mirajgroup.in/",
    external: true,
  },
  {
    name: "Reliance Chemotex",
    category: "Industrial",
    logo: "/work/logos/reliance-chemotex.svg",
    href: "https://www.reliancechemotex.com/",
    external: true,
  },
  {
    name: "Mahatma Gandhi Government School",
    category: "Government Institution",
  },
  {
    name: "Panchayat Samiti",
    category: "Government Institution",
  },
  {
    name: "Canara Bank",
    category: "Banking",
    logo: "/work/logos/canara-bank.png",
    href: "https://www.canarabank.bank.in/",
    external: true,
  },
  {
    name: "Bank of Baroda",
    category: "Banking",
    logo: "/work/logos/bank-of-baroda.svg",
    href: "https://bankofbaroda.bank.in/",
    external: true,
  },
  {
    name: "Union Co-operative Bank",
    category: "Banking",
    logo: "/work/logos/union-cooperative-bank.png",
    href: "https://www.unioncoop.bank.in/",
    external: true,
  },
  {
    name: "Four Feather Hotels",
    category: "Hospitality",
  },
  {
    name: "S.K. Khetan Group",
    category: "Infrastructure & Industrial",
    logo: "/work/logos/sk-khetan-group.png",
    href: "https://skkhetangroup.com/",
    external: true,
  },
];

export default function WorkPage() {
  return (
    <>
      <PageIntro
        kicker="Our work"
        title="Trusted where it matters."
        text="MEG Electrical Solutions has supplied electrical products to businesses, financial institutions, government organizations, educational institutions and hospitality groups."
        dark
      />

      <section className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Selected clients</p>

            <h2 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
              Organizations we have supplied.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            From everyday electrical requirements to institutional and
            commercial projects, MEG supports a wide range of customers with
            dependable product sourcing.
          </p>
        </div>

        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => {
            const content = (
              <>
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold tracking-[0.12em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {client.href && (
                    <ArrowUpRight className="size-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </div>

                <div className="flex min-h-36 items-center justify-center px-6 py-8">
                  {client.logo ? (
                    <div className="relative h-24 w-full max-w-[240px]">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        fill
                        sizes="240px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <h3 className="font-display text-2xl uppercase leading-tight text-center text-paper group-hover:text-primary transition-colors">
                      {client.name}
                    </h3>
                  )}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {client.category}
                  </p>

                  {client.logo && (
                    <h3 className="mt-2 font-display text-2xl uppercase leading-none">
                      {client.name}
                    </h3>
                  )}

                  {client.href && (
                    <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:text-primary">
                      Visit website
                    </p>
                  )}
                </div>
              </>
            );

            return client.href ? (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group min-h-[360px] border-b border-r border-border bg-ink p-7 text-paper bg-gradient-to-b transition-all duration-300 hover:from-ink hover:to-zinc-900"
              >
                {content}
              </a>
            ) : (
              <div
                key={client.name}
                className="group min-h-[360px] border-b border-r border-border bg-ink p-7 text-paper bg-gradient-to-b transition-all duration-300 hover:from-ink hover:to-zinc-900"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-paper sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow">Built through trust</p>

            <h2 className="mt-6 font-display text-3xl uppercase leading-[0.95] sm:text-5xl lg:text-7xl">
              From requirement
              <br />
              to supply.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-2xl text-base leading-7 text-paper/65 sm:text-lg sm:leading-8">
              Our work spans multiple sectors and requirements. Whether the
              need is for a bank, institution, industrial facility, hospitality
              property or commercial project, MEG focuses on making electrical
              sourcing straightforward and dependable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  HardHat,
  Lightbulb,
  ShieldCheck,
  Store,
  Target,
  Zap,
} from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About MEG Electrical Solutions | Electrical Products & Sourcing",
  description:
    "Learn about MEG Electrical Solutions, a focused electrical products retailer, wholesaler and sourcing partner serving residential, commercial and industrial requirements with established brands and practical product guidance.",
  keywords: [
    "MEG Electrical Solutions",
    "electrical products",
    "electrical products supplier",
    "electrical wholesale",
    "electrical retail",
    "electrical product sourcing",
    "electrical solutions",
    "lighting and wiring",
    "electrical appliances",
    "electrical protection",
    "industrial electrical products",
  ],
  openGraph: {
    title: "About MEG Electrical Solutions",
    description:
      "Electrical products, established brands and practical sourcing support for residential, commercial and industrial requirements.",
  },
  alternates: {
    canonical: "/about",
  },
};

/* ---------- Shared layout tokens (keeps every section aligned) ---------- */

// Padding lives INSIDE the max-width container so all left edges match.
const container =
  "mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12";

const sectionY = "py-16 sm:py-20 md:py-24 lg:py-32";

// One split for EVERY section: equal columns, content vertically centred,
// so the right column starts at the same x-position in every section.
const splitGrid =
  "grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24";

const headingSize = "text-[clamp(1.75rem,3vw,2.75rem)]";
const bigHeadingSize = "text-[clamp(2rem,4.5vw,4rem)]";

const values = [
  {
    title: "Reliability",
    text: "Dependable product sourcing, established brands and a practical approach to fulfilling electrical requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Safety",
    text: "Safety remains central to electrical product selection, application and responsible sourcing.",
    icon: HardHat,
  },
  {
    title: "Innovation",
    text: "We stay connected to evolving electrical products, technologies and solutions across the market.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    text: "Clear communication, straightforward sourcing and a commitment to doing business responsibly.",
    icon: Check,
  },
];

const capabilities = [
  {
    title: "Electrical Product Range",
    text: "Lighting, wiring and cables, switches and sockets, appliances, protection products, hardware and other electrical requirements.",
    icon: Zap,
  },
  {
    title: "Retail & Wholesale",
    text: "Product sourcing for individual requirements as well as recurring retail and wholesale electrical procurement.",
    icon: Store,
  },
  {
    title: "Project Requirements",
    text: "Support for commercial, institutional, industrial and other project-based electrical product requirements.",
    icon: ClipboardList,
  },
  {
    title: "Product Guidance",
    text: "A focused sourcing experience that helps customers identify relevant products, brands and practical options for their requirements.",
    icon: Lightbulb,
  },
];

const customerSegments = [
  {
    label: "Residential",
    title: "Everyday Electrical Requirements",
    text: "Products and practical sourcing support for residential electrical needs.",
  },
  {
    label: "Commercial",
    title: "Business & Institutional Supply",
    text: "Electrical products for commercial spaces, businesses and institutional requirements.",
  },
  {
    label: "Industrial",
    title: "Project & Industrial Sourcing",
    text: "Product sourcing for industrial environments and project-based electrical requirements.",
  },
];

const productCategories = [
  "Lighting & Wiring",
  "Wires & Cables",
  "Switches & Sockets",
  "Appliances & Cooling",
  "Protection & Hardware",
  "Industrial Electrical",
];

export default function AboutPage() {
  return (
    <main className="min-w-0 overflow-x-hidden">
      <PageIntro
        kicker="About MEG"
        title="BUILT AROUND BETTER ELECTRICAL SOURCING."
        text="MEG Electrical Solutions brings electrical products, established brands and practical sourcing support together under one roof. We serve residential, commercial and industrial requirements across retail, wholesale and project-based procurement."
        dark
      />

      {/* INTRODUCTION */}
      <section className={`min-w-0 ${sectionY}`}>
        <div className={container}>
          <div className={splitGrid}>
            <div className="min-w-0">
              <p className="eyebrow">Who We Are</p>

              <h2
                className={`mt-4 break-words font-display ${headingSize} uppercase leading-[0.95] sm:mt-5`}
              >
                ELECTRICAL PRODUCTS.
                <br />
                ESTABLISHED BRANDS.
                <br />
                PRACTICAL SOURCING.
              </h2>
            </div>

            <div className="min-w-0 space-y-6 text-[15px] leading-7 text-muted-foreground sm:text-base md:text-lg md:leading-8">
              <p>
                MEG Electrical Solutions is an electrical products retailer,
                wholesaler and sourcing partner focused on making electrical
                procurement simpler and more dependable.
              </p>

              <p>
                Our range brings together products across lighting, wiring and
                cables, switches and sockets, appliances, protection and
                hardware, along with other electrical requirements for homes,
                businesses and projects.
              </p>

              <p>
                Rather than manufacturing products, MEG works across the supply
                side of the electrical market, connecting customers with
                relevant products and established brands through a focused
                sourcing experience.
              </p>

              <p>
                Whether the requirement is a single electrical product, a
                wholesale requirement or sourcing for a larger project, our
                approach is built around understanding the requirement,
                identifying suitable products and providing clear assistance
                throughout the sourcing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SEGMENTS */}
      <section className="border-y border-black/15 bg-primary">
        <div className={`${container} grid md:grid-cols-3`}>
          {customerSegments.map((segment, index) => (
            <div
              key={segment.label}
              className={[
                "min-w-0 py-6 sm:py-8 md:py-10",
                // inner horizontal padding only BETWEEN cells so the first
                // and last cells align with the page container edges
                "md:px-8 md:first:pl-0 md:last:pr-0 lg:px-10",
                index !== customerSegments.length - 1
                  ? "border-b border-black/15 md:border-b-0 md:border-r"
                  : "",
              ].join(" ")}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
                {segment.label}
              </p>

              <h3 className="mt-2 font-display text-xl uppercase leading-tight sm:mt-3 sm:text-2xl">
                {segment.title}
              </h3>

              <p className="mt-3 max-w-md text-xs leading-5 sm:text-sm sm:leading-6">
                {segment.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="min-w-0 overflow-hidden bg-ink text-paper">
        <div className={`${container} ${sectionY}`}>
          <div className={splitGrid}>
            <div className="min-w-0">
              <p className="eyebrow text-primary">Our Direction</p>

              <h2
                className={`mt-4 break-words font-display ${headingSize} uppercase leading-[0.95] sm:mt-5`}
              >
                POWERING
                <br />
                BETTER
                <br />
                REQUIREMENTS.
              </h2>
            </div>

            <div className="grid min-w-0 gap-px bg-paper/15 sm:grid-cols-2">
              <article className="min-w-0 bg-ink p-8 sm:p-10 lg:p-10">
                <Target className="h-7 w-7 text-primary sm:h-8 sm:w-8" />

                <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:mt-14 sm:text-xs">
                  Mission
                </p>

                <h3 className="mt-2 break-words font-display text-xl uppercase leading-tight sm:text-2xl">
                  Reliable Electrical Solutions
                </h3>

                <p className="mt-4 text-xs leading-6 text-paper/65 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
                  We aim to deliver reliable electrical solutions with
                  precision, safety and efficiency, helping infrastructure and
                  industries perform at their best.
                </p>
              </article>

              <article className="min-w-0 bg-ink p-8 sm:p-10 lg:p-10">
                <Zap className="h-7 w-7 text-primary sm:h-8 sm:w-8" />

                <p className="mt-10 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:mt-14 sm:text-xs">
                  Vision
                </p>

                <h3 className="mt-2 break-words font-display text-xl uppercase leading-tight sm:text-2xl">
                  A Trusted Electrical Partner
                </h3>

                <p className="mt-4 text-xs leading-6 text-paper/65 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
                  Our vision is to become one of India&apos;s most trusted and
                  future-ready industrial electrical partners through
                  dependable products, responsible sourcing and long-term
                  relationships.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className={`min-w-0 ${sectionY}`}>
        <div className={container}>
          <div className={splitGrid}>
            <div className="min-w-0">
              <p className="eyebrow">What We Do</p>

              <h2
                className={`mt-4 break-words font-display ${headingSize} uppercase leading-[0.95] sm:mt-5`}
              >
                FROM
                <br />
                REQUIREMENT
                <br />
                TO SUPPLY.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground sm:mt-7 sm:text-base sm:leading-7">
                Our role is straightforward: understand the requirement, bring
                relevant products and brands into the sourcing process, and
                help customers move from product discovery to supply with
                greater clarity.
              </p>
            </div>

            <div className="grid min-w-0 gap-px bg-border sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="min-w-0 bg-background p-8 sm:p-9 lg:p-10"
                  >
                    <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />

                    <h3 className="mt-10 break-words font-display text-xl uppercase leading-tight sm:mt-14 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-muted-foreground sm:mt-4 sm:text-sm">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="min-w-0 overflow-hidden bg-muted">
        <div className={`${container} ${sectionY}`}>
          <div className="flex min-w-0 flex-col justify-between gap-6 border-b border-border pb-8 sm:gap-8 sm:pb-10 lg:flex-row lg:items-center">
            <div className="min-w-0">
              <p className="eyebrow">Across The Range</p>

              <h2
                className={`mt-4 max-w-3xl break-words font-display ${bigHeadingSize} uppercase leading-[0.95] sm:mt-5`}
              >
                ONE SOURCE.
                <br />
                MULTIPLE ELECTRICAL
                <br />
                REQUIREMENTS.
              </h2>
            </div>

            <p className="max-w-md text-xs leading-6 text-muted-foreground sm:text-sm">
              MEG connects customers with electrical product categories
              spanning everyday requirements, commercial applications and
              project-oriented sourcing.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {productCategories.map((category, index) => (
              <div
                key={category}
                className="group flex min-w-0 items-center justify-between border border-border bg-background p-5 transition-colors hover:bg-ink hover:text-paper sm:p-6 md:p-7"
              >
                <div className="min-w-0 pr-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 break-words font-display text-lg uppercase leading-tight sm:mt-3 sm:text-xl">
                    {category}
                  </h3>
                </div>

                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="min-w-0 overflow-hidden bg-ink text-paper">
        <div className={`${container} ${sectionY}`}>
          <div className={splitGrid}>
            <div className="min-w-0">
              <p className="eyebrow text-primary">What We Stand For</p>

              <h2
                className={`mt-4 break-words font-display ${headingSize} uppercase leading-[0.95] sm:mt-5`}
              >
                BUILT ON
                <br />
                TRUST.
                <br />
                DRIVEN BY
                <br />
                PRECISION.
              </h2>
            </div>

            <div className="grid min-w-0 gap-px bg-paper/15 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="min-w-0 bg-ink p-8 sm:p-10 lg:p-10"
                  >
                    <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />

                    <h3 className="mt-10 break-words font-display text-xl uppercase leading-tight sm:mt-14 sm:text-2xl">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-paper/60 sm:mt-4 sm:text-sm sm:leading-7">
                      {value.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="min-w-0 overflow-hidden bg-primary">
        <div
          className={`${container} flex flex-col gap-8 py-16 sm:gap-10 sm:py-20 md:py-24 lg:flex-row lg:items-center lg:justify-between`}
        >
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
              Start With Your Requirement
            </p>

            <h2
              className={`mt-3 max-w-3xl break-words font-display ${bigHeadingSize} uppercase leading-[0.95] sm:mt-4`}
            >
              LOOKING FOR THE
              <br />
              RIGHT ELECTRICAL
              <br />
              PRODUCTS?
            </h2>

            <p className="mt-4 max-w-2xl text-xs leading-6 sm:mt-5 sm:text-sm md:text-base">
              Tell us what you need. Whether it is a retail product, wholesale
              requirement or project enquiry, MEG can help you explore the
              relevant electrical products and sourcing options.
            </p>
          </div>

          <Button
            nativeButton={false}
            className="w-full shrink-0 bg-ink text-paper hover:bg-background hover:text-foreground sm:w-fit"
            render={
              <Link href="/contact">
                Contact MEG
                <ArrowRight />
              </Link>
            }
          />
        </div>
      </section>
    </main>
  );
}
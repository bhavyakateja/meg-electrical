import Link from "next/link";

import {
  ArrowDown,
  ArrowRight,
  Building2,
  Cable,
  Check,
  Home,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

import { BoltMark } from "@/components/site-shell";
import { ProductCard } from "@/components/product-card";
import { BrandMarquee } from "@/components/brand-marquee";

import {
  audiences,
  brands,
  categories,
  products,
  seasonalCampaign,
} from "@/data/catalog";

export const metadata = {
  title: "MEG Electrical Solutions",
  description:
    "Explore lighting, switches, wires, protection and industrial electrical products from established brands through MEG Electrical Solutions.",
  openGraph: {
    title: "MEG Electrical Solutions",
    description:
      "Electrical products for every requirement, under one roof.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-ink text-paper">
        {/* Background Loop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        >
          <source src={seasonalCampaign.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_84%,transparent)_43%,transparent_84%)]" />

        {/* <div className="industrial-grid absolute inset-0 opacity-35" /> */}

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1500px] flex-col justify-between px-5 py-10 lg:px-10 lg:py-14">
          <div className="flex items-center justify-between">
            <p className="eyebrow">{seasonalCampaign.eyebrow}</p>

            <span className="hidden border border-paper/25 px-3 py-2 text-xs uppercase sm:block">
              Retail + Wholesale
            </span>
          </div>

          <div className="max-w-5xl py-16">
            <h1 className="font-display text-[clamp(3.5rem,10vw,9.5rem)] uppercase leading-[.78]">
              Light up
              <br />
              <span className="text-primary">every</span>
              <br />
              occasion.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-paper/72 sm:text-lg">
              {seasonalCampaign.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore products
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-paper/40 bg-transparent px-6 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Source with MEG
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-paper/20 pt-5 text-xs uppercase text-paper/60">
            <span>Lighting · Power · Protection</span>

            <ArrowDown className="animate-bounce motion-reduce:animate-none" />
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-5 py-5 lg:px-10">
          <strong className="font-display text-xl uppercase">
            Electrical products for every requirement.
          </strong>

          <span className="text-sm font-semibold">
            Residential / Commercial / Industrial
          </span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[.8fr_2fr]">
          <div>
            <p className="eyebrow">Product categories</p>

            <h2 className="mt-5 font-display text-4xl uppercase leading-none sm:text-6xl">
              Everything electrical,
              <br />
              under one roof.
            </h2>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/products?category=${encodeURIComponent(
                  category.name,
                )}`}
                className="group relative min-h-64 overflow-hidden bg-ink p-6 text-paper"
              >
                <img
                  src={category.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                />

                {/* Dark gradient overlay at the bottom to keep text legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                <span className="relative z-10 text-xs text-primary">
                  0{index + 1}
                </span>

                <div className="absolute inset-x-6 bottom-6 z-10">
                  <h3 className="font-display text-2xl uppercase">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm text-paper/80">
                    {category.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL SELECTION */}
      <section className="bg-ink py-14 text-paper lg:py-20">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          {/* Header */}
          <div className="grid gap-6 border-b border-paper/20 pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12 lg:pb-10">
            <div>
              <p className="eyebrow">Seasonal selection</p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-[0.88] sm:text-6xl lg:text-[clamp(3.5rem,5vw,5.5rem)]">
                Illuminate
                <br />
                <span className="text-primary">the season.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-paper/60 sm:text-base sm:leading-7 lg:pb-1">
              From subtle ambience to celebration-ready decorative lighting and
              heavy-duty cabling, discover formats for homes, venues and commercial
              spaces.
            </p>
          </div>

          {/* Product Cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10">
            {products
              .filter((product) => {
                const cat = product.category.toLowerCase();
                const name = product.name.toLowerCase();

                return (
                  cat.includes("lighting") ||
                  cat.includes("cable") ||
                  name.includes("light") ||
                  name.includes("cable")
                );
              })
              .slice(0, 2)
              .map((product) => (
                <div
                  key={product.slug}
                  className="group relative flex overflow-hidden border border-border bg-paper text-ink transition-transform duration-500 hover:-translate-y-1"
                >
                  {/* Product Image */}
                  <Link
                    href={`/products/${product.slug}`}
                    aria-label={`View ${product.name}`}
                    className="relative flex h-[270px] w-full items-center justify-center overflow-hidden bg-paper p-6 sm:h-[300px] sm:p-8"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  {/* Product Information */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-paper via-paper/95 to-transparent px-5 pb-5 pt-14 sm:px-6 sm:pb-6">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                        {product.category}
                      </p>

                      <h3 className="mt-1.5 font-display text-xl uppercase leading-none tracking-wide sm:text-2xl">
                        {product.name}
                      </h3>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      aria-label={`View ${product.name}`}
                      className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/90"
                    >
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* PRODUCT DISCOVERY */}
      <section className="mx-auto max-w-[1500px] px-5 py-24 lg:px-10 lg:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Product discovery</p>

            <h2 className="mt-5 font-display text-4xl uppercase sm:text-6xl">
              Explore the range.
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden h-10 items-center justify-center gap-2 rounded-md border border-border px-5 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
          >
            View all
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-y border-border bg-ink py-20 text-paper">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <BrandMarquee />

          <p className="mt-6 text-xs text-muted-foreground">
            Brand availability varies. Enquire for current options. No partnership status is implied.
          </p>
        </div>
      </section>

      {/* WHY MEG */}
      <section className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
        <div>
          <p className="eyebrow">Why MEG</p>

          <h2 className="mt-5 font-display text-5xl uppercase leading-none sm:text-7xl">
            The right product.
            <br />
            The right source.
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
            A focused destination for retail convenience, wholesale
            requirements and practical product guidance.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {[
            { title: "Wide product range", Icon: Cable },
            { title: "Trusted brands", Icon: ShieldCheck },
            { title: "Retail & wholesale", Icon: Store },
            { title: "Product guidance", Icon: Wrench },
          ].map(({ title, Icon }) => (
            <div key={title} className="bg-background p-7">
              <Icon className="text-primary" />

              <h3 className="mt-12 font-display text-xl uppercase">
                {title}
              </h3>

              <Check className="mt-5 size-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="flex items-center gap-4">
            <BoltMark />

            <p className="eyebrow">Who we serve</p>
          </div>

          <div className="mt-10 grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item, index) => {
              const icons = [Home, Wrench, Building2, Sparkles];
              const Icon = icons[index] ?? Home;

              return (
                <div
                  key={item.title}
                  className="bg-ink p-7 transition hover:bg-paper/5"
                >
                  <Icon className="text-primary" />

                  <h3 className="mt-16 font-display text-2xl uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-paper/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-end lg:px-10 lg:py-20">
          <h2 className="max-w-4xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-7xl">
            Planning a project or bulk requirement?
          </h2>

          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-ink bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:bg-background hover:text-foreground"
          >
            Talk to MEG
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
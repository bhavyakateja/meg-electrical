"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, Search, Zap } from "lucide-react";
import { useMemo, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { products } from "@/data/catalog";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function BrandLogo() {
  return (
    <img
      src="images/meg-logo.png"
      alt="MEG Electrical Solutions"
      className="h-80 w-auto object-contain"
    />
  );
}
function BrandLogo2() {
  return (
    <img
      src="images/meg-logo-2.png"
      alt="MEG a unit of Mangal Enterprises"
      className="h-80 w-auto object-contain"
    />
  );
}

function SearchDialog() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();

    if (!needle) {
      return products.slice(0, 4);
    }

    return products.filter((product) =>
      [product.name, product.category, product.brand, product.summary]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [query]);

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search products"
          >
            <Search />
          </Button>
        }
      />

      <DialogContent className="top-24 max-h-[80vh] translate-y-0 overflow-auto border-border bg-background sm:max-w-2xl">
        <DialogTitle className="font-display text-3xl uppercase">
          Search the range
        </DialogTitle>

        <DialogDescription>
          Search product groups, categories and brands.
        </DialogDescription>

        <Input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try ‘lighting’ or ‘switches’"
          className="h-12"
        />

        <div className="mt-2 divide-y divide-border">
          {results.length ? (
            results.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex items-center justify-between py-4"
              >
                <span>
                  <strong className="block text-foreground">
                    {product.name}
                  </strong>

                  <span className="text-sm text-muted-foreground">
                    {product.category}
                  </span>
                </span>

                <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            ))
          ) : (
            <p className="py-8 text-center text-muted-foreground">
              No matching product groups. Try a broader term.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-ink text-paper backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link
          href="/"
          aria-label="MEG Electrical Solutions home"
          className="flex items-center"
        >
          <BrandLogo />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wider text-paper/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SearchDialog />

          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            )}
          >
            Enquire
            <ArrowUpRight className="size-4" />
          </Link>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-paper hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </Button>
              }
            />

            <SheetContent className="!fixed !inset-0 !w-screen !h-[100dvh] !max-w-none !transform-none border-0 bg-ink text-paper p-4 sm:p-6 flex flex-col justify-between overflow-hidden z-50">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-border/40">
                    <BrandLogo />
                  </div>

                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <SheetDescription className="sr-only">
                    Browse MEG Electrical Solutions
                  </SheetDescription>

                  <nav
                    className="mt-2 grid gap-0.5"
                    aria-label="Mobile navigation"
                  >
                    {nav.map((item, index) => (
                      <SheetClose
                        key={item.href}
                        nativeButton={false}
                        render={
                          <Link
                            href={item.href}
                            className="group flex items-center justify-between border-b border-border/30 py-3 font-display text-2xl uppercase tracking-wide transition-colors hover:text-primary"
                          >
                            <span className="flex items-center gap-3">
                              <span className="text-xs text-primary font-sans font-mono">
                                0{index + 1}
                              </span>
                              {item.label}
                            </span>
                            <ArrowUpRight className="size-5 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                          </Link>
                        }
                      />
                    ))}
                  </nav>
                </div>

                <div className="pt-3 border-t border-border/40 mb-2">
                  <div className="border-l-2 border-primary pl-4 text-xs tracking-wide text-muted-foreground uppercase">
                    Retail + wholesale electrical sourcing.
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/30 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-10">
        {/* Brand Column: Centered on mobile/tablet, left-aligned on desktop */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <BrandLogo2 />

          <p className="mt-6 max-w-sm text-sm leading-6 text-paper/60">
            Electrical products for residential, commercial and industrial
            requirements—brought together under one roof.
          </p>
        </div>

        <FooterGroup
          title="Products"
          links={[
            ["All products", "/products"],
          ]}
        />

        <FooterGroup
          title="Company"
          links={[
            ["Works", "/work"],
            ["About MEG", "/about"],
            ["Brands", "/brands"],
            ["Contact", "/contact"],
          ]}
        />

        <FooterGroup
          title="Legal"
          links={[
            ["Privacy", "/privacy"],
            ["Cookies", "/cookies"],
            ["Terms", "/terms"],
          ]}
        />
      </div>

      <div className="border-t border-paper/10 px-5 py-6 text-xs text-paper/45 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap justify-between items-center gap-3">
          <span>© 2026 MEG Electrical Solutions</span>
          <span>Retail · Wholesale · Product sourcing</span>
          <span className="text-[8px] text-white/[0.03] transition-colors duration-300">
            Built by{" "}
            <a
              href="https://github.com/bhavyakateja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/[0.03] hover:text-[#ccff00] hover:drop-shadow-[0_0_8px_rgba(204,255,0,0.8)] transition-all duration-300"
            >
              Bhavya Kateja
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h2 className="mb-4 text-xs font-bold uppercase text-primary tracking-wider">
        {title}
      </h2>

      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={`${href}-${label}`}>
            <Link
              className="text-sm text-paper/75 transition-colors hover:text-primary"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export function PageIntro({
  kicker,
  title,
  text,
  dark = false,
}: {
  kicker: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "border-b border-border bg-ink text-paper"
          : "border-b border-border bg-surface"
      }
    >
      <div className="mx-auto max-w-[1500px] px-5 py-20 lg:px-10 lg:py-28">
        <p className="eyebrow text-primary">{kicker}</p>

        <h1 className="mt-5 max-w-5xl font-display text-5xl uppercase leading-[.9] sm:text-7xl lg:text-8xl">
          {title}
        </h1>

        <p
          className={
            dark
              ? "mt-7 max-w-2xl text-lg leading-8 text-paper/65"
              : "mt-7 max-w-2xl text-lg leading-8 text-muted-foreground"
          }
        >
          {text}
        </p>
      </div>
    </section>
  );
}

export function BoltMark() {
  return (
    <span className="inline-flex size-10 items-center justify-center bg-primary text-primary-foreground">
      <Zap
        className="size-5"
        fill="currentColor"
      />
    </span>
  );
}
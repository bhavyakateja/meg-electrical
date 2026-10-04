"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, products } from "@/data/catalog";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [category, setCategory] = useState(initialCategory ?? "All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const inCategory =
        category === "All" || product.category === category;

      const text = [
        product.name,
        product.category,
        product.summary,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedQuery || text.includes(normalizedQuery);

      return inCategory && matchesSearch;
    });
  }, [category, query]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <>
      <PageIntro
        kicker="Local product directory"
        title="Explore our electrical range."
        text="Browse product groups available for enquiry. Final specifications, brand availability and quantities are confirmed directly with MEG."
        dark
      />

      <section className="mx-auto max-w-[1500px] px-5 py-12 lg:px-10 lg:py-20">
        {/* Search + Filters */}
        <div className="flex flex-col gap-6 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative w-full lg:max-w-md">
            <span className="sr-only">Search products</span>

            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by product name, use case, or type..."
              className="h-12 border-border bg-background pl-11 focus-visible:ring-primary"
            />
          </label>

          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none"
            aria-label="Product category filters"
          >
            <SlidersHorizontal className="mr-1 size-4 shrink-0 text-primary" />

            <Button
              size="sm"
              variant={category === "All" ? "default" : "outline"}
              onClick={() => setCategory("All")}
              className="shrink-0 rounded-full px-5"
            >
              All Ranges
            </Button>

            {categories.map((item) => (
              <Button
                key={item.name}
                size="sm"
                variant={
                  category === item.name ? "default" : "outline"
                }
                onClick={() => setCategory(item.name)}
                className="shrink-0 rounded-full px-5"
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            verified product items
          </p>

          {(query || category !== "All") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-primary hover:bg-primary/10"
            >
              Clear filters
            </Button>
          )}
        </div>

        {/* Product Grid */}
        {filtered.length ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, index) => (
              <article
                key={product.slug}
                className="group relative flex flex-col justify-between overflow-hidden border border-border bg-ink bg-gradient-to-b from-ink to-zinc-900/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="block"
                  aria-label={`View ${product.name}`}
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {product.category}
                      </span>

                      <ShieldCheck className="size-4 text-primary opacity-80" />
                    </div>

                    {/* Product Image */}
                    <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden border border-border/50 bg-zinc-950/40">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center p-3 transition-transform duration-500 group-hover:scale-105"
                      />

                      {product.badge && (
                        <span className="absolute right-3 top-3 z-10 bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Product Title + Summary */}
                    <div className="mt-6">
                      <h3 className="font-display text-xl uppercase tracking-wide text-paper transition-colors group-hover:text-primary">
                        {product.name}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {product.summary}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Card Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                    Available on enquiry
                  </span>

                  <Link
                    href={`/contact?product=${encodeURIComponent(
                      product.name,
                    )}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-paper transition-colors hover:text-primary"
                  >
                    Enquire now

                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="my-20 rounded-lg border border-dashed border-border bg-card/20 p-12 text-center">
            <h2 className="font-display text-2xl uppercase text-paper">
              No matching products found
            </h2>

            <p className="mt-3 text-muted-foreground">
              Try adjusting your search query or reset your active
              category filter.
            </p>

            <Button
              onClick={clearFilters}
              className="mt-6"
            >
              Clear filters
            </Button>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary px-5 py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-wide">
              Can’t see your requirement?
            </h2>

            <p className="mt-2 max-w-xl text-sm opacity-90">
              We source custom technical electrical requirements and bulk
              project inventory directly through verified manufacturers.
            </p>
          </div>

          <Button
            nativeButton={false}
            render={<Link href="/contact">Send a custom enquiry</Link>}
            className="h-auto bg-ink px-8 py-6 font-semibold text-paper hover:bg-background hover:text-foreground"
          />
        </div>
      </section>
    </>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageSquareText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/catalog";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProduct(slug: string) {
  return products.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product not found | MEG",
      description: "Product group unavailable.",
    };
  }

  return {
    title: `${product.name} | MEG Electrical Solutions`,
    description: product.summary,
    openGraph: {
      title: `${product.name} | MEG`,
      description: product.summary,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="grid bg-ink text-paper lg:min-h-[720px] lg:grid-cols-2">
        <div className="flex flex-col justify-between p-5 py-16 lg:p-12">
          <Link
            href="/products"
            className="flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All products
          </Link>

          <div className="my-20">
            <p className="eyebrow">{product.category}</p>

            <h1 className="mt-5 font-display text-6xl uppercase leading-[.85] sm:text-8xl">
              {product.name}
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-paper/65">
              {product.summary}
            </p>

            <Button
              nativeButton={false}
              size="lg"
              className="mt-9"
              render={
                <Link
                  href={`/contact?product=${encodeURIComponent(
                    product.name,
                  )}`}
                >
                  Enquire about this range
                  <MessageSquareText />
                </Link>
              }
            />
          </div>

          <p className="text-xs uppercase text-paper/40">
            Product showcase · Availability on enquiry
          </p>
        </div>

        <div className="relative h-full min-h-[420px] w-full bg-zinc-950/40 flex items-center justify-center">
          <img
            src={product.image}
            alt={`${product.name} product showcase`}
            className="h-full w-full object-contain p-6"
          />
          {product.badge && (
            <span className="absolute top-6 right-6 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 shadow-md">
              {product.badge}
            </span>
          )}
        </div>
      </section>

      {/* Applications + specifications */}
      <section className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="eyebrow">Applications</p>

          <div className="mt-7 space-y-0">
            {product.applications?.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-t border-border py-5"
              >
                <Check className="size-4 text-primary" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Range notes</p>

          <div className="mt-7 space-y-0">
            {product.specs?.map((item) => (
              <div
                key={item}
                className="border-t border-border py-5 text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Exact brands, models and specifications vary. Contact MEG for
            current product options.
          </p>
        </div>
      </section>

      {/* Related products */}
      <section className="bg-surface px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl uppercase">
              Continue exploring.
            </h2>

            <Button
              nativeButton={false}
              variant="ghost"
              render={
                <Link href="/products">
                  View all
                  <ArrowRight />
                </Link>
              }
            />
          </div>

          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            {related.map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
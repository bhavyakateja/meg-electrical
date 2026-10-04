import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden border border-border bg-ink bg-gradient-to-b from-ink to-zinc-900/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
      <div>
        {/* Card Header Top */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {product.category}
          </span>
          <ShieldCheck className="size-4 text-primary opacity-80" />
        </div>

        {/* Product Image Frame */}
        <Link
          href={`/products/${product.slug}`}
          className="relative mt-6 block aspect-[4/3] w-full overflow-hidden bg-zinc-950/40 border border-border/50"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center p-4 transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-md">
              {product.badge}
            </span>
          )}
        </Link>

        {/* Product Titles & Summary */}
        <div className="mt-6">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-display text-xl uppercase tracking-wide text-paper transition-colors hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.summary}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.15em] text-primary font-medium">
          Available on enquiry
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-paper transition-colors hover:text-primary"
        >
          View details
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
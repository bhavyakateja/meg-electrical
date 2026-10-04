import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About MEG Electrical Solutions",
  description:
    "Learn how MEG supports retail, wholesale and project electrical product requirements.",
  openGraph: {
    title: "About MEG Electrical Solutions",
    description:
      "A focused destination for electrical products from established brands.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="About MEG"
        title="Built around better electrical sourcing."
        text="MEG Electrical Solutions is a retailer and wholesaler helping customers explore and source electrical products across residential, commercial and industrial requirements."
        dark
      />

      <section className="mx-auto grid max-w-[1500px] gap-16 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="eyebrow">Our position</p>

          <h2 className="mt-5 font-display text-5xl uppercase">
            Products. Choice. Practical guidance.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            MEG does not manufacture electrical products. Our role is to bring
            relevant product categories and established brands into one
            considered sourcing experience.
          </p>

          <p>
            We serve individual buyers, electricians, businesses and project
            teams with a focus on range, dependable sourcing and clear
            assistance.
          </p>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1500px] gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {["Reliability", "Safety", "Innovation", "Integrity"].map((item) => (
            <div className="bg-ink p-8" key={item}>
              <Check className="text-primary" />

              <h3 className="mt-20 font-display text-2xl uppercase">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-primary-foreground lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-6">
          <h2 className="font-display text-4xl uppercase">
            Start with your requirement.
          </h2>

          <Button
            nativeButton={false}
            className="bg-ink text-paper hover:bg-background hover:text-foreground"
            render={
              <Link href="/contact">
                Contact MEG
                <ArrowRight />
              </Link>
            }
          />
        </div>
      </section>
    </>
  );
}
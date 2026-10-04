"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { company } from "@/data/catalog";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleOpenEmail = () => {
    if (!company.email) return;

    const subject = encodeURIComponent(
      `MEG enquiry from ${name || "website visitor"}`,
    );
    const body = encodeURIComponent(message);

    // This opens Gmail web compose directly in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${company.email}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, "_blank");
  };

  const contactItems = [
    {
      Icon: Phone,
      label: "Phone",
      value: company.phone,
    },
    {
      Icon: Mail,
      label: "Email",
      value: company.email,
    },
    {
      Icon: MapPin,
      label: "Store location",
      value: company.address,
    },
  ];

  return (
    <>
      <PageIntro
        kicker="Contact MEG"
        title="Tell us what you need."
        text="Share your retail, wholesale or project requirement. Verified direct contact information."
        dark
      />

      <section className="mx-auto grid max-w-[1500px] gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
        <div className="space-y-px bg-border">
          {contactItems.map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-5 bg-background p-6"
            >
              <Icon className="text-primary" />

              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground">
                  {label}
                </p>

                <p className="mt-1 font-semibold">{value}</p>
              </div>
            </div>
          ))}

          <p className="bg-surface p-5 text-sm text-muted-foreground">
            {company.note}
          </p>
        </div>

        <div>
          <h2 className="font-display text-3xl uppercase">
            Prepare an email enquiry
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            This helper opens Gmail with your message ready. Nothing is stored on this
            website.
          </p>

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">
              Your name

              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Requirement

              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={6}
                placeholder="Products, quantities or project details"
                className="w-full rounded-md border border-input bg-transparent p-3 text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </label>

            <Button
              onClick={handleOpenEmail}
              disabled={!company.email}
              className="justify-self-start gap-2"
            >
              Open Gmail Compose <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
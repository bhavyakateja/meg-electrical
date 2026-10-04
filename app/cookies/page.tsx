import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy | MEG Electrical Solutions",
  description:
    "Cookie policy for the MEG Electrical Solutions static website.",
  openGraph: {
    title: "Cookie Policy | MEG",
    description: "Cookie information for this website.",
  },
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie policy"
      intro="This static website does not currently use non-essential cookies or analytics."
      sections={[
        [
          "Current use",
          "No marketing, advertising or analytics cookies are intentionally set by this website.",
        ],
        [
          "Essential technology",
          "The hosting platform may use strictly necessary technical measures to deliver and secure the website.",
        ],
        [
          "Future changes",
          "If analytics or optional cookies are introduced, this notice and the appropriate consent controls should be updated before deployment.",
        ],
      ]}
    />
  );
}
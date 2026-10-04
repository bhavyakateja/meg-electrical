import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | MEG Electrical Solutions",
  description:
    "Privacy policy template for the MEG Electrical Solutions website.",
  openGraph: {
    title: "Privacy Policy | MEG",
    description: "How this static website handles information.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="Editable policy template — review with your legal adviser before launch."
      sections={[
        [
          "Information on this website",
          "This website is currently a static product showcase and does not provide accounts, online purchasing or stored enquiry submissions.",
        ],
        [
          "Contact actions",
          "If you contact MEG through your email or phone application, your information is handled through that service and MEG’s normal business processes.",
        ],
        [
          "Updates",
          "This policy should be updated when verified business details, analytics or new website features are introduced.",
        ],
      ]}
    />
  );
}
import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | MEG Electrical Solutions",
  description: "Website terms template for MEG Electrical Solutions.",
  openGraph: {
    title: "Terms & Conditions | MEG",
    description: "Terms for using the MEG website.",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & conditions"
      intro="Editable terms template — review with your legal adviser before launch."
      sections={[
        [
          "Website purpose",
          "This website provides general information about product categories that may be available through MEG Electrical Solutions.",
        ],
        [
          "Product information",
          "Images and descriptions are illustrative. Availability, brand, specifications, suitability and commercial terms must be confirmed directly with MEG.",
        ],
        [
          "No online transaction",
          "The website does not currently process orders, payments or create a binding sales agreement.",
        ],
        [
          "Intellectual property",
          "Brand names and marks belong to their respective owners. Their mention does not imply an official partnership or authorization.",
        ],
      ]}
    />
  );
}
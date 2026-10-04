import { PageIntro } from "@/components/site-shell";

type LegalPageProps = {
  title: string;
  intro: string;
  sections: [string, string][];
};

export function LegalPage({
  title,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageIntro
        kicker="Legal information"
        title={title}
        text={intro}
      />

      <article className="mx-auto max-w-4xl px-5 py-20">
        {sections.map(([heading, text]) => (
          <section
            key={heading}
            className="border-t border-border py-8"
          >
            <h2 className="font-display text-2xl uppercase">
              {heading}
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              {text}
            </p>
          </section>
        ))}
      </article>
    </>
  );
}
import PageShell from "../components/PageShell";

export default function Resources() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Insights, case studies, research, and documentation for software buyers."
      description="The resources section should help clients understand TECFIQ’s software products, implementation process, research benchmarks, local business use cases, and technical documentation."
      features={[
        "Blog and buyer guides",
        "Research lab and benchmarks",
        "Case studies with measurable outcomes",
        "Product documentation",
        "Technical implementation guides",
        "Comparison and pricing articles",
      ]}
    />
  );
}
import PageShell from "../../components/PageShell";

export default function Captura() {
  return (
    <PageShell
      eyebrow="Captura Data Scanning"
      title="High-volume document scanning and OCR-assisted data extraction."
      description="Captura is TECFIQ’s data scanning and extraction solution for organizations that need to digitize paper-heavy records, extract information, and convert physical documents into searchable digital workflows."
      features={[
        "High-volume scanning workflows",
        "OCR-assisted data extraction",
        "Support for local document formats",
        "Metadata capture and indexing",
        "Review and validation workflow",
        "Integration with document management systems",
      ]}
    />
  );
}
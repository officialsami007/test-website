import PageShell from "../../components/PageShell";

export default function EnterpriseDataProcessing() {
  return (
    <PageShell
      eyebrow="Enterprise Data Processing"
      title="AI-assisted data processing for document-heavy business workflows."
      description="TECFIQ helps organizations process, extract, classify, and structure enterprise data using custom software, OCR pipelines, AI workflows, dashboards, and secure data management systems."
      features={[
        "Document extraction pipelines",
        "Structured data processing",
        "OCR and AI-assisted classification",
        "Business reporting dashboards",
        "Data migration and cleanup workflows",
        "Secure storage and access management",
      ]}
    />
  );
}
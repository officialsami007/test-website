import PageShell from "../../components/PageShell";

export default function AiLlm() {
  return (
    <PageShell
      eyebrow="AI & LLM Enterprise Integration"
      title="AI chatbots and automation systems for enterprise operations."
      description="TECFIQ builds AI and LLM solutions for Bangladeshi businesses, including localized Bengali chatbots, RAG pipelines, document question-answering systems, enterprise data processing, and workflow automation."
      features={[
        "Localized Bengali and Romanized Bengali chatbot support",
        "Retrieval-augmented generation for company documents",
        "AI-assisted document search and summarization",
        "Workflow automation with human review checkpoints",
        "Private deployment options for sensitive business data",
        "Evaluation approach to reduce hallucinations",
      ]}
    />
  );
}
import PageShell from "../components/PageShell";

export default function Platform() {
  return (
    <PageShell
      eyebrow="TECFIQ Platform"
      title="A shared software layer for workflows, data, permissions, and automation."
      description="The TECFIQ platform connects SaaS products, custom software, integrations, reporting, and AI automation into a more structured operational system for businesses."
      features={[
        "Workflow automation for approvals and routing",
        "Analytics and reporting across business operations",
        "Role-based permissions and secure access",
        "Integration-ready architecture for devices, APIs, and payment gateways",
        "AI automation layer for search, extraction, and summarization",
        "Documentation and support for admins and technical teams",
      ]}
    />
  );
}
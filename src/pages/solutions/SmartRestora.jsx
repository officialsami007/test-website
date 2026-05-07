import PageShell from "../../components/PageShell";

export default function SmartRestora() {
  return (
    <PageShell
      eyebrow="Restaurant POS & Operations"
      title="SmartRestora POS for restaurants, cafes, and food courts."
      description="SmartRestora is TECFIQ’s restaurant POS and operations platform for Bangladeshi restaurants, supporting billing, kitchen order flow, inventory visibility, multi-counter synchronization, sales reporting, and local payment integration."
      features={[
        "Multi-counter billing synchronization",
        "Kitchen order and inventory workflow",
        "Sales dashboard and reporting",
        "Payment gateway-ready architecture",
        "Designed for Dhaka restaurants and food courts",
        "Implementation, training, and support",
      ]}
    />
  );
}
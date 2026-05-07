import {
  Brain,
  FileSearch,
  Store,
  Users,
  GraduationCap,
  Workflow,
  BarChart3,
  ShieldCheck,
  Plug,
  Bot,
  BookOpen,
  FlaskConical,
  FileText,
  Building2,
} from "lucide-react";

export const navMenus = {
  products: {
    label: "Products",
    columns: [
      {
        title: "AI & Automation",
        items: [
          {
            icon: Brain,
            title: "AI & LLM Chatbots",
            description: "Localized Bengali AI chatbots, RAG pipelines, and enterprise automation.",
            href: "/solutions/ai-llm-chatbots",
          },
          {
            icon: Bot,
            title: "Enterprise Data Processing",
            description: "AI-assisted document workflows, data extraction, and automation pipelines.",
            href: "/solutions/enterprise-data-processing",
          },
        ],
      },
      {
        title: "Business Software",
        items: [
          {
            icon: FileSearch,
            title: "Captura Data Scanning",
            description: "OCR-assisted scanning and extraction for local enterprise documents.",
            href: "/solutions/captura-data-scanning",
          },
          {
            icon: FileSearch,
            title: "XDOCS AI DMS",
            description: "Secure document management with role access and universal file preview.",
            href: "/solutions/xdocs-ai-dms",
          },
          {
            icon: Store,
            title: "SmartRestora POS",
            description: "Restaurant POS, billing, inventory, kitchen flow, and multi-counter sync.",
            href: "/solutions/smartrestora-pos",
          },
          {
            icon: Users,
            title: "HajiraBook HR & Payroll",
            description: "Attendance, payroll, biometric sync, roster, and employee records.",
            href: "/solutions/hajirabook-payroll",
          },
        ],
      },
      {
        title: "Education",
        items: [
          {
            icon: GraduationCap,
            title: "School Management System",
            description: "Student records, fees, exams, parent communication, and reporting.",
            href: "/solutions/school-management-system",
          },
          {
            icon: GraduationCap,
            title: "Coaching Management SaaS",
            description: "Batch scheduling, fee tracking, SMS alerts, and student operations.",
            href: "/solutions/coaching-management-saas",
          },
        ],
      },
    ],
    promos: [
      {
        title: "Explore all products",
        description: "See TECFIQ’s full SaaS and enterprise software ecosystem.",
        href: "/products",
      },
      {
        title: "AI automation layer",
        description: "Use AI, OCR, RAG, and workflow automation across business operations.",
        href: "/platform",
      },
    ],
  },

  platform: {
    label: "Platform",
    columns: [
      {
        title: "Platform Overview",
        items: [
          {
            icon: Workflow,
            title: "Workflow Automation",
            description: "Automate approvals, routing, notifications, and business processes.",
            href: "/platform#workflow",
          },
          {
            icon: BarChart3,
            title: "Analytics & Reporting",
            description: "Operational dashboards, reports, and decision-ready insights.",
            href: "/platform#analytics",
          },
          {
            icon: ShieldCheck,
            title: "Role-Based Permissions",
            description: "Control who can view, edit, approve, and manage business data.",
            href: "/platform#permissions",
          },
          {
            icon: Plug,
            title: "Integrations",
            description: "Connect biometric devices, payment gateways, APIs, and external tools.",
            href: "/platform#integrations",
          },
        ],
      },
    ],
    promos: [
      {
        title: "TECFIQ Platform",
        description: "A shared operational layer across SaaS products, custom apps, and AI workflows.",
        href: "/platform",
      },
      {
        title: "AI for local business operations",
        description: "Use AI to search, extract, summarize, and automate operational data.",
        href: "/solutions/ai-llm-chatbots",
      },
    ],
  },

  resources: {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        items: [
          {
            icon: BookOpen,
            title: "Blog / Insights",
            description: "SEO and GEO-ready articles for software buyers and technical teams.",
            href: "/insights/blog",
          },
          {
            icon: FlaskConical,
            title: "Research Lab",
            description: "Benchmarks, experiments, and original local software research.",
            href: "/insights/research-lab",
          },
          {
            icon: FileText,
            title: "Case Studies",
            description: "Project stories with problem, solution, implementation, and metrics.",
            href: "/case-studies",
          },
          {
            icon: BookOpen,
            title: "Documentation",
            description: "Product guides, setup steps, integration examples, and API-style docs.",
            href: "/documentation",
          },
        ],
      },
    ],
    promos: [
      {
        title: "Featured guide",
        description: "The Enterprise Guide to Deploying AI and LLM Chatbots in Bangladesh.",
        href: "/insights/blog",
      },
      {
        title: "Research benchmark",
        description: "Bengali OCR and LLM benchmarks for local enterprise use cases.",
        href: "/insights/research-lab",
      },
    ],
  },

  company: {
    label: "Company",
    columns: [
      {
        title: "About TECFIQ",
        items: [
          {
            icon: Building2,
            title: "About Us",
            description: "Company story, mission, location, delivery process, and product vision.",
            href: "/company/about-us",
          },
          {
            icon: Users,
            title: "Leadership Team",
            description: "Founder, engineering, product, and delivery team profiles.",
            href: "/company/leadership-team",
          },
          {
            icon: ShieldCheck,
            title: "Certifications & Compliance",
            description: "Security, privacy, QA, access control, and compliance practices.",
            href: "/company/certifications-compliance",
          },
        ],
      },
    ],
    promos: [
      {
        title: "Client reviews",
        description: "Verified testimonials connected to products, industries, and outcomes.",
        href: "/company/client-reviews",
      },
    ],
  },
};
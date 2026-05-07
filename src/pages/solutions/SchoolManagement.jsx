import PageShell from "../../components/PageShell";

export default function SchoolManagement() {
  return (
    <PageShell
      eyebrow="School Management System"
      title="Digital school management for administration, fees, exams, and communication."
      description="TECFIQ’s school management system helps educational institutions manage student records, class sections, fee collection, parent communication, exam records, grade publishing, and administrative reporting."
      features={[
        "Student and guardian profiles",
        "Class and section management",
        "Fee collection and receipt tracking",
        "Exam and grade records",
        "Parent SMS and communication workflow",
        "Admin dashboards and reports",
      ]}
    />
  );
}
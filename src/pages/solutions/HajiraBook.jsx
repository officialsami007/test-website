import PageShell from "../../components/PageShell";

export default function HajiraBook() {
  return (
    <PageShell
      eyebrow="HR, Attendance & Payroll"
      title="HajiraBook for attendance, payroll, roster, and employee management."
      description="HajiraBook is TECFIQ’s HR and payroll management system for Bangladesh, built for biometric attendance integration, employee records, shift management, leave tracking, overtime calculation, and payroll workflows."
      features={[
        "Biometric attendance integration",
        "Employee records and HR profiles",
        "Payroll and overtime workflow",
        "Leave and roster management",
        "Attendance reports and dashboards",
        "Designed for offices, factories, and distributed teams",
      ]}
    />
  );
}
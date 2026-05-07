import PageShell from "../../components/PageShell";

export default function CoachingManagement() {
  return (
    <PageShell
      eyebrow="Coaching Management SaaS"
      title="Coaching center management software for batches, fees, SMS, and students."
      description="TECFIQ’s coaching management SaaS is designed for Bangladeshi coaching centers that need to manage batch schedules, student records, monthly fees, parent notifications, exam results, and administrative operations."
      features={[
        "Batch and shift management",
        "Student admission and records",
        "Monthly fee collection tracking",
        "SMS notification workflow",
        "Exam and result management",
        "Reports for admins and teachers",
      ]}
    />
  );
}
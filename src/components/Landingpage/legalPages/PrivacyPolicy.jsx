
import LegalPageLayout from "./LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <div className="space-y-8">
        <p>Your privacy is important to us.</p>

        <ul className="list-disc space-y-5 pl-6 marker:text-[#9A5B45]">
          <li>
            We may collect basic information such as your
            name, phone number, email address, and course
            interests when you contact us or submit a form.
          </li>

          <li>
            This information is used to respond to enquiries,
            manage registrations, and communicate about
            our services.
          </li>

          <li>
            We do not sell your personal information.
          </li>

          <li>
            We take reasonable steps to keep your
            information secure.
          </li>
        </ul>

        <p>
          For privacy-related questions or requests,
          please contact us through our official channels.
        </p>
      </div>
    </LegalPageLayout>
  );
}

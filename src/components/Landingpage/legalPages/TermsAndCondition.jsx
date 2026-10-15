
import LegalPageLayout from "./LegalPageLayout";

export default function TermsAndCondition() {
  return (
    <LegalPageLayout title="Terms & Conditions">
      <div className="space-y-8">

        <p>
          Welcome to Renu Thread & Brush Arts. We offer
          creative learning classes and custom handmade services.
        </p>

        <ul className="list-disc space-y-5 pl-7 marker:text-[#9A5B45]">
          <li>
            Course fees may be paid in installments, but full
            payment must be completed before joining.
          </li>

          <li>
            Payments are accepted through UPI, bank transfer,
            cash, or other agreed methods.
          </li>

          <li>
            Course schedules, fees, and availability will be
            communicated during enrollment.
          </li>

          <li>
            Custom orders are confirmed based on customer
            requirements and mutual agreement.
          </li>
        </ul>

        <p>
          By enrolling in our classes or using our services,
          you agree to these terms and our applicable policies.
        </p>

        <p>
          For enquiries, please contact Renu Thread & Brush
          Arts through our official channels.
        </p>

      </div>
    </LegalPageLayout>
  );
}

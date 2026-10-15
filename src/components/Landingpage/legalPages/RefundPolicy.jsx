
import LegalPageLayout from "./LegalPageLayout";

export default function RefundPolicy() {
  return (
    <LegalPageLayout title="Refund & Cancellation Policy">
      <div className="space-y-8">
        <p>
          We aim to maintain a fair and transparent
          refund process.
        </p>

        <ul className="list-disc space-y-5 pl-6 marker:text-[#9A5B45]">
          <li>
            <strong>Before classes begin:</strong>{" "}
            Students may request a refund of fees paid.
          </li>

          <li>
            <strong>After joining:</strong>{" "}
            Course fees are non-refundable for voluntary
            withdrawal.
          </li>

          <li>
            Refund requests should be made through our
            official contact channels.
          </li>

          <li>
            Custom-order cancellations and refunds will
            be discussed based on the order's requirements
            and progress.
          </li>
        </ul>

        <p>
          All refunds and cancellations remain subject to
          applicable consumer-protection laws.
        </p>
      </div>
    </LegalPageLayout>
  );
}

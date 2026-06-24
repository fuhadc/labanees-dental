import SectionHeader from "@/components/SectionHeader";
import ElfsightGoogleReviews from "@/components/ElfsightGoogleReviews";
import ReviewsBeforeAfter from "@/sections/ReviewsBeforeAfter";

export default function ReviewsSection() {
  return (
    <section
      aria-label="Patient Stories & Google Reviews"
      className="bg-transparent"
    >
      <SectionHeader title="Patient Stories" align="center" />

      <div className="page-container pb-[var(--space-section-y)]">
        <ReviewsBeforeAfter />
        <ElfsightGoogleReviews />
      </div>
    </section>
  );
}

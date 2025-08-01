import AddOnsPartnersSection from "@/components/frontend/pricing-page/Addons";
import AddOns from "@/components/frontend/pricing-page/Addons";
import PricingComparison from "@/components/frontend/pricing-page/feature-comparison";
import PricingCard from "@/components/frontend/pricing-card";
import PricingCta from "@/components/frontend/pricing-page/pricing-cta";

export default function Home() {
	return (
		<div className="bg-dark text-white min-h-screen relative">
			<main className="">
				<PricingCta />

				<PricingCard />

				{/* <section className="mb-16">
					<div className="text-center mb-8">
						<h3 className="text-2xl font-bold text-gray-900">Compare Plans</h3>
					</div>
					
				</section> */}
				<PricingComparison />

				<AddOnsPartnersSection />
			</main>
		</div>
	);
}

import React from "react";
import { Rocket, Zap, Building, Check, Minus } from "lucide-react";
import PricingCard from "./pricing-card";

export default function PricingSection() {
	return (
		<div>
			<section id="pricing" className="py-24 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16 ">
						<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400">
							Flexible Solutions
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							Choose the plan that works for your project. All plans include
							core features with flexible scaling options.
						</p>
					</div>

					<PricingCard />
					{/* Additional Info */}
					<div className="mt-16 text-center">
						<div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
							<h3 className="text-xl font-medium text-white mb-4">
								Need Something Custom?
							</h3>
							<p className="text-gray-400 mb-6">
								Every project is unique. We offer flexible pricing and custom
								solutions tailored to your specific requirements and budget.
							</p>
							<button className="btn-secondary px-6 py-3 rounded-full font-medium">
								Discuss Your Project
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

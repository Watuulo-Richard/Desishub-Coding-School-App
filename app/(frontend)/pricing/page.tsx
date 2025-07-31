import React from "react";
import { Rocket, Zap, Building, Check, Minus } from "lucide-react";
import PricingCard from "@/components/frontend/pricing-card";

export default function PricingPage() {
	return (
		<div className="relative overflow-hidden">
			<section id="pricing" className="py-24 mt-4 px-6 relative">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="text-center mb-16">
						<div className="inline-block mb-4 px-4 py-1 bg-white/5 rounded-full border border-white/10">
							<p className="text-sm font-medium text-blue-300">Pricing Plans</p>
						</div>
						<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400">
							Flexible Solutions
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							Choose the plan that works for your project. All plans include
							core features with flexible scaling options.
						</p>
					</div>

					{/* Pricing toggle */}
					<div className="mb-16 flex items-center justify-center gap-4">
						<div className="relative inline-flex items-center bg-white/5 rounded-full p-1 border border-white/10">
							<span className="px-4 py-2 text-sm font-medium text-white/70">
								Project-based
							</span>
							<button className="px-4 py-2 text-sm font-medium bg-blue-600 rounded-full text-white shadow-sm">
								Retainer <span className="text-blue-300">(Save 20%)</span>
							</button>
						</div>
					</div>

					{/* Pricing Cards */}
					<PricingCard />

					{/* Enterprise CTA */}
					<div className="mt-20 text-center">
						<div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
							{/* Decorative elements */}
							<div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-900/30 rounded-full filter blur-3xl"></div>
							<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-900/30 rounded-full filter blur-3xl"></div>

							<div className="relative z-10">
								<div className="inline-flex items-center justify-center mb-4">
									<Building className="w-5 h-5 text-indigo-400 mr-2" />
									<h3 className="text-xl font-medium text-white">
										Enterprise Solutions
									</h3>
								</div>
								<p className="text-gray-400 mb-6 max-w-2xl mx-auto">
									For organizations needing custom solutions with dedicated
									support, security compliance, and enterprise-grade
									infrastructure.
								</p>
								<div className="flex flex-col sm:flex-row justify-center gap-4">
									<button className="px-6 py-3 rounded-full font-medium bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-200">
										Request Demo
									</button>
									<button className="px-6 py-3 rounded-full font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200">
										Contact Sales
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

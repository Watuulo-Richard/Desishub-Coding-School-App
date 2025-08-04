"use client";
import React, { useEffect, useState } from "react";

type CardNumber = 1 | 2 | 3 | 4;

const featureTexts: Record<CardNumber, string[]> = {
	1: [
		"Up to 5,000 monthly API calls",
		"Basic analytics dashboard",
		"Email support",
		"Standard integrations",
	],
	2: [
		"Up to 50,000 monthly API calls",
		"Advanced analytics & reporting",
		"Priority email support",
		"Custom integrations available",
	],
	3: [
		"Up to 500,000 monthly API calls",
		"Real-time monitoring & alerts",
		"24/7 phone & chat support",
		"Dedicated account manager",
	],
	4: [
		"Unlimited API calls",
		"White-label solutions",
		"Custom SLA agreements",
		"On-premise deployment options",
	],
};

export default function PricingCta() {
	const [currentServiceCard, setCurrentServiceCard] = useState<CardNumber>(4);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentServiceCard((prev) =>
				prev === 4 ? 1 : ((prev + 1) as CardNumber)
			);
		}, 6000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="py-28 px-2 sm:px-6 max-w-7xl mx-auto  lg:px-8 ">
			<div className="max-w-7xl mx-auto">
				<div className="enhanced-glass rounded-3xl p-8 md:p-16 relative">
					{/* Diagonal Fade Grid Background - Top Left */}
					<div
						className="absolute inset-0 z-0 rounded-3xl opacity-5"
						style={{
							backgroundImage: `
                linear-gradient(to right, #d1d5db 1px, transparent 1px),
                linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
              `,
							backgroundSize: "32px 32px",
							WebkitMaskImage:
								"radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
							maskImage:
								"radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
						}}
					/>
					<div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
						<div className="flex-1 max-w-lg">
							<div className="flex items-center gap-2 text-gray-400 mb-6">
								<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
								<span className="uppercase text-xs font-medium tracking-wide">
									Choose Your Plan
								</span>
							</div>
							<h2 className="text-4xl font-light tracking-tight mb-6 font-display">
								Flexible Pricing
							</h2>
							<p className="text-base text-gray-400 mb-8">
								Select the perfect plan for your needs. Scale up or down anytime
								with our flexible pricing structure designed to grow with your
								business.
							</p>

							<div className="flex gap-3 mb-8" id="service-dots">
								{[1, 2, 3, 4].map((num) => (
									<button
										key={num}
										className={`service-dot w-2 h-2 rounded-full transition-all ${
											currentServiceCard === num
												? "bg-white scale-125"
												: "bg-gray-600 hover:bg-gray-300"
										}`}
										data-card={num}
										onClick={() => setCurrentServiceCard(num as CardNumber)}
									></button>
								))}
							</div>

							<div
								className="space-y-4 text-sm text-gray-400"
								id="service-features"
							>
								{featureTexts[currentServiceCard].map((text, idx) => (
									<div className="flex items-center gap-3" key={idx}>
										<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
										<span>{text}</span>
									</div>
								))}
							</div>
						</div>

						<div
							className={`services-stack card-${currentServiceCard}-active`}
							id="services-container"
						>
							<div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl overflow-hidden">
								<div className="h-full flex flex-col p-6 relative">
									{/* Credit card chip */}
									<div className="absolute top-6 right-6 w-8 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>

									{/* Card number pattern */}
									<div className="absolute top-16 left-6 right-6 text-gray-400 text-xs font-mono tracking-widest opacity-30">
										**** **** **** 0001
									</div>

									<div className="flex items-center gap-3 mb-6 mt-8">
										<div className="p-2 rounded-full bg-white/10 border border-white/20">
											<i className="fas fa-rocket text-white text-xl"></i>
										</div>
										<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
											Starter Plan
										</span>
									</div>
									<h3 className="text-2xl font-semibold mb-4 font-display">
										$29
										<span className="text-lg font-normal text-gray-400">
											/month
										</span>
									</h3>
									<p className="text-gray-300 mb-6 flex-1 text-sm">
										Perfect for small businesses and startups looking to get
										started with our platform.
									</p>
									<div className="flex items-center gap-4 text-sm mb-6">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">5K API calls</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">Email support</span>
										</div>
									</div>

									{/* Card holder info */}
									<div className="mt-auto">
										<div className="flex justify-between items-end">
											<div>
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													Valid Thru
												</div>
												<div className="text-sm font-mono text-gray-300">
													12/27
												</div>
											</div>
											<div className="text-right">
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													DesishHub
												</div>
												<div className="text-white font-semibold">STARTER</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl overflow-hidden">
								<div className="h-full flex flex-col p-6 relative">
									{/* Credit card chip */}
									<div className="absolute top-6 right-6 w-8 h-6 bg-gradient-to-br from-silver-400 to-silver-600 rounded-sm opacity-80"></div>

									{/* Card number pattern */}
									<div className="absolute top-16 left-6 right-6 text-gray-400 text-xs font-mono tracking-widest opacity-30">
										**** **** **** 0002
									</div>

									{/* Popular badge */}
									<div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full transform rotate-12">
										Popular
									</div>

									<div className="flex items-center gap-3 mb-6 mt-8">
										<div className="p-2 rounded-full bg-white/10 border border-white/20">
											<i className="fas fa-star text-white text-xl"></i>
										</div>
										<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
											Professional Plan
										</span>
									</div>
									<h3 className="text-2xl font-semibold mb-4 font-display">
										$89
										<span className="text-lg font-normal text-gray-400">
											/month
										</span>
									</h3>
									<p className="text-gray-300 mb-6 flex-1 text-sm">
										Ideal for growing businesses that need advanced features and
										higher usage limits.
									</p>
									<div className="flex items-center gap-4 text-sm mb-6">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">50K API calls</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">Priority support</span>
										</div>
									</div>

									{/* Card holder info */}
									<div className="mt-auto">
										<div className="flex justify-between items-end">
											<div>
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													Valid Thru
												</div>
												<div className="text-sm font-mono text-gray-300">
													12/27
												</div>
											</div>
											<div className="text-right">
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													DesishHub
												</div>
												<div className="text-white font-semibold">
													PROFESSIONAL
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl overflow-hidden">
								<div className="h-full flex flex-col p-6 relative">
									{/* Credit card chip */}
									<div className="absolute top-6 right-6 w-8 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm"></div>

									{/* Card number pattern */}
									<div className="absolute top-16 left-6 right-6 text-gray-400 text-xs font-mono tracking-widest opacity-30">
										**** **** **** 0003
									</div>

									<div className="flex items-center gap-3 mb-6 mt-8">
										<div className="p-2 rounded-full bg-white/10 border border-white/20">
											<i className="fas fa-building text-white text-xl"></i>
										</div>
										<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
											Business Plan
										</span>
									</div>
									<h3 className="text-2xl font-semibold mb-4 font-display">
										$299
										<span className="text-lg font-normal text-gray-400">
											/month
										</span>
									</h3>
									<p className="text-gray-300 mb-6 flex-1 text-sm">
										For established businesses with high-volume needs and
										premium support requirements.
									</p>
									<div className="flex items-center gap-4 text-sm mb-6">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">500K API calls</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">24/7 support</span>
										</div>
									</div>

									{/* Card holder info */}
									<div className="mt-auto">
										<div className="flex justify-between items-end">
											<div>
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													Valid Thru
												</div>
												<div className="text-sm font-mono text-gray-300">
													12/27
												</div>
											</div>
											<div className="text-right">
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													DesishHub
												</div>
												<div className="text-white font-semibold">BUSINESS</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="service-stack-card relative h-96 enhanced-glass rounded-2xl shadow-2xl overflow-hidden">
								<div className="h-full flex flex-col p-6 relative">
									{/* Credit card chip - Premium gold */}
									<div className="absolute top-6 right-6 w-8 h-6 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-sm shadow-lg"></div>

									{/* Card number pattern */}
									<div className="absolute top-16 left-6 right-6 text-gray-400 text-xs font-mono tracking-widest opacity-30">
										**** **** **** 0004
									</div>

									{/* Premium badge */}
									<div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-3 py-1 rounded-full transform rotate-12 font-semibold">
										Premium
									</div>

									<div className="flex items-center gap-3 mb-6 mt-8">
										<div className="p-2 rounded-full bg-white/10 border border-white/20">
											<i className="fas fa-crown text-white text-xl"></i>
										</div>
										<span className="text-xs uppercase tracking-wide text-gray-300 font-medium">
											Enterprise Plan
										</span>
									</div>
									<h3 className="text-2xl font-semibold mb-4 font-display">
										Custom Pricing
									</h3>
									<p className="text-gray-300 mb-6 flex-1 text-sm">
										Tailored solutions for large organizations with unlimited
										usage and dedicated infrastructure.
									</p>
									<div className="flex items-center gap-4 text-sm mb-6">
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">Unlimited usage</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-2 h-2 bg-gray-300 rounded-full"></div>
											<span className="text-gray-400">Custom SLA</span>
										</div>
									</div>

									{/* Card holder info */}
									<div className="mt-auto">
										<div className="flex justify-between items-end">
											<div>
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													Valid Thru
												</div>
												<div className="text-sm font-mono text-gray-300">
													12/27
												</div>
											</div>
											<div className="text-right">
												<div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
													DesishHub
												</div>
												<div className="text-white font-semibold">
													ENTERPRISE
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

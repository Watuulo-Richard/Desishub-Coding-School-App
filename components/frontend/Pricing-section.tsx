import React from "react";

export default function PricingSection() {
	return (
		<div>
			<section id="pricing" className="py-24 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400">
							Flexible Solutions
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							Choose the plan that works for your project. All plans include
							core features with flexible scaling options.
						</p>
					</div>

					<div className="mb-10 flex items-center justify-center gap-4">
						<span className="text-white/70 text-sm">Project-based</span>
						<div className="relative inline-block w-14 h-7 bg-white/10 rounded-full cursor-pointer">
							<div className="absolute left-1 top-1 w-5 h-5 bg-blue-500 rounded-full transition-transform"></div>
						</div>
						<span className="text-white text-sm">
							Retainer <span className="text-blue-400 text-xs">Save 20%</span>
						</span>
					</div>

					{/* <!-- Pricing Cards Grid --> */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* <!-- Starter Plan --> */}
						<div className="pricing-card enhanced-glass rounded-2xl p-6 flex flex-col h-full relative">
							{/* <!-- Top Badge --> */}
							<div className="flex items-center mb-4">
								<div className="icon-circle">
									<i className="fas fa-rocket text-blue-400 text-xs"></i>
								</div>
								<h3 className="ml-3 text-xl text-white font-display">
									Starter
								</h3>
							</div>

							{/* <!-- Price --> */}
							<div className="mt-2 mb-6">
								<div className="flex items-baseline">
									<span className="text-4xl font-[200] text-white">$2,500</span>
									<span className="text-sm text-white/60 ml-2">/project</span>
								</div>
								<p className="text-white/60 text-sm mt-1">
									Perfect for small businesses and startups
								</p>
							</div>

							<div className="card-divider w-full mb-6"></div>

							{/* <!-- Features --> */}
							<ul className="space-y-3 mb-8">
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Custom website design</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Responsive development</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Basic SEO optimization</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Email support</span>
								</li>
								<li className="flex items-center text-white/50 text-sm">
									<i className="fas fa-minus text-white/30 mr-3 w-4"></i>
									<span>No custom integrations</span>
								</li>
								<li className="flex items-center text-white/50 text-sm">
									<i className="fas fa-minus text-white/30 mr-3 w-4"></i>
									<span>No ongoing maintenance</span>
								</li>
							</ul>

							{/* <!-- Stats --> */}
							<div className="grid grid-cols-2 gap-4 my-6">
								<div className="bg-white/5 rounded-lg p-3 text-center">
									<div className="text-2xl font-[300] text-white">2-4</div>
									<div className="text-xs text-white/60 mt-1">Weeks</div>
								</div>
								<div className="bg-white/5 rounded-lg p-3 text-center">
									<div className="text-2xl font-[300] text-white">5</div>
									<div className="text-xs text-white/60 mt-1">Pages</div>
								</div>
							</div>

							{/* <!-- CTA --> */}
							<div className="mt-auto pt-4">
								<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10">
									Get Started
								</button>
								<p className="text-white/50 text-xs text-center mt-3">
									Free consultation included
								</p>
							</div>
						</div>

						{/* <!-- Professional Plan --> */}
						<div className="pricing-card enhanced-glass rounded-2xl p-6 flex flex-col h-full relative z-10 transform scale-105 featured">
							{/* <!-- Popular Badge --> */}
							<div className="pricing-badge">MOST POPULAR</div>

							{/* <!-- Top Badge --> */}
							<div className="flex items-center mb-4">
								<div className="icon-circle bg-blue-500/20 border-blue-400/30">
									<i className="fas fa-bolt text-blue-400 text-xs"></i>
								</div>
								<h3 className="ml-3 text-xl text-white font-display">
									Professional
								</h3>
							</div>

							{/* <!-- Price --> */}
							<div className="mt-2 mb-6">
								<div className="flex items-baseline">
									<span className="text-4xl font-[200] text-white">$7,500</span>
									<span className="text-sm text-white/60 ml-2">/project</span>
								</div>
								<p className="text-white/60 text-sm mt-1">
									For growing businesses with advanced needs
								</p>
							</div>

							<div className="card-divider w-full mb-6"></div>

							{/* <!-- Features --> */}
							<ul className="space-y-3 mb-8">
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Full web application</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Custom functionality</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>API integrations</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Priority support</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>3 months maintenance</span>
								</li>
								<li className="flex items-center text-white/50 text-sm">
									<i className="fas fa-minus text-white/30 mr-3 w-4"></i>
									<span>No dedicated resources</span>
								</li>
							</ul>

							{/* <!-- Stats --> */}
							<div className="grid grid-cols-2 gap-4 my-6">
								<div className="bg-blue-500/10 rounded-lg p-3 text-center">
									<div className="text-2xl font-[300] text-white">6-12</div>
									<div className="text-xs text-white/60 mt-1">Weeks</div>
								</div>
								<div className="bg-blue-500/10 rounded-lg p-3 text-center">
									<div className="text-2xl font-[300] text-white">15+</div>
									<div className="text-xs text-white/60 mt-1">Features</div>
								</div>
							</div>

							{/* <!-- CTA --> */}
							<div className="mt-auto pt-4">
								<button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200">
									Get Started
								</button>
								<p className="text-white/50 text-xs text-center mt-3">
									Free strategy session included
								</p>
							</div>
						</div>

						{/* <!-- Enterprise Plan --> */}
						<div className="pricing-card enhanced-glass rounded-2xl p-6 flex flex-col h-full relative">
							{/* <!-- Top Badge --> */}
							<div className="flex items-center mb-4">
								<div className="icon-circle">
									<i className="fas fa-building text-indigo-400 text-xs"></i>
								</div>
								<h3 className="ml-3 text-xl text-white font-display">
									Enterprise
								</h3>
							</div>

							{/* <!-- Price --> */}
							<div className="mt-2 mb-6">
								<div className="flex items-baseline">
									<span className="text-4xl font-[200] text-white">Custom</span>
									<span className="text-sm text-white/60 ml-2">/quote</span>
								</div>
								<p className="text-white/60 text-sm mt-1">
									For large organizations with complex requirements
								</p>
							</div>

							<div className="card-divider w-full mb-6"></div>

							{/* <!-- Features --> */}
							<ul className="space-y-3 mb-8">
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Enterprise-grade solutions</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Unlimited customization</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Full system architecture</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>24/7 dedicated support</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Ongoing maintenance</span>
								</li>
								<li className="flex items-center text-white/80 text-sm">
									<i className="fas fa-check text-blue-400 mr-3 w-4"></i>
									<span>Dedicated team</span>
								</li>
							</ul>

							{/* <!-- Stats --> */}
							<div className="grid grid-cols-2 gap-4 my-6">
								<div className="bg-white/5 rounded-lg p-3 text-center">
									<div className="text-2xl font-[300] text-white">3-6</div>
									<div className="text-xs text-white/60 mt-1">Months</div>
								</div>
								<div className="bg-white/5 rounded-lg p-3 text-center">
									<div className="text-2xl font-[300] text-white">∞</div>
									<div className="text-xs text-white/60 mt-1">Scale</div>
								</div>
							</div>

							{/* <!-- CTA --> */}
							<div className="mt-auto pt-4">
								<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all duration-200 border border-white/10">
									Contact Sales
								</button>
								<p className="text-white/50 text-xs text-center mt-3">
									Custom proposal included
								</p>
							</div>
						</div>
					</div>
					{/* <!-- Additional Info --> */}
					<div className="mt-16 text-center">
						<div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
							<h3 className="text-xl font-medium text-white mb-4">
								Need Something Custom?
							</h3>
							<p className="text-gray-400 mb-6">
								Every project is unique. We offer flexible pricing and custom
								solutions tailored to your specific requirements and budget.
							</p>
							<button
								className="btn-secondary px-6 py-3 rounded-full font-medium"
								// onclick="scrollToSection('contact')"
							>
								Discuss Your Project
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

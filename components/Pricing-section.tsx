import React from "react";

export default function PricingSection() {
	return (
		<div>
			<section id="process" className="py-24 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16 fade-in">
						<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
							Our Process
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							A structured approach to delivering exceptional digital
							experiences
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center fade-in">
							<div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20">
								<span className="text-2xl font-light">01</span>
							</div>
							<h3 className="text-xl font-medium mb-4">Discovery</h3>
							<p className="text-gray-400 leading-relaxed">
								We start by understanding your business goals, target audience,
								and technical requirements through detailed consultation.
							</p>
						</div>

						<div className="text-center fade-in">
							<div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20">
								<span className="text-2xl font-light">02</span>
							</div>
							<h3 className="text-xl font-medium mb-4">Strategy</h3>
							<p className="text-gray-400 leading-relaxed">
								We develop a comprehensive strategy including user experience
								design, technical architecture, and project timeline.
							</p>
						</div>

						<div className="text-center fade-in">
							<div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20">
								<span className="text-2xl font-light">03</span>
							</div>
							<h3 className="text-xl font-medium mb-4">Development</h3>
							<p className="text-gray-400 leading-relaxed">
								Our team builds your solution using modern technologies and best
								practices, with regular updates and feedback sessions.
							</p>
						</div>

						<div className="text-center fade-in">
							<div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white border-opacity-20">
								<span className="text-2xl font-light">04</span>
							</div>
							<h3 className="text-xl font-medium mb-4">Launch</h3>
							<p className="text-gray-400 leading-relaxed">
								We deploy your solution and provide ongoing support to ensure
								optimal performance and user satisfaction.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

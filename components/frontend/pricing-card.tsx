"use client";
import React, { useEffect, useState } from "react";
import { Rocket, Zap, Building, Check, Minus } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface PricingTier {
	name: string;
	price: number;
	description: string;
	isPopular?: boolean;
	features: {
		name: string;
		included: boolean;
	}[];
	stats: {
		label: string;
		value: string;
	}[];
	icon: React.ComponentType<{ className?: string }>;
	iconColor: string;
}

export interface ServicePricing {
	web: PricingTier[];
	mobile: PricingTier[];
}

export const basePricing: ServicePricing = {
	web: [
		{
			name: "Basic",
			price: 300,
			description:
				"Perfect for small businesses needing a professional online presence",
			features: [
				{ name: "Single landing page", included: true },
				{ name: "5 custom sections", included: true },
				{ name: "Responsive design", included: true },
				{ name: "Form submission to email", included: true },
				{ name: "Speed optimization", included: true },
				{ name: "Social media integration", included: true },
				{ name: "Basic SEO setup", included: true },
				{ name: "Custom domain setup", included: true },
				{ name: "Database integration", included: false },
				{ name: "Content Management System", included: false },
			],

			stats: [
				{ label: "Timeline", value: "2-4 Weeks" },
				{ label: "Pages", value: "5" },
			],
			icon: Rocket,
			iconColor: "text-blue-400",
		},
		{
			name: "Standard",
			price: 600,
			isPopular: true,
			description: "Ideal for growing businesses requiring multiple pages",
			features: [
				{ name: "Up to 5 custom pages", included: true },
				{ name: "Responsive design", included: true },
				{ name: "Advanced SEO optimization", included: true },
				{ name: "Form submission to email", included: true },
				{ name: "Social media integration", included: true },
				{ name: "Speed optimization", included: true },
				{ name: "Analytics integration", included: true },
				{ name: "Database integration", included: false },
				{ name: "Content Management System", included: false },
			],
			stats: [
				{ label: "Timeline", value: "6-12 Weeks" },
				{ label: "Features", value: "15+" },
			],
			icon: Zap,
			iconColor: "text-blue-400",
		},
		{
			name: "Pro",
			price: 1200,
			description: "Full-featured web application for enterprise needs",
			features: [
				{ name: "Unlimited pages", included: true },
				{ name: "Custom database integration", included: true },
				{ name: "Content Management System", included: true },
				{ name: "User authentication", included: true },
				{ name: "Admin dashboard", included: true },
				{ name: "Advanced SEO optimization", included: true },
				{ name: "Speed optimization", included: true },
				{ name: "Custom API development", included: true },
				{ name: "Real-time analytics", included: true },
				{ name: "Priority support", included: true },
			],

			stats: [
				{ label: "Timeline", value: "3-6 Months" },
				{ label: "Scale", value: "∞" },
			],
			icon: Building,
			iconColor: "text-indigo-400",
		},
	],
	mobile: [
		{
			name: "Basic",
			price: 400,
			description: "Essential mobile app features for startups",
			features: [
				{ name: "Up to 5 screens", included: true },
				{ name: "Single API integration", included: true },
				{ name: "Basic UI/UX design", included: true },
				{ name: "Push notifications", included: true },
				{ name: "User authentication", included: true },
				{ name: "App store submission", included: true },
				{ name: "Basic analytics", included: true },
				{ name: "Offline storage", included: false },
				{ name: "Custom backend", included: false },
				{ name: "Social media integration", included: false },
			],

			stats: [
				{ label: "Timeline", value: "4-6 Weeks" },
				{ label: "Screens", value: "5" },
			],
			icon: Rocket,
			iconColor: "text-blue-400",
		},
		{
			name: "Standard",
			price: 750,
			isPopular: true,
			description: "Advanced features for established businesses",
			features: [
				{ name: "Up to 10 screens", included: true },
				{ name: "Up to 3 API integrations", included: true },
				{ name: "Advanced UI/UX design", included: true },
				{ name: "Push notifications", included: true },
				{ name: "User authentication", included: true },
				{ name: "Social media integration", included: true },
				{ name: "Offline storage", included: true },
				{ name: "Analytics dashboard", included: true },
				{ name: "In-app purchases", included: true },
				{ name: "Priority app store optimization", included: true },
			],

			stats: [
				{ label: "Timeline", value: "8-12 Weeks" },
				{ label: "Screens", value: "10+" },
			],
			icon: Zap,
			iconColor: "text-blue-400",
		},
		{
			name: "Pro",
			price: 2000, // Custom pricing
			description: "Enterprise-grade mobile solution",
			features: [
				{ name: "Unlimited screens", included: true },
				{ name: "Custom API development", included: true },
				{ name: "CMS with dashboard", included: true },
				{ name: "Advanced authentication", included: true },
				{ name: "Real-time sync", included: true },
				{ name: "Advanced offline capabilities", included: true },
				{ name: "Custom analytics", included: true },
				{ name: "Third-party integrations", included: true },
				{ name: "Performance monitoring", included: true },
				{ name: "24/7 support", included: true },
			],

			stats: [
				{ label: "Timeline", value: "3-6 Months" },
				{ label: "Scale", value: "∞" },
			],
			icon: Building,
			iconColor: "text-indigo-400",
		},
	],
};

const UGX_TO_USD = 0.00027; // 1 UGX = 0.00027 USD (approximate)

export default function PricingCard() {
	const [selectedService, setSelectedService] = useState<"web" | "mobile">(
		"web"
	);
	const [selectedCurrency, setSelectedCurrency] = useState<"USD" | "UGX">(
		"USD"
	);
	const [isUganda, setIsUganda] = useState(true);
	const [servicePricing, setServicePricing] = useState(basePricing);

	useEffect(() => {
		// Geolocation check
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					// Simplified check - in production use a proper geolocation service
					const isInUganda =
						position.coords.latitude >= -1.48 &&
						position.coords.latitude <= 4.23 &&
						position.coords.longitude >= 29.57 &&
						position.coords.longitude <= 35.03;
					setIsUganda(isInUganda);

					// Adjust prices if not in Uganda
					if (!isInUganda) {
						const adjustedPricing = JSON.parse(JSON.stringify(basePricing));
						for (const service in adjustedPricing) {
							adjustedPricing[service] = adjustedPricing[service].map(
								(tier: any) => ({
									...tier,
									price: tier.price * 1.5,
								})
							);
						}
						setServicePricing(adjustedPricing);
					}
				},
				(error) => {
					console.error("Error getting location:", error);
				}
			);
		}
	}, []);

	const handleServiceChange = (value: string) => {
		setSelectedService(value as "web" | "mobile");
	};

	const handleCurrencyChange = (value: string) => {
		setSelectedCurrency(value as "USD" | "UGX");
	};

	const formatPrice = (price: number) => {
		if (price === 0) return "Custom";

		if (selectedCurrency === "UGX") {
			const ugxPrice = Math.round(price / UGX_TO_USD);
			if (ugxPrice >= 1000000) {
				return `UGX ${(ugxPrice / 1000000).toFixed(1)}M`;
			} else if (ugxPrice >= 1000) {
				return `UGX ${(ugxPrice / 1000).toFixed(0)}K`;
			} else {
				return `UGX ${ugxPrice.toLocaleString()}`;
			}
		}
		return `$${price.toLocaleString()}`;
	};

	const getPriceSuffix = () => {
		return selectedService === "web" ? "/project" : "/app";
	};

	return (
		<div>
			<section id="pricing" className="py-24 px-6">
				<div className="max-w-7xl mx-auto">
					{/* Service and Currency Selectors */}
					<div className="mb-10 flex flex-col md:flex-row items-center justify-center gap-4">
						<div className="flex items-center gap-4">
							<Select
								onValueChange={handleServiceChange}
								defaultValue={selectedService}
							>
								<SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white hover:bg-white/20 focus:bg-white/20 focus:ring-2  transition-all duration-200 backdrop-blur-sm">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent className="bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl rounded-lg z-50 min-w-[180px]">
									<SelectItem
										value="web"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										Web Development
									</SelectItem>
									<SelectItem
										value="mobile"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										Mobile Development
									</SelectItem>
								</SelectContent>
							</Select>

							{/* Currency Selector */}
							<Select
								onValueChange={handleCurrencyChange}
								defaultValue={selectedCurrency}
							>
								<SelectTrigger className="w-[120px] bg-white/10 border-white/20 text-white hover:bg-white/20 focus:bg-white/20 focus:ring-2  transition-all duration-200 backdrop-blur-sm">
									<SelectValue placeholder="Currency" />
								</SelectTrigger>
								<SelectContent className="bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl rounded-lg z-50  min-w-[120px]">
									<SelectItem
										value="USD"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										USD ($)
									</SelectItem>
									<SelectItem
										value="UGX"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										UGX (Ush)
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Pricing Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{servicePricing[selectedService].map((tier, index) => (
							<div
								key={tier.name}
								className={`pricing-card enhanced-glass rounded-2xl p-6 flex flex-col h-full relative ${
									tier.isPopular ? "z-10 transform scale-105 featured" : ""
								}`}
							>
								{/* Popular Badge */}
								{tier.isPopular && (
									<div className="pricing-badge">MOST POPULAR</div>
								)}

								{/* Top Badge */}
								<div className="flex items-center mb-4">
									<div
										className={`icon-circle ${
											tier.isPopular ? "bg-blue-500/20 border-blue-400/30" : ""
										}`}
									>
										<tier.icon className={`${tier.iconColor} w-3 h-3`} />
									</div>
									<h3 className="ml-3 text-xl text-white font-display">
										{tier.name}
									</h3>
								</div>

								{/* Price */}
								<div className="mt-2 mb-6">
									<div className="flex items-baseline">
										<span className="text-4xl font-[200] text-white">
											{formatPrice(tier.price)}
										</span>
										{tier.price !== 0 && (
											<span className="text-sm text-white/60 ml-2">
												{getPriceSuffix()}
											</span>
										)}
									</div>
									<p className="text-white/60 text-sm mt-1">
										{tier.description}
									</p>
								</div>

								<div className="card-divider w-full mb-6"></div>

								{/* Features */}
								<ul className="space-y-3 mb-8">
									{tier.features.map((feature, i) => (
										<li
											key={i}
											className={`flex items-center text-sm ${
												feature.included ? "text-white/80" : "text-white/50"
											}`}
										>
											{feature.included ? (
												<Check className="text-blue-400 mr-3 w-4 h-4" />
											) : (
												<Minus className="text-white/30 mr-3 w-4 h-4" />
											)}
											<span>{feature.name}</span>
										</li>
									))}
								</ul>

								{/* Stats */}
								<div className="grid grid-cols-2 gap-4 my-6">
									{tier.stats.map((stat, i) => (
										<div
											key={i}
											className={`rounded-lg p-3 text-center ${
												tier.isPopular ? "bg-blue-500/10" : "bg-white/5"
											}`}
										>
											<div className="text-2xl font-[300] text-white">
												{stat.value}
											</div>
											<div className="text-xs text-white/60 mt-1">
												{stat.label}
											</div>
										</div>
									))}
								</div>

								{/* CTA */}
								<div className="mt-auto pt-4">
									<button
										className={`w-full py-3 rounded-xl text-white text-sm font-medium transition-all duration-200 ${
											tier.isPopular
												? "bg-blue-600 hover:bg-blue-500"
												: "bg-white/10 hover:bg-white/15 border border-white/10"
										}`}
									>
										{tier.price === 0 ? "Contact Sales" : "Get Started"}
									</button>
									<p className="text-white/50 text-xs text-center mt-3">
										{tier.price === 0
											? "Custom proposal included"
											: tier.isPopular
											? "Free strategy session included"
											: "Free consultation included"}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

"use client";
import React, { useState, useEffect } from "react";
import { Rocket, Zap, Building, Check, X } from "lucide-react";
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
			price: 2000,
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

const UGX_TO_USD = 0.00027;

export default function PricingComparison() {
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
					const isInUganda =
						position.coords.latitude >= -1.48 &&
						position.coords.latitude <= 4.23 &&
						position.coords.longitude >= 29.57 &&
						position.coords.longitude <= 35.03;
					setIsUganda(isInUganda);

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

	// Get all unique features for comparison
	const getAllFeatures = () => {
		const allFeatures = new Set<string>();
		servicePricing[selectedService].forEach((tier) => {
			tier.features.forEach((feature) => {
				allFeatures.add(feature.name);
			});
		});
		return Array.from(allFeatures);
	};

	const getFeatureStatus = (tierName: string, featureName: string) => {
		const tier = servicePricing[selectedService].find(
			(t) => t.name === tierName
		);
		const feature = tier?.features.find((f) => f.name === featureName);
		return feature?.included || false;
	};

	const allFeatures = getAllFeatures();
	const tiers = servicePricing[selectedService];

	return (
		<section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
						<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
						<span className="uppercase text-xs font-medium tracking-wide">
							Compare Plans
						</span>
					</div>
					<h2 className="text-4xl font-light tracking-tight mb-6 font-display text-white">
						Detailed Comparison
					</h2>
					<p className="text-base text-gray-400 max-w-2xl mx-auto">
						Compare all features across our pricing tiers to find the perfect
						solution for your needs.
					</p>
				</div>

				{/* Service and Currency Selectors */}
				<div className="mb-10 flex flex-col md:flex-row items-center justify-center gap-4">
					<div className="flex items-center gap-4">
						<Select
							onValueChange={handleServiceChange}
							defaultValue={selectedService}
						>
							<SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white hover:bg-white/20 focus:bg-white/20 focus:ring-2 transition-all duration-200 backdrop-blur-sm">
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

						<Select
							onValueChange={handleCurrencyChange}
							defaultValue={selectedCurrency}
						>
							<SelectTrigger className="w-[120px] bg-white/10 border-white/20 text-white hover:bg-white/20 focus:bg-white/20 focus:ring-2 transition-all duration-200 backdrop-blur-sm">
								<SelectValue placeholder="Currency" />
							</SelectTrigger>
							<SelectContent className="bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl rounded-lg z-50 min-w-[120px]">
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

				{/* Mobile Cards View */}
				<div className="block lg:hidden">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{tiers.map((tier, index) => (
							<div
								key={tier.name}
								className={`enhanced-glass rounded-2xl p-6 relative ${
									tier.isPopular ? "z-10 transform scale-105" : ""
								}`}
							>
								{tier.isPopular && (
									<div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full transform rotate-12">
										Popular
									</div>
								)}

								<div className="flex items-center mb-4">
									<div className="p-2 rounded-full bg-white/10 border border-white/20">
										<tier.icon className={`${tier.iconColor} w-4 h-4`} />
									</div>
									<h3 className="ml-3 text-xl text-white font-display">
										{tier.name}
									</h3>
								</div>

								<div className="mb-6">
									<div className="flex items-baseline">
										<span className="text-3xl font-[200] text-white">
											{formatPrice(tier.price)}
										</span>
										{tier.price !== 0 && (
											<span className="text-sm text-white/60 ml-2">
												{getPriceSuffix()}
											</span>
										)}
									</div>
								</div>

								<div className="space-y-3">
									{tier.features.map((feature, i) => (
										<div
											key={i}
											className={`flex items-center text-sm ${
												feature.included ? "text-white/80" : "text-white/50"
											}`}
										>
											{feature.included ? (
												<Check className="text-blue-400 mr-3 w-4 h-4" />
											) : (
												<X className="text-white/30 mr-3 w-4 h-4" />
											)}
											<span>{feature.name}</span>
										</div>
									))}
								</div>

								<div className="mt-6">
									<button
										className={`w-full py-3 rounded-xl text-white text-sm font-medium transition-all duration-200 ${
											tier.isPopular
												? "bg-blue-600 hover:bg-blue-500"
												: "bg-white/10 hover:bg-white/15 border border-white/10"
										}`}
									>
										{tier.price === 0 ? "Contact Sales" : "Get Started"}
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Desktop Table View */}
				<div className="hidden lg:block">
					<div className="enhanced-glass rounded-3xl overflow-hidden">
						{/* Table Header */}
						<div className="grid grid-cols-4 gap-4 p-6 border-b border-white/10">
							<div className="text-white/60 text-sm font-medium">Features</div>
							{tiers.map((tier) => (
								<div key={tier.name} className="text-center">
									<div
										className={`relative ${
											tier.isPopular ? "transform scale-105" : ""
										}`}
									>
										{tier.isPopular && (
											<div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full transform rotate-12 z-10">
												Popular
											</div>
										)}
										<div className="flex items-center justify-center mb-2">
											<tier.icon className={`${tier.iconColor} w-5 h-5 mr-2`} />
											<span className="text-white font-display text-lg">
												{tier.name}
											</span>
										</div>
										<div className="text-white text-2xl font-[200] mb-1">
											{formatPrice(tier.price)}
											{tier.price !== 0 && (
												<span className="text-sm text-white/60 ml-1">
													{getPriceSuffix()}
												</span>
											)}
										</div>
										<button
											className={`w-full py-2 px-4 rounded-lg text-white text-sm font-medium transition-all duration-200 ${
												tier.isPopular
													? "bg-blue-600 hover:bg-blue-500"
													: "bg-white/10 hover:bg-white/15 border border-white/10"
											}`}
										>
											{tier.price === 0 ? "Contact Sales" : "Get Started"}
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Features Comparison */}
						<div className="divide-y divide-white/5">
							{allFeatures.map((featureName, index) => (
								<div
									key={featureName}
									className="grid grid-cols-4 gap-4 p-4 hover:bg-white/5 transition-colors"
								>
									<div className="text-white/80 text-sm font-medium flex items-center">
										{featureName}
									</div>
									{tiers.map((tier) => (
										<div key={tier.name} className="flex justify-center">
											{getFeatureStatus(tier.name, featureName) ? (
												<Check className="text-blue-400 w-5 h-5" />
											) : (
												<X className="text-white/30 w-5 h-5" />
											)}
										</div>
									))}
								</div>
							))}
						</div>

						{/* Stats Comparison */}
						<div className="p-6 bg-white/5">
							<h4 className="text-white font-medium mb-4">Project Details</h4>
							<div className="space-y-3">
								{tiers[0].stats.map((_, statIndex) => (
									<div key={statIndex} className="grid grid-cols-4 gap-4">
										<div className="text-white/60 text-sm">
											{tiers[0].stats[statIndex].label}
										</div>
										{tiers.map((tier) => (
											<div key={tier.name} className="text-center">
												<span className="text-white font-medium">
													{tier.stats[statIndex]?.value || "N/A"}
												</span>
											</div>
										))}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

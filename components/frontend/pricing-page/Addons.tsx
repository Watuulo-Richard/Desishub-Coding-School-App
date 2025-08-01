"use client";
import React, { useState } from "react";
import {
	Zap,
	Shield,
	BarChart3,
	Headphones,
	Rocket,
	Globe,
	Check,
	Star,
	ExternalLink,
	ChevronRight,
	Award,
	Users,
	Building2,
	Code,
	Paintbrush,
	TrendingUp,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface AddOn {
	name: string;
	price: number;
	description: string;
	isPopular?: boolean;
	features: string[];
	category: "performance" | "security" | "analytics" | "support";
	icon: React.ComponentType<{ className?: string }>;
	iconColor: string;
	timeline: string;
}

interface Partner {
	name: string;
	category: "hosting" | "design" | "marketing" | "development";
	description: string;
	logo: string;
	rating: number;
	reviews: number;
	features: string[];
	website: string;
	isRecommended?: boolean;
}

const addOns: AddOn[] = [
	{
		name: "Performance Boost",
		price: 150,
		description:
			"Advanced caching and CDN optimization for lightning-fast loading",
		isPopular: true,
		features: [
			"Advanced caching layer",
			"Global CDN setup",
			"Image optimization",
			"Performance monitoring",
			"Speed score guarantee",
		],
		category: "performance",
		icon: Zap,
		iconColor: "text-yellow-400",
		timeline: "1-2 weeks",
	},
	{
		name: "Security Shield",
		price: 200,
		description: "Enterprise-grade security features and SSL certificates",
		features: [
			"SSL certificate setup",
			"Security headers",
			"Malware protection",
			"DDoS protection",
			"Security monitoring",
		],
		category: "security",
		icon: Shield,
		iconColor: "text-green-400",
		timeline: "3-5 days",
	},
	{
		name: "Analytics Pro",
		price: 100,
		description: "Comprehensive analytics and conversion tracking setup",
		features: [
			"Google Analytics 4",
			"Conversion tracking",
			"Custom dashboards",
			"Monthly reports",
			"Goal optimization",
		],
		category: "analytics",
		icon: BarChart3,
		iconColor: "text-blue-400",
		timeline: "1 week",
	},
	{
		name: "Priority Support",
		price: 75,
		description: "24/7 priority support with dedicated account manager",
		features: [
			"24/7 support access",
			"Dedicated account manager",
			"Priority response time",
			"Video consultations",
			"Monthly health checks",
		],
		category: "support",
		icon: Headphones,
		iconColor: "text-purple-400",
		timeline: "Immediate",
	},
];

const partners: Partner[] = [
	{
		name: "Vercel",
		category: "hosting",
		description: "Lightning-fast deployment platform with global edge network",
		logo: "🚀",
		rating: 4.9,
		reviews: 1250,
		features: [
			"Global CDN",
			"Automatic scaling",
			"Zero config deployments",
			"Analytics",
		],
		website: "vercel.com",
		isRecommended: true,
	},
	{
		name: "Figma",
		category: "design",
		description:
			"Collaborative design tool for creating stunning user interfaces",
		logo: "🎨",
		rating: 4.8,
		reviews: 2100,
		features: [
			"Real-time collaboration",
			"Design systems",
			"Prototyping",
			"Developer handoff",
		],
		website: "figma.com",
	},
	{
		name: "Google Analytics",
		category: "marketing",
		description: "Comprehensive web analytics and conversion tracking platform",
		logo: "📊",
		rating: 4.7,
		reviews: 5600,
		features: [
			"User behavior tracking",
			"Conversion funnels",
			"Real-time data",
			"Custom reports",
		],
		website: "analytics.google.com",
		isRecommended: true,
	},
	{
		name: "GitHub",
		category: "development",
		description: "Industry-leading version control and collaboration platform",
		logo: "💻",
		rating: 4.9,
		reviews: 8900,
		features: [
			"Version control",
			"CI/CD pipelines",
			"Issue tracking",
			"Code review",
		],
		website: "github.com",
	},
	{
		name: "Stripe",
		category: "development",
		description: "Secure payment processing with global reach and reliability",
		logo: "💳",
		rating: 4.8,
		reviews: 3400,
		features: [
			"Global payments",
			"Fraud protection",
			"Subscription billing",
			"APIs",
		],
		website: "stripe.com",
		isRecommended: true,
	},
	{
		name: "HubSpot",
		category: "marketing",
		description: "All-in-one marketing, sales, and customer service platform",
		logo: "🎯",
		rating: 4.6,
		reviews: 4200,
		features: [
			"CRM integration",
			"Email marketing",
			"Lead generation",
			"Analytics",
		],
		website: "hubspot.com",
	},
];

const UGX_TO_USD = 0.00027;

export default function AddOnsPartnersSection() {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [selectedCurrency, setSelectedCurrency] = useState<"USD" | "UGX">(
		"USD"
	);
	const [selectedPartnerCategory, setSelectedPartnerCategory] =
		useState<string>("all");

	const formatPrice = (price: number) => {
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

	const filteredAddOns =
		selectedCategory === "all"
			? addOns
			: addOns.filter((addon) => addon.category === selectedCategory);

	const filteredPartners =
		selectedPartnerCategory === "all"
			? partners
			: partners.filter(
					(partner) => partner.category === selectedPartnerCategory
			  );

	const getCategoryIcon = (category: string) => {
		switch (category) {
			case "performance":
				return Rocket;
			case "security":
				return Shield;
			case "analytics":
				return BarChart3;
			case "support":
				return Headphones;
			case "hosting":
				return Globe;
			case "design":
				return Paintbrush;
			case "marketing":
				return TrendingUp;
			case "development":
				return Code;
			default:
				return Zap;
		}
	};

	return (
		<div className="py-24 px-2 sm:px-6 bg-black min-h-screen">
			<div className="max-w-7xl mx-auto">
				{/* Add-ons Section */}
				<section className="mb-32">
					{/* Header */}
					<div className="text-center mb-16">
						<div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
							<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
							<span className="uppercase text-xs font-medium tracking-wide">
								Enhance Your Project
							</span>
						</div>
						<h2 className="text-4xl font-light tracking-tight mb-6 font-display text-white">
							Premium Add-ons
						</h2>
						<p className="text-base text-gray-400 max-w-2xl mx-auto">
							Supercharge your project with our premium add-ons. Each service is
							designed to enhance performance, security, and user experience.
						</p>
					</div>

					{/* Category and Currency Selectors */}
					<div className="mb-10 flex flex-col md:flex-row items-center justify-center gap-4">
						<div className="flex items-center gap-4">
							<Select onValueChange={setSelectedCategory} defaultValue="all">
								<SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white hover:bg-white/20 focus:bg-white/20 focus:ring-2 transition-all duration-200 backdrop-blur-sm">
									<SelectValue placeholder="All Categories" />
								</SelectTrigger>
								<SelectContent className="bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl rounded-lg z-50 min-w-[180px]">
									<SelectItem
										value="all"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										All Categories
									</SelectItem>
									<SelectItem
										value="performance"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										Performance
									</SelectItem>
									<SelectItem
										value="security"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										Security
									</SelectItem>
									<SelectItem
										value="analytics"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										Analytics
									</SelectItem>
									<SelectItem
										value="support"
										className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
									>
										Support
									</SelectItem>
								</SelectContent>
							</Select>

							<Select
								onValueChange={(value) =>
									setSelectedCurrency(value as "USD" | "UGX")
								}
								defaultValue="USD"
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

					{/* Add-ons Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{filteredAddOns.map((addon, index) => (
							<div
								key={addon.name}
								className={`enhanced-glass rounded-2xl p-6 relative transition-all duration-300 hover:transform hover:scale-105 ${
									addon.isPopular ? "ring-2 ring-blue-500/50" : ""
								}`}
								style={{
									background: "rgba(255, 255, 255, 0.05)",
									backdropFilter: "blur(20px)",
									border: "1px solid rgba(255, 255, 255, 0.1)",
								}}
							>
								{addon.isPopular && (
									<div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full transform rotate-12">
										Popular
									</div>
								)}

								<div className="flex items-center mb-4">
									<div className="p-3 rounded-full bg-white/10 border border-white/20">
										<addon.icon className={`${addon.iconColor} w-6 h-6`} />
									</div>
								</div>

								<h3 className="text-xl text-white font-display mb-2">
									{addon.name}
								</h3>
								<p className="text-white/70 text-sm mb-4 leading-relaxed">
									{addon.description}
								</p>

								<div className="flex items-baseline mb-4">
									<span className="text-2xl font-[200] text-white">
										{formatPrice(addon.price)}
									</span>
									<span className="text-sm text-white/60 ml-2">/one-time</span>
								</div>

								<div className="space-y-2 mb-6">
									{addon.features.map((feature, i) => (
										<div
											key={i}
											className="flex items-center text-sm text-white/80"
										>
											<Check className="text-blue-400 mr-2 w-4 h-4 flex-shrink-0" />
											<span>{feature}</span>
										</div>
									))}
								</div>

								<div className="text-xs text-white/50 mb-4">
									Timeline: {addon.timeline}
								</div>

								<button
									className={`w-full py-3 rounded-xl text-white text-sm font-medium transition-all duration-200 ${
										addon.isPopular
											? "bg-blue-600 hover:bg-blue-500"
											: "bg-white/10 hover:bg-white/15 border border-white/10"
									}`}
								>
									Add to Project
								</button>
							</div>
						))}
					</div>
				</section>

				{/* Trusted Partners Section */}
				<section>
					{/* Header */}
					<div className="text-center mb-16">
						<div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
							<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
							<span className="uppercase text-xs font-medium tracking-wide">
								Our Network
							</span>
						</div>
						<h2 className="text-4xl font-light tracking-tight mb-6 font-display text-white">
							Trusted Partners
						</h2>
						<p className="text-base text-gray-400 max-w-2xl mx-auto">
							We collaborate with industry-leading partners to deliver
							exceptional results. Each partner is carefully vetted for quality
							and reliability.
						</p>
					</div>

					{/* Partner Category Selector */}
					<div className="mb-10 flex justify-center">
						<Select
							onValueChange={setSelectedPartnerCategory}
							defaultValue="all"
						>
							<SelectTrigger className="w-[200px] bg-white/10 border-white/20 text-white hover:bg-white/20 focus:bg-white/20 focus:ring-2 transition-all duration-200 backdrop-blur-sm">
								<SelectValue placeholder="All Partners" />
							</SelectTrigger>
							<SelectContent className="bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl rounded-lg z-50 min-w-[200px]">
								<SelectItem
									value="all"
									className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
								>
									All Partners
								</SelectItem>
								<SelectItem
									value="hosting"
									className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
								>
									Hosting & Infrastructure
								</SelectItem>
								<SelectItem
									value="design"
									className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
								>
									Design Tools
								</SelectItem>
								<SelectItem
									value="marketing"
									className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
								>
									Marketing & Analytics
								</SelectItem>
								<SelectItem
									value="development"
									className="text-white/90 hover:bg-white/10 focus:bg-white/15 focus:text-white transition-all duration-150 cursor-pointer py-2 px-3 rounded-md mx-1"
								>
									Development Tools
								</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Partners Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredPartners.map((partner, index) => {
							const CategoryIcon = getCategoryIcon(partner.category);
							return (
								<div
									key={partner.name}
									className={`enhanced-glass rounded-2xl p-6 relative transition-all duration-300 hover:transform hover:scale-105 ${
										partner.isRecommended ? "ring-2 ring-green-500/50" : ""
									}`}
									style={{
										background: "rgba(255, 255, 255, 0.05)",
										backdropFilter: "blur(20px)",
										border: "1px solid rgba(255, 255, 255, 0.1)",
									}}
								>
									{partner.isRecommended && (
										<div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full transform rotate-12">
											<Award className="w-3 h-3 inline mr-1" />
											Recommended
										</div>
									)}

									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center">
											<div className="text-3xl mr-3">{partner.logo}</div>
											<div>
												<h3 className="text-xl text-white font-display">
													{partner.name}
												</h3>
												<div className="flex items-center mt-1">
													<CategoryIcon className="w-4 h-4 text-blue-400 mr-2" />
													<span className="text-xs text-white/60 capitalize">
														{partner.category}
													</span>
												</div>
											</div>
										</div>
									</div>

									<p className="text-white/70 text-sm mb-4 leading-relaxed">
										{partner.description}
									</p>

									<div className="flex items-center mb-4">
										<div className="flex items-center">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-4 h-4 ${
														i < Math.floor(partner.rating)
															? "text-yellow-400 fill-current"
															: "text-white/20"
													}`}
												/>
											))}
											<span className="text-white/80 text-sm ml-2">
												{partner.rating}
											</span>
											<span className="text-white/50 text-xs ml-2">
												({partner.reviews} reviews)
											</span>
										</div>
									</div>

									<div className="space-y-2 mb-6">
										{partner.features.slice(0, 3).map((feature, i) => (
											<div
												key={i}
												className="flex items-center text-sm text-white/80"
											>
												<Check className="text-blue-400 mr-2 w-4 h-4 flex-shrink-0" />
												<span>{feature}</span>
											</div>
										))}
										{partner.features.length > 3 && (
											<div className="text-xs text-white/50">
												+{partner.features.length - 3} more features
											</div>
										)}
									</div>

									<button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium transition-all duration-200 flex items-center justify-center group">
										Visit {partner.website}
										<ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
									</button>
								</div>
							);
						})}
					</div>

					{/* Partnership CTA */}
					<div className="mt-16 text-center">
						<div
							className="enhanced-glass rounded-2xl p-8 max-w-2xl mx-auto"
							style={{
								background: "rgba(255, 255, 255, 0.05)",
								backdropFilter: "blur(20px)",
								border: "1px solid rgba(255, 255, 255, 0.1)",
							}}
						>
							<Building2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
							<h3 className="text-2xl font-display text-white mb-4">
								Become a Partner
							</h3>
							<p className="text-white/70 mb-6">
								Join our network of trusted partners and help us deliver
								exceptional results to our clients.
							</p>
							<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 flex items-center mx-auto">
								Apply for Partnership
								<ChevronRight className="w-4 h-4 ml-2" />
							</button>
						</div>
					</div>
				</section>
			</div>

			<style jsx>{`
				.enhanced-glass {
					background: rgba(255, 255, 255, 0.05);
					backdrop-filter: blur(20px);
					border: 1px solid rgba(255, 255, 255, 0.1);
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
				}

				.enhanced-glass:hover {
					background: rgba(255, 255, 255, 0.08);
					border: 1px solid rgba(255, 255, 255, 0.15);
				}
			`}</style>
		</div>
	);
}

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function MultiStepForm() {
	const [currentStep, setCurrentStep] = useState(1);
	const totalSteps = 4;

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		trigger,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			company: "",
			projectType: "",
			budget: "",
			timeline: "",
			description: "",
			referral: "",
		},
	});

	const stepTexts: Record<number, string> = {
		1: "Basic Information",
		2: "Project Type",
		3: "Budget & Timeline",
		4: "Project Details",
	};

	const progressPercent = (currentStep / totalSteps) * 100;

	const onSubmit = (data: any) => {
		console.log("Form submitted:", data);
		// Handle form submission here
	};

	const nextStep = async () => {
		let isValid = false;

		// Validate current step fields before proceeding
		switch (currentStep) {
			case 1:
				isValid = await trigger(["name", "email"]);
				break;
			case 2:
				isValid = await trigger(["projectType"]);
				break;
			case 3:
				isValid = await trigger(["budget", "timeline"]);
				break;
			case 4:
				isValid = await trigger(["description"]);
				break;
			default:
				isValid = true;
		}

		if (isValid && currentStep < totalSteps) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleOptionSelect = (fieldName: any, value: string) => {
		setValue(fieldName, value, { shouldValidate: true });
	};

	return (
		<div>
			<section id="contact" className="py-24 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
							Let's Work Together
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl mx-auto">
							Ready to bring your digital vision to life? Get in touch with us
							today.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						{/* Multi-Step Contact Form */}
						<div>
							<div className="enhanced-glass rounded-2xl p-8">
								{/* Progress Bar */}
								<div className="mb-8">
									<div className="flex justify-between text-sm text-gray-400 mb-2">
										<span>
											Step <span id="current-step">{currentStep}</span> of{" "}
											{totalSteps}
										</span>
										<span id="progress-text">{stepTexts[currentStep]}</span>
									</div>
									<div className="step-progress">
										<div
											className="step-progress-fill"
											id="progress-fill"
											style={{ width: `${progressPercent}%` }}
										></div>
									</div>
								</div>

								{/* Form Steps */}
								<form id="multi-step-form" onSubmit={handleSubmit(onSubmit)}>
									{/* Step 1: Basic Information */}
									<div
										className={`form-step ${currentStep === 1 ? "active" : ""}`}
										id="step-1"
									>
										<h3 className="text-2xl font-light mb-6 font-display">
											Tell us about yourself
										</h3>

										<div className="space-y-6">
											<div>
												<label className="block text-sm font-medium mb-2 text-gray-300">
													What should we call you?
												</label>
												<input
													type="text"
													id="name"
													className={`w-full px-4 py-3 bg-white/5 border ${
														errors.name ? "border-red-500" : "border-white/10"
													} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors`}
													placeholder="Your name"
													{...register("name", {
														required: "Name is required",
													})}
												/>
												{errors.name && (
													<p className="mt-1 text-sm text-red-500">
														{errors.name.message}
													</p>
												)}
											</div>

											<div>
												<label className="block text-sm font-medium mb-2 text-gray-300">
													Your email address
												</label>
												<input
													type="email"
													id="email"
													className={`w-full px-4 py-3 bg-white/5 border ${
														errors.email ? "border-red-500" : "border-white/10"
													} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors`}
													placeholder="your@email.com"
													{...register("email", {
														required: "Email is required",
														pattern: {
															value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
															message: "Invalid email address",
														},
													})}
												/>
												{errors.email && (
													<p className="mt-1 text-sm text-red-500">
														{errors.email.message}
													</p>
												)}
											</div>

											<div>
												<label className="block text-sm font-medium mb-2 text-gray-300">
													Company (optional)
												</label>
												<input
													type="text"
													id="company"
													className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
													placeholder="Your company name"
													{...register("company")}
												/>
											</div>
										</div>
									</div>

									{/* Step 2: Project Type */}
									<div
										className={`form-step ${currentStep === 2 ? "active" : ""}`}
										id="step-2"
									>
										<h3 className="text-2xl font-light mb-6 font-display">
											What type of project do you have in mind?
										</h3>

										<div
											className="grid grid-cols-1 md:grid-cols-2 gap-4"
											id="project-type-options"
										>
											<button
												type="button"
												className={`option-btn text-left px-6 py-4 rounded-lg transition-colors ${
													watch("projectType") === "website" ? "selected" : ""
												}`}
												data-value="website"
												onClick={() =>
													handleOptionSelect("projectType", "website")
												}
											>
												<div className="flex items-center mb-2">
													<i className="fas fa-globe text-blue-400 mr-3"></i>
													<span className="font-medium text-white">
														Website
													</span>
												</div>
												<p className="text-sm text-gray-400">
													Business website or landing page
												</p>
											</button>
											<button
												type="button"
												className={`option-btn text-left px-6 py-4 rounded-lg transition-colors ${
													watch("projectType") === "webapp" ? "selected" : ""
												}`}
												data-value="webapp"
												onClick={() =>
													handleOptionSelect("projectType", "webapp")
												}
											>
												<div className="flex items-center mb-2">
													<i className="fas fa-laptop-code text-blue-400 mr-3"></i>
													<span className="font-medium text-white">
														Web Application
													</span>
												</div>
												<p className="text-sm text-gray-400">
													Custom web application or platform
												</p>
											</button>
											<button
												type="button"
												className={`option-btn text-left px-6 py-4 rounded-lg transition-colors ${
													watch("projectType") === "mobile" ? "selected" : ""
												}`}
												data-value="mobile"
												onClick={() =>
													handleOptionSelect("projectType", "mobile")
												}
											>
												<div className="flex items-center mb-2">
													<i className="fas fa-mobile-alt text-blue-400 mr-3"></i>
													<span className="font-medium text-white">
														Mobile App
													</span>
												</div>
												<p className="text-sm text-gray-400">
													iOS or Android application
												</p>
											</button>
											<button
												type="button"
												className={`option-btn text-left px-6 py-4 rounded-lg transition-colors ${
													watch("projectType") === "consulting"
														? "selected"
														: ""
												}`}
												data-value="consulting"
												onClick={() =>
													handleOptionSelect("projectType", "consulting")
												}
											>
												<div className="flex items-center mb-2">
													<i className="fas fa-lightbulb text-blue-400 mr-3"></i>
													<span className="font-medium text-white">
														Consulting
													</span>
												</div>
												<p className="text-sm text-gray-400">
													Technical guidance and strategy
												</p>
											</button>
										</div>
										<input
											type="hidden"
											id="project-type"
											{...register("projectType", {
												required: "Project type is required",
											})}
										/>
										{errors.projectType && (
											<p className="mt-2 text-sm text-red-500">
												{errors.projectType.message}
											</p>
										)}
									</div>

									{/* Step 3: Budget & Timeline */}
									<div
										className={`form-step ${currentStep === 3 ? "active" : ""}`}
										id="step-3"
									>
										<h3 className="text-2xl font-light mb-6 font-display">
											Project details
										</h3>

										<div className="space-y-6">
											<div>
												<label className="block text-sm font-medium mb-3 text-gray-300">
													What's your budget range?
												</label>
												<div
													className="grid grid-cols-1 md:grid-cols-2 gap-3"
													id="budget-options"
												>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("budget") === "under-5k" ? "selected" : ""
														}`}
														data-value="under-5k"
														onClick={() =>
															handleOptionSelect("budget", "under-5k")
														}
													>
														<span className="font-medium text-white">
															Under $5,000
														</span>
													</button>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("budget") === "5k-15k" ? "selected" : ""
														}`}
														data-value="5k-15k"
														onClick={() =>
															handleOptionSelect("budget", "5k-15k")
														}
													>
														<span className="font-medium text-white">
															$5,000 - $15,000
														</span>
													</button>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("budget") === "15k-50k" ? "selected" : ""
														}`}
														data-value="15k-50k"
														onClick={() =>
															handleOptionSelect("budget", "15k-50k")
														}
													>
														<span className="font-medium text-white">
															$15,000 - $50,000
														</span>
													</button>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("budget") === "50k-plus" ? "selected" : ""
														}`}
														data-value="50k-plus"
														onClick={() =>
															handleOptionSelect("budget", "50k-plus")
														}
													>
														<span className="font-medium text-white">
															$50,000+
														</span>
													</button>
												</div>
												<input
													type="hidden"
													id="budget"
													{...register("budget", {
														required: "Budget is required",
													})}
												/>
												{errors.budget && (
													<p className="mt-2 text-sm text-red-500">
														{errors.budget.message}
													</p>
												)}
											</div>

											<div>
												<label className="block text-sm font-medium mb-3 text-gray-300">
													When do you need this completed?
												</label>
												<div
													className="grid grid-cols-1 md:grid-cols-2 gap-3"
													id="timeline-options"
												>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("timeline") === "asap" ? "selected" : ""
														}`}
														data-value="asap"
														onClick={() =>
															handleOptionSelect("timeline", "asap")
														}
													>
														<span className="font-medium text-white">ASAP</span>
													</button>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("timeline") === "1-3-months"
																? "selected"
																: ""
														}`}
														data-value="1-3-months"
														onClick={() =>
															handleOptionSelect("timeline", "1-3-months")
														}
													>
														<span className="font-medium text-white">
															1-3 months
														</span>
													</button>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("timeline") === "3-6-months"
																? "selected"
																: ""
														}`}
														data-value="3-6-months"
														onClick={() =>
															handleOptionSelect("timeline", "3-6-months")
														}
													>
														<span className="font-medium text-white">
															3-6 months
														</span>
													</button>
													<button
														type="button"
														className={`option-btn text-center px-4 py-3 rounded-lg transition-colors ${
															watch("timeline") === "flexible" ? "selected" : ""
														}`}
														data-value="flexible"
														onClick={() =>
															handleOptionSelect("timeline", "flexible")
														}
													>
														<span className="font-medium text-white">
															Flexible
														</span>
													</button>
												</div>
												<input
													type="hidden"
													id="timeline"
													{...register("timeline", {
														required: "Timeline is required",
													})}
												/>
												{errors.timeline && (
													<p className="mt-2 text-sm text-red-500">
														{errors.timeline.message}
													</p>
												)}
											</div>
										</div>
									</div>

									{/* Step 4: Project Details */}
									<div
										className={`form-step ${currentStep === 4 ? "active" : ""}`}
										id="step-4"
									>
										<h3 className="text-2xl font-light mb-6 font-display">
											Tell us about your project
										</h3>

										<div className="space-y-6">
											<div>
												<label className="block text-sm font-medium mb-2 text-gray-300">
													Project description
												</label>
												<textarea
													id="description"
													className={`w-full px-4 py-3 bg-white/5 border ${
														errors.description
															? "border-red-500"
															: "border-white/10"
													} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none`}
													placeholder="Tell us about your project goals, requirements, and any specific features you need..."
													rows={6}
													{...register("description", {
														required: "Project description is required",
													})}
												></textarea>
												{errors.description && (
													<p className="mt-1 text-sm text-red-500">
														{errors.description.message}
													</p>
												)}
											</div>

											<div>
												<label className="block text-sm font-medium mb-2 text-gray-300">
													How did you hear about us? (optional)
												</label>
												<select
													id="referral"
													className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
													{...register("referral")}
												>
													<option value="">Select an option</option>
													<option value="google">Google search</option>
													<option value="social">Social media</option>
													<option value="referral">
														Referral from friend/colleague
													</option>
													<option value="linkedin">LinkedIn</option>
													<option value="other">Other</option>
												</select>
											</div>
										</div>
									</div>

									{/* Navigation Buttons */}
									<div className="flex justify-between mt-8">
										<button
											type="button"
											id="prev-btn"
											className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
											disabled={currentStep === 1}
											onClick={prevStep}
										>
											Previous
										</button>

										{currentStep < totalSteps ? (
											<button
												type="button"
												id="next-btn"
												className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
												onClick={nextStep}
											>
												Next
											</button>
										) : (
											<button
												type="submit"
												id="submit-btn"
												className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
											>
												Send Message
											</button>
										)}
									</div>
								</form>
							</div>
						</div>

						{/* Contact Info */}
						<div className="space-y-8">
							<div className="glass-effect rounded-2xl p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
										<i className="fas fa-map-marker-alt text-white"></i>
									</div>
									<div>
										<h4 className="font-medium">Location</h4>
										<p className="text-gray-400 text-sm">Kampala, Uganda</p>
									</div>
								</div>
								<p className="text-gray-400">
									Serving clients across East Africa and beyond
								</p>
							</div>

							<div className="glass-effect rounded-2xl p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
										<i className="fas fa-envelope text-white"></i>
									</div>
									<div>
										<h4 className="font-medium">Email</h4>
										<p className="text-gray-400 text-sm">hello@desishhub.com</p>
									</div>
								</div>
								<p className="text-gray-400">We'll respond within 24 hours</p>
							</div>

							<div className="glass-effect rounded-2xl p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
										<i className="fas fa-phone text-white"></i>
									</div>
									<div>
										<h4 className="font-medium">Phone</h4>
										<p className="text-gray-400 text-sm">+256 700 123 456</p>
									</div>
								</div>
								<p className="text-gray-400">
									Available Monday to Friday, 9 AM - 6 PM EAT
								</p>
							</div>

							<div className="glass-effect rounded-2xl p-6">
								<h4 className="font-medium mb-4">Follow Us</h4>
								<div className="flex space-x-4">
									<Link
										href="#"
										className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
									>
										<i className="fab fa-twitter text-white"></i>
									</Link>
									<Link
										href="#"
										className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
									>
										<i className="fab fa-linkedin text-white"></i>
									</Link>
									<Link
										href="#"
										className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
									>
										<i className="fab fa-github text-white"></i>
									</Link>
									<Link
										href="#"
										className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
									>
										<i className="fab fa-instagram text-white"></i>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

import Link from "next/link";
import React from "react";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
	return (
		<div>
			<footer className="py-12 px-6 border-t border-white border-opacity-10">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="md:col-span-2">
							<div className="flex items-center mb-4">
								<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
									<span className="text-black font-bold text-sm">D</span>
								</div>
								<span className="text-white font-medium text-xl">
									DesishHub
								</span>
							</div>
							<p className="text-gray-400 mb-6 max-w-md">
								Uganda's premier web development studio. Crafting digital
								experiences through purposeful design and clean code.
							</p>
							<div className="flex space-x-4">
								<Link
									href="#"
									className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
								>
									<Twitter className="text-white w-4 h-4" />
								</Link>
								<Link
									href="#"
									className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
								>
									<Linkedin className="text-white w-4 h-4" />
								</Link>
								<Link
									href="#"
									className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
								>
									<Github className="text-white w-4 h-4" />
								</Link>
								<Link
									href="#"
									className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors"
								>
									<Instagram className="text-white w-4 h-4" />
								</Link>
							</div>
						</div>

						<div>
							<h4 className="font-medium mb-4">Services</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Web Development
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Mobile Apps
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Enterprise Systems
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Web Design
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Training
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-medium mb-4">Company</h4>
							<ul className="space-y-2 text-sm">
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										About
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Work
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Process
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Contact
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Careers
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-white border-opacity-10 mt-12 pt-8 text-center">
						<p className="text-gray-400 text-sm">
							© 2024 DesishHub. All rights reserved. |
							<Link href="#" className="hover:text-white transition-colors">
								Privacy Policy
							</Link>
							|
							<Link href="#" className="hover:text-white transition-colors">
								Terms of Service
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

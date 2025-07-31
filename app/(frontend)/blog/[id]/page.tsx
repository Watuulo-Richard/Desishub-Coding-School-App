import { Button } from "@/components/ui/button";
import {
  Facebook,
  Home,
  Instagram,
  LightbulbIcon,
  LocateIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // const {id} = await params
  return (
    <div className="min-h-screen text-white mt-32 max-w-6xl mx-auto">
      <h1 className="text-4xl ml-52 tracking-wider">
        The Growing Threat of WhatsApp <br />
        Share Scams: A Complete Technical Breakdown{" "}
      </h1>
      <div className="flex items-center gap-5 mt-5">
        <p className="text-xs">
          Updated on: <br />{" "}
          <span className="font-bold text-xs">March 7, 2002</span>
        </p>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <Image
              className="rounded-full object-cover"
              src={`https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D`}
              alt="profile"
              fill
              sizes="40px"
            />
          </div>
          <div>
            <p className="text-sm">Written by:</p>
            <p className="text-xs">DesiHub Team</p>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="rounded-lg mt-5 h-[400px] object-cover"
          src={`https://images.unsplash.com/photo-1591178761188-885caa0b4fc3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGJsb2clMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D`}
          alt="blog-image"
          width={1000}
          height={500}
        />
      </div>

      <div className="flex items-start gap-5 mt-5">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Facebook size={10} />
          <Twitter size={10} />
          <Instagram size={10} />
          <div className="bg-white h-0.5 w-32 mx-2 rounded"></div>
        </div>
        <div className="flex-1">
          <p className="text-xs max-w-lg">
            Have you ever received a WhatsApp message promising quick money from
            a bank or company, only requiring you to share the link with others?
            You're not alone. Every day, thousands of people fall victim to
            these deceptive schemes, losing their personal data and
            inadvertently helping scammers expand their reach. While these scams
            might seem obvious to some, they're becoming increasingly
            sophisticated, costing victims millions in data breaches and
            potential financial losses. But here's the good news: Once you
            understand how these scams work, you can protect yourself and others
            from falling victim. In this comprehensive guide, we'll break down
            the anatomy of WhatsApp share scams, expose their inner workings,
            and provide concrete steps to stay safe.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <Home
              size={20}
              className="bg-white rounded-full text-black w-10 h-10 p-2"
            />
            <p className="text-xs">Area</p>
            <LightbulbIcon
              size={20}
              className="bg-white rounded-full text-black w-10 h-10 p-2"
            />
            <p className="text-xs">Area</p>
            <LocateIcon
              size={20}
              className="bg-white rounded-full text-black w-10 h-10 p-2"
            />
            <p className="text-xs">Area</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl mt-5 font-bold">
              What is Social Engineering?
            </h2>
            <p className="mt-2">
              Social engineering is a manipulation technique where attackers
              exploit human psychology to gain unauthorized access to systems,
              data, or resources. Unlike technical hacks, it targets the human
              element - often considered the weakest link in security. Core
              Elements:
            </p>
            <ol className="list-decimal ml-5 mt-2">
              <li className="font-bold">Psychological Manipulation.</li>
              <ul className="list-disc ml-5 mt-2">
                <li>Exploits emotions (fear, urgency, greed)</li>
                <li>Uses trust and authority</li>
                <li>Creates artificial pressure</li>
              </ul>
              <li className="font-bold">Attack Vectors</li>
              <ul className="list-disc ml-5 mt-2">
                <li>Digital: Phishing emails, fake websites</li>
                <li>Voice: Phone scams (vishing)</li>
                <li>Physical: Impersonation, tailgating</li>
                <li>Social Media: Friend requests, fake profiles</li>
              </ul>
              <li className="font-bold">Common Targets</li>
              <ul className="list-disc ml-5 mt-2">
                <li>Individual users: Banking details, personal data</li>
                <li>Organizations: System access, confidential information</li>
                <li>IT Staff: Network credentials, security bypasses</li>
              </ul>
            </ol>
          </div>

          <div>
          </div>
        </div>
      </div>

    <div className="mt-10 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Comments</h2>
        <form className="flex flex-col gap-4 mb-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20 shadow-lg">
            <textarea
                className="bg-gray-900 bg-opacity-60 text-white rounded-lg p-3 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-white"
                rows={4}
                placeholder="Share your thoughts..."
            />
            <button
                type="submit"
                className="self-end bg-white text-black rounded-full px-6 py-2 font-semibold hover:bg-gray-200 transition"
            >
                Post Comment
            </button>
        </form>
        <div className="space-y-6">
            {/* Example comment */}
            <div className="flex items-start gap-3">
                <div className="w-10 h-10 relative">
                    <Image
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User profile"
                        fill
                        sizes="40px"
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="flex-1 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 border border-white border-opacity-20 shadow">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">John Doe</span>
                        <span className="text-xs text-gray-400">2 hours ago</span>
                    </div>
                    <p className="text-white text-sm mt-1">
                        Great breakdown! I almost fell for one of these scams last month. Thanks for the tips.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <div className="w-10 h-10 relative">
                    <Image
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User profile"
                        fill
                        sizes="40px"
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="flex-1 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 border border-white border-opacity-20 shadow">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">Priya Singh</span>
                        <span className="text-xs text-gray-400">1 day ago</span>
                    </div>
                    <p className="text-white text-sm mt-1">
                        Super informative! Please write more about online safety.
                    </p>
                </div>
            </div>
        </div>
    </div>

        <div className="mt-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-3">Related Posts</h2>
            <Link href="/blogs" className="text-xs text-gray-400 hover:text-white">
                <Button className="bg-white mr-20 rounded-full text-black hover:bg-gray-200">
                    View All
                </Button>
            </Link>
        </div>
            <div className="grid grid-cols-3">
                <div className="max-w-xs rounded-lg overflow-hidden mb-10 shadow-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
                {/* <!-- Property image placeholder (would be replaced with actual image) --> */}
                <div className="h-48 bg-gray-300 bg-opacity-30 backdrop-blur-md">
                    <Image
                    src="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3N8ZW58MHx8MHx8fDA%3D"
                    alt="Property Image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* <!-- Property details --> */}
                <div className="p-4">
                    <div className="mb-3">
                    <h2 className="text-lg font-semibold text-white leading-tight">
                        $12.5 Million Mansion with
                        <br />
                        Hockey Rink in Scottsdale
                    </h2>
                    </div>

                    <div className="border-t border-gray-200 border-opacity-30 pt-3">
                    <h3 className="text-sm font-medium text-white">
                        The $16 Million Walker McCune Mansion
                    </h3>
                    </div>
                </div>
                </div>
                <div className="max-w-xs rounded-lg overflow-hidden mb-10 shadow-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
                {/* <!-- Property image placeholder (would be replaced with actual image) --> */}
                <div className="h-48 bg-gray-300 bg-opacity-30 backdrop-blur-md">
                    <Image
                    src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3N8ZW58MHx8MHx8fDA%3D"
                    alt="Property Image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* <!-- Property details --> */}
                <div className="p-4">
                    <div className="mb-3">
                    <h2 className="text-lg font-semibold text-white leading-tight">
                        $12.5 Million Mansion with
                        <br />
                        Hockey Rink in Scottsdale
                    </h2>
                    </div>

                    <div className="border-t border-gray-200 border-opacity-30 pt-3">
                    <h3 className="text-sm font-medium text-white">
                        The $16 Million Walker McCune Mansion
                    </h3>
                    </div>
                </div>
                </div>
                <div className="max-w-xs rounded-lg overflow-hidden mb-10 shadow-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20">
                {/* <!-- Property image placeholder (would be replaced with actual image) --> */}
                <div className="h-48 bg-gray-300 bg-opacity-30 backdrop-blur-md">
                    <Image
                    src="https://media.istockphoto.com/id/2187408468/photo/night-laptop-and-business-woman-typing-report-email-or-research-article-in-startup-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=t3i8oaQEhLC1SvxUxVTjZ-hS4xAu1KuqCJMEhBWdQh4="
                    alt="Property Image"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                    />
                </div>

                {/* <!-- Property details --> */}
                <div className="p-4">
                    <div className="mb-3">
                    <h2 className="text-lg font-semibold text-white leading-tight">
                        $12.5 Million Mansion with
                        <br />
                        Hockey Rink in Scottsdale
                    </h2>
                    </div>

                    <div className="border-t border-gray-200 border-opacity-30 pt-3">
                    <h3 className="text-sm font-medium text-white">
                        The $16 Million Walker McCune Mansion
                    </h3>
                    </div>
                </div>
                </div>

            </div>
    </div>
  );
}

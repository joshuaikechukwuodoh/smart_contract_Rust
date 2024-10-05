"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FAQSection = () => {
	// State to track which item is open
	const [openIndex, setOpenIndex] = useState(null);

	// Toggle function to open/close FAQ items
	const toggleFAQ = (index) => {
		if (openIndex === index) {
			setOpenIndex(null); // Close the currently open item
		} else {
			setOpenIndex(index); // Open the clicked item
		}
	};

	const faqs = [
		{
			question: "Where can I find tutorials or guides?",
			answer:
				"Visit our resources page for tutorials, FAQs, and guides on using the marketplace.",
		},
		{
			question: "How can I stay updated on marketplace news?",
			answer:
				"Subscribe to our newsletter and follow us on social media for the latest updates and announcements.",
		},
		{
			question: "How do I buy or sell an asset?",
			answer:
				"To buy, simply connect your wallet, browse listings, and follow the prompts. To sell, list your asset with the desired price.",
		},
	];

	return (
		<section id="faq" className="py-16 max-w-screen-md mx-auto">
			<h2 className="text-2xl font-bold text-center text-black mb-8">
				Frequently Asked Questions
			</h2>

			{/* FAQ List */}
			<div className="space-y-4">
				{faqs.map((faq, index) => (
					<div key={index} className="border-b last:border-none">
						<div
							className="flex justify-between items-center py-4 cursor-pointer"
							onClick={() => toggleFAQ(index)}
						>
							<h3 className="text-lg text-black">{faq.question}</h3>
							<FiPlus
								className={`text-xl transition-transform duration-300 text-black ${
									openIndex === index ? "rotate-45" : ""
								}`}
							/>
						</div>
						{openIndex === index && (
							<div className="py-2 text-gray-500">
								<p>{faq.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQSection;

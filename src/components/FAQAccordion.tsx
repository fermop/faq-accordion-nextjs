import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
		{
			value: "learnings",
			trigger: "What is Frontend Mentor, and how will it help me?",
			content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
		},
		{
			value: "isfree",
			trigger: "Is Frontend Mentor free?",
			content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
		},
		{
			value: "usage",
			trigger: "Can I use Frontend Mentor projects in my portfolio?",
			content: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
		},
		{
			value: "help",
			trigger: "How can I get help if I'm stuck on a challenge?",
			content: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
		},
	]

export default function FAQAccordion() {
  return (
    <div className="w-full md:w-150 flex flex-col md:gap-4 bg-white p-6 md:p-10 rounded-xl shadow-xl animate-fade-in-up m-auto">
			<header className="flex gap-4 items-center">
        <Image 
          src='/assets/images/icon-star.svg'
          alt='Star'
          width={44}
          height={44}
          className="w-6 h-6 md:w-10 md:h-10"
        />

        <h2 className="text-primary-purple-950 text-3xl md:text-6xl font-bold">FAQs</h2>
      </header>

			<Accordion
				type="multiple"
				defaultValue={["learnings"]}
			>
				{items.map((item) => (
					<AccordionItem key={item.value} value={item.value}>
						<AccordionTrigger className="text-normal md:text-[1.125rem] leading-4 text-primary-purple-950 font-semibold hover:text-primary-purple-600 duration-250">
							{item.trigger}
						</AccordionTrigger>
						<AccordionContent className="text-primary-purple-600">{item.content}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
    </div>
  )
}

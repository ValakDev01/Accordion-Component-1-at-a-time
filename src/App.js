import { useState } from "react";
import "./App.css";

const faqs = [
	{
		title: "Where are these chairs assembled?",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
	},
	{
		title: "How long do I have to return my chair?",
		text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
	},
	{
		title: "Do you ship to countries outside the EU?",
		text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
	},
];

export default function App() {
	return (
		<div>
			<Accordion data={faqs} />
		</div>
	);
}

function Accordion({ data }) {
	const [curOpen, setCurOpen] = useState(null);

	return (
		<div className="accordion">
			{data.map((el, i) => (
				<AccordionItem
					curOpen={curOpen}
					onOpen={setCurOpen}
					title={el.title}
					num={i}
					key={el.title}
				>
					{el.text}
				</AccordionItem>
			))}

			<AccordionItem
				curOpen={curOpen}
				onOpen={setCurOpen}
				title="Test 1"
				num={22}
				key="test 1"
			>
				<p>Allows React developers to:</p>
				<ul>
					<li>Break up UI into components</li>
					<li>Make components reusuable</li>
					<li>Place state efficiently</li>
				</ul>
			</AccordionItem>
		</div>
	);
}

// It accepts props such as num (the index of the item), title (the title of the item), curOpen (the index of the currently open item),
// onOpen (a function to handle opening and closing items), and children (the content of the item).

// It determines whether the current item is open by comparing its index (num) with the index of the currently open item (curOpen).

// The handleToggle function is called when the item is clicked. It toggles the state of the item by calling the onOpen function with
// either null (to close the item) or the index of the item (num) itself (to open the item).

// The returned JSX renders a <div> element representing the item. The class name is conditionally set based on whether the item is open
// (isOpen). If open, it adds the "open" class to apply styling changes.

// Inside the <div>, it renders the item's number, title, and an icon (either "+" or "-") to indicate the item's open or closed state.

// If the item is open (isOpen), it renders the item's content (children) inside a <div> with the class "content-box".

function AccordionItem({ num, title, curOpen, onOpen, children }) {
	const isOpen = num === curOpen;

	function handleToggle() {
		onOpen(isOpen ? null : num);
	}

	return (
		<div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
			<p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
			<p className="title">{title}</p>
			<p className="icon">{isOpen ? "-" : "+"}</p>

			{isOpen && <div className="content-box">{children}</div>}
		</div>
	);
}

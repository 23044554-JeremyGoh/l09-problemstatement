import { useState } from "react";


const faqData = [
  { question: "What is this app about?", answer: "This app provides information about diplomas and allows registration." },
  { question: "How can I register?", answer: "Go to the Register page and fill out the form." },
  { question: "Can I access diploma details?", answer: "Yes, navigate to the Diplomas page to see detailed information." },
];

export default function FAQ() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`faq-item ${isOpen ? "open" : ""}`}>
      <h3 onClick={() => setIsOpen(!isOpen)}>{question}</h3>
      <div className="faq-answer">{isOpen && <p>{answer}</p>}</div>
    </li>
  );
}

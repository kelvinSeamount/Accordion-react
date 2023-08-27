import { useState } from "react";

export default function AccordionItem({ faqsobj, num }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="flex">
        <p>{num + 1}</p>
        <p className="title">{faqsobj.title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="content-box">{faqsobj.text}</div>}
    </div>
  );
}

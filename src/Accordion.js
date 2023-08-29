import { useState } from "react";
import AccordionItem from "./AccordionItem";
export default function Accordion({ faqs }) {
  // NEW STATE CREATED
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          faqsobj={el}
          key={el}
          num={i}
        />
      ))}
    </div>
  );
}

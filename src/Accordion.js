import AccordionItem from "./AccordionItem";
export default function Accordion({ faqs }) {
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem faqsobj={el} key={el} num={i} />
      ))}
    </div>
  );
}

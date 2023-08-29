//Summary STATE LIFTED UP TO CLOSEST PARENT

export default function AccordionItem({ faqsobj, num, curOpen, setCurOpen }) {
  const isOpen = num === curOpen;
  //State is removed (items no longer controls if open or not)

  function handleToggle() {
    //setIsOpen((isOpen) => !isOpen);
    setCurOpen(isOpen ? null : num);
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

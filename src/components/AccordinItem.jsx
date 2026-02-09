import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AccordinItem({ children, title, onOpen, open, id }) {
  const isOpen = id === open;

  return (
    <div className={`accordin-item ${isOpen && "accordion__expanded"}`}>
      <div
        className="accordion-item__header__wrapper"
        onClick={() => onOpen(id)}
      >
        <div className="accordion-item__header">{title}</div>

        <ChevronDownIcon className="open" />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import AccordinItem from "./components/AccordinItem";

const data = [
  {
    id: 1,
    title: "accordion one",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nostrum eum obcaecati velit, inventore modi molestiae vitae tempore! Rerum hic, adipisci saepe expedita necessitatibus magni fugiat earum ipsa voluptate harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nostrum eum obcaecati velit, inventore modi molestiae vitae tempore! Rerum hic, adipisci saepe expedita necessitatibus magni fugiat earum ipsa voluptate harum.",
  },
  {
    id: 2,
    title: "accordion two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nostrum eum obcaecati velit, inventore modi molestiae vitae tempore! Rerum hic, adipisci saepe expedita necessitatibus magni fugiat earum ipsa voluptate harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nostrum eum obcaecati velit, inventore modi molestiae vitae tempore! Rerum hic, adipisci saepe expedita necessitatibus magni fugiat earum ipsa voluptate harum.",
  },
  {
    id: 3,
    title: "accordion three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nostrum eum obcaecati velit, inventore modi molestiae vitae tempore! Rerum hic, adipisci saepe expedita necessitatibus magni fugiat earum ipsa voluptate harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nostrum eum obcaecati velit, inventore modi molestiae vitae tempore! Rerum hic, adipisci saepe expedita necessitatibus magni fugiat earum ipsa voluptate harum.",
  },
];

export default function App() {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="accordin">
      {data.map((acItem) => (
        <AccordinItem
          id={acItem.id}
          open={open}
          key={acItem.id}
          // setOpen={setOpen}
          title={acItem.title}
          onOpen={handleOpen}
        >
          {acItem.text}
        </AccordinItem>
      ))}

      <AccordinItem
        id={4}
        title={"Another accordion"}
        onOpen={handleOpen}
        open={open}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
          alias. Impedit, eius quas! Excepturi unde sit aut, ad modi, quas
          quaerat, laboriosam officiis obcaecati ut autem! Deleniti omnis
          explicabo iure?
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </AccordinItem>
    </div>
  );
}

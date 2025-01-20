import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Here", "There", "Above", "Below", "Between", "Outside"];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

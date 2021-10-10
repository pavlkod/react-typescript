import React, { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log("drag");
  };
  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log("drop");
    setIsDrag(false);
  };
  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} placeholder="Text1" />
      <input type="text" ref={inputRef} placeholder="Text2" />
      <button onClick={clickHandler}>Click</button>
      <div onDrag={dragHandler} draggable style={{ width: "200px", height: "200px", background: "red" }}></div>
      <div
        onDrop={dropHandler}
        onDragLeave={dragLeaveHandler}
        onDragOver={dragOverHandler}
        style={{ width: "200px", height: "200px", background: isDrag ? "blue" : "red", marginTop: 20 }}
      ></div>
    </div>
  );
};

export default EventsExample;

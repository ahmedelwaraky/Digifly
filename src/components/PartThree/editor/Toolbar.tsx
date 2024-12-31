"use client";

import { Editor } from "@tiptap/react";
import {
  BoldIcon,
  ListOrderedIcon,
  ListIcon,
  IndentIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  OutdentIcon,
  UnderlineIcon,
  ItalicIcon,
  BaselineIcon,
  ALargeSmallIcon,
  Strikethrough,
  RedoIcon,
  UndoIcon,
  QuoteIcon,
} from "lucide-react";
import { ToolbarProps } from "../../../../types";

const Toolbar: React.FC<ToolbarProps> = ({ editor, content }) => {
  if (!editor) return null;

  return (
    <section className="flex gap-[1px] border-b border-b-[rgba(109, 92, 188, 0.1)]">
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("orderedList") ? "bg-primary text-white" : ""
        }`}
      >
        <ListOrderedIcon className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("bulletList") ? "bg-primary text-white" : ""
        }`}
      >
        <ListIcon className=" w-4 h-4" />
      </button>
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleNode().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("indent") ? "bg-primary text-white" : ""
        }`}
      >
        <IndentIcon className=" w-4 h-4" />
      </button> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setTextAlign("left").run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive({ textAlign: "left" }) ? "bg-primary text-white" : ""
        }`}
      >
        <AlignLeftIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setTextAlign("center").run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive({ textAlign: "center" })
            ? "bg-primary text-white"
            : ""
        }`}
      >
        <AlignCenterIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().setTextAlign("right").run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("align", { right: true })
            ? "bg-primary text-white"
            : ""
        }`}
      >
        <AlignRightIcon className=" w-4 h-4" />
      </button>
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleNode().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("outdent") ? "bg-primary text-white" : ""
        }`}
      >
        <OutdentIcon className=" w-4 h-4" />
      </button> */}
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBaseline().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("baseline") ? "bg-primary text-white" : ""
        }`}
      >
        <BaselineIcon className=" w-4 h-4" />
      </button> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("bold") ? "bg-primary text-white" : ""
        }`}
      >
        <BoldIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("italic") ? "bg-primary text-white" : ""
        }`}
      >
        <ItalicIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleUnderline().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("underline") ? "bg-primary text-white" : ""
        }`}
      >
        <UnderlineIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("heading", { level: 3 })
            ? "bg-primary text-white"
            : ""
        }`}
      >
        <ALargeSmallIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBlockquote().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("heading", { level: 5 })
            ? "bg-primary text-white"
            : ""
        }`}
      >
        <QuoteIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleStrike().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("strike") ? "bg-primary text-white" : ""
        }`}
      >
        <Strikethrough className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().redo().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("redo") ? "bg-primary text-white" : ""
        }`}
      >
        <RedoIcon className=" w-4 h-4" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
        className={`flex items-center justify-center w-20 h-16 border-r-[0.5px] py-2 px-6 gap-[10px] ${
          editor.isActive("undo") ? "bg-primary text-white" : ""
        }`}
      >
        <UndoIcon className="flex items-center w-4 h-4" />
      </button>
      <button className="flex items-center justify-center w-32 h-16 py-2 px-6 gap-[10px]">
        <select
          onChange={(e) =>
            editor.chain().focus().setFontFamily(e.target.value).run()
          }
          defaultValue=""
        >
          <option value="">Select Font</option>
          <option value="Inter">Inter</option>
          <option value="Comic Sans MS, Comic Sans">Comic Sans</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
          <option value="cursive">Cursive</option>
        </select>
      </button>
    </section>
  );
};
export default Toolbar;

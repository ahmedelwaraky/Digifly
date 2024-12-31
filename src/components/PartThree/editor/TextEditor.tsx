"use client";

import { useState } from "react";
import Tiptap from "./Tiptap";

const TextEditor = () => {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (word: string) => {
    setContent(word);
  };
  return (
    <main className="border border-[rgba(109, 92, 188, 0.1)] rounded-sm">
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </main>
  );
};

export default TextEditor;

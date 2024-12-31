import { Editor } from "@tiptap/react";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

export interface TiptapProps {
  content: string;
  onChange: any;
}

export interface ToolbarProps {
  editor: Editor | null;
  content: string;
}
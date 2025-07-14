export interface MarkdownEditorProps {
  value: string;
  onChange: (value: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: any) => void;
}

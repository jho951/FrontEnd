export interface MarkdownEditorProps<State = unknown> {
  value: string;
  onChange: (value: string, event?: React.ChangeEvent<HTMLTextAreaElement>, state?: State) => void;
}

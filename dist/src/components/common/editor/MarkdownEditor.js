'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import dynamic from 'next/dynamic';
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
export default function MarkdownEditor() {
    const [value, setValue] = useState('**Hello Markdown!**');
    return (_jsx("div", { "data-color-mode": "light", children: _jsx(MDEditor, { value: value, onChange: setValue, height: 500 }) }));
}

'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
export default function MarkdownEditor() {
    const [value, setValue] = useState('**Hello Markdown!**');
    return (<div data-color-mode="light">
      {/* 다크모드 대응 시 수정 */}
      <MDEditor value={value} onChange={setValue} height={500}/>
    </div>);
}

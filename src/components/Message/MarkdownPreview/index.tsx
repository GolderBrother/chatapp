import React, { useState, memo } from 'react';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import './index.scss';

interface MarkdownPreviewProps {
  modelValue: string;
}

const MarkdownEditor: React.FC<MarkdownPreviewProps> = (props: MarkdownPreviewProps) => {
  const options = {
    theme: 'dark',
    previewTheme: 'default',
    codeTheme: 'atom',
    previewOnly: true,
    ...props,
  } as any;
  return (
    <MdEditor {...options} modelValue={props.modelValue} />
  );
}


export default memo(MarkdownEditor);
import React from 'react';

const TextEditor = ({ value, onChange }) => {
  const applyH2ToSelection = () => {
    const textarea = document.getElementById('article-text');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) {
      alert('Please select some text to format.');
      return;
    }

    const before = value.slice(0, start);
    const selectedText = value.slice(start, end);
    const after = value.slice(end);

    onChange(`${before}<span style="font-weight: bold;">${selectedText}</span>${after}`);
};

  return (
    <div className="text-editor">
      <textarea
        id="article-text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-area"
      />
      <button type="button" onClick={applyH2ToSelection} className="format-button">
        Subtitle
      </button>
    </div>
  );
};

export default TextEditor;
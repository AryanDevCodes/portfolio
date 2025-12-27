'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Optionally show a toast or silent fail
    }
  };

  // Syntax highlighting with color coding
  const highlightCode = (code: string) => {
    const lines = code.split('\n');
    
    return lines.map((line, index) => {
      let highlightedLine = line;
      
      // Keywords
      const keywords = ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'class', 'public', 'private', 'static', 'void', 'int', 'String', 'import', 'export', 'default', 'async', 'await', 'try', 'catch', 'new'];
      keywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
        highlightedLine = highlightedLine.replace(regex, `<span class="text-purple-400 font-semibold">$1</span>`);
      });
      
      // Strings
      highlightedLine = highlightedLine.replace(/(['"`])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>');
      
      // Comments
      highlightedLine = highlightedLine.replace(/\/\/(.*)/g, '<span class="text-gray-500 italic">//$1</span>');
      highlightedLine = highlightedLine.replace(/\/\*(.*?)\*\//g, '<span class="text-gray-500 italic">/*$1*/</span>');
      
      // Numbers
      highlightedLine = highlightedLine.replace(/\b(\d+)\b/g, '<span class="text-blue-400">$1</span>');
      
      // Function calls
      highlightedLine = highlightedLine.replace(/\b(\w+)\s*\(/g, '<span class="text-yellow-400">$1</span>(');
      
      return (
        <div key={index} className="flex">
          <span className="select-none text-gray-500 mr-4 text-right w-8 flex-shrink-0">
            {index + 1}
          </span>
          <span 
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: highlightedLine || '&nbsp;' }}
          />
        </div>
      );
    });
  };

  return (
    <div className="relative group my-6">
      {/* Language Badge */}
      <div className="flex items-center justify-between bg-secondary/80 px-4 py-2 rounded-t-lg border border-b-0">
        <span className="text-xs font-mono font-semibold text-muted-foreground uppercase">
          {language || 'code'}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-xs opacity-70 hover:opacity-100"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      
      {/* Code Content */}
      <pre className="bg-secondary/50 rounded-b-lg p-4 overflow-x-auto border font-mono text-sm leading-relaxed">
        <code className="block">
          {highlightCode(code)}
        </code>
      </pre>
    </div>
  );
}

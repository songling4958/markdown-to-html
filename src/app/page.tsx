'use client'

import { useState, useEffect } from 'react';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Markdown, Tailwind } from '@react-email/components';
import { render } from '@react-email/render';

export default function Home() {
  const [ markdownText, setMarkdownText ] = useState<string>("");
  const [ mailTemplate, setMailTemplate ] = useState<any>();

  useEffect(() => {
    const html = render(<Html lang="en">{mailTemplate}</Html>, {
      pretty: true,
    })

    console.log(html)
  }, [mailTemplate])

  const handleConvert = () => {
    const mail = () => {
      return (
        <>
          <Markdown
            markdownCustomStyles={{
              link: {color: "#E1BD59"},
            }}
            markdownContainerStyles={{
              padding: "24px",
              backgroundColor: "white",
              border: "solid 1px #E1BD59",
              borderRadius: '20px',
            }}
          >{markdownText}</Markdown>
          <Tailwind><Text className='mt-4 text-center text-sm text-gray-600 font-sans'>	&copy;2024 Plugin Surf • <u><b>Unsubscribe</b></u></Text></Tailwind>
        </>
      );
    };

    setMailTemplate(mail);
  };

  return (
    <main className="min-h-screen items-center p-24">
      <h1 className="text-4xl text-center">Converting Markdown String to Email Template</h1>
      <div className="grid grid-cols-12 mt-12 w-full gap-4">
        <div className="col-span-5">
          <textarea className="w-full rounded-lg p-6" rows={6} onChange={(e) => setMarkdownText(e.target.value)} value={markdownText}></textarea>
        </div>
        <div className="flex justify-center col-span-2">
          <button className="border px-4 py-2 h-min border-gray-700 rounded-lg bg-gray-400" onClick={handleConvert}>Convert</button>
        </div>
        <div className="col-span-5 border p-6 bg-[#FFFDF7]">{mailTemplate}</div>
      </div>
    </main>
  );
}

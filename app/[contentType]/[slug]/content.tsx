'use client'
import React, { useEffect } from 'react'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

export default function Content({ html }) {
    useEffect(() => {
        hljs.registerLanguage('javascript', javascript)
        hljs.highlightAll();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    )
}

import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import 'tailwindcss/tailwind.css'


const config: DocsThemeConfig = {
  logo: (<span style={{ fontWeight: 800, fontSize: '20px' }}>
  InsideFoot
</span>),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },

  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Inside Foot',
  },
  gitTimestamp: null,
  feedback: {
    content:null,
  },
  editLink:{
    text: null,
  },
}
export default config

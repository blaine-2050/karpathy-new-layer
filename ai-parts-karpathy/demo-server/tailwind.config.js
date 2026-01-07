/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'Courier', 'Liberation Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            // Typewriter styling for code blocks (prompts/original markdown)
            'pre': {
              fontFamily: '"Courier New", Courier, "Liberation Mono", monospace',
              backgroundColor: '#fafaf9',
              border: '1px solid #d4d4d4',
              color: '#292524',
              padding: '2rem 2.5rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              fontSize: '1.1rem',
              lineHeight: '1.85',
              letterSpacing: '0.01em',
            },
            'code': {
              fontFamily: '"Courier New", Courier, "Liberation Mono", monospace',
              backgroundColor: '#e8e8e8',
              color: '#1a1a1a',
              padding: '0.2rem 0.4rem',
              borderRadius: '3px',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
            },
            // Blockquote styling for Karpathy quote
            'blockquote': {
              borderLeftColor: '#4a5568',
              borderLeftWidth: '4px',
              backgroundColor: '#f7fafc',
              fontStyle: 'italic',
              color: '#2d3748',
              padding: '1rem 1.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            // Ensure headings are visible
            'h1, h2, h3, h4': {
              color: '#1a202c',
            },
            // Horizontal rules
            'hr': {
              borderColor: '#cbd5e0',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

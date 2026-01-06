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
              backgroundColor: '#fafafa',
              border: '1px solid #e0e0e0',
            },
            'code': {
              fontFamily: '"Courier New", Courier, "Liberation Mono", monospace',
              backgroundColor: '#f0f0f0',
              padding: '0.2rem 0.4rem',
              borderRadius: '3px',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            // Blockquote styling for Karpathy quote
            'blockquote': {
              borderLeftColor: '#666',
              backgroundColor: '#f9f9f9',
              fontStyle: 'italic',
              color: '#444',
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

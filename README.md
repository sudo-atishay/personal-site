# Personal Site

Link: https://sudo-atishay.github.io/personal-site/

A minimalist single-page personal website with sections for home, about, blog, and contact.

## Features

- **Single-page scrollable layout** - No separate pages, just smooth scrolling between sections
- **Markdown-powered blog** - Write blog posts in Markdown and they automatically appear on the site
- **Lightweight & fast** - No heavy frameworks, just HTML, CSS, and vanilla JavaScript
- **Dark retro theme** - Clean, minimal design with excellent readability

## Structure

```
personal-site/
├── index.html          # Main single-page application
├── index.css           # Styles
├── content/
│   ├── about.md        # About section content
│   ├── contact.md      # Contact section content
│   └── posts/          # Blog posts directory
│       ├── 2025-11-18-clean-software.md
│       └── 2025-11-15-why-write.md
```

## How to Add a New Blog Post

1. Create a new Markdown file in `content/posts/` with a descriptive filename:
   ```
   content/posts/YYYY-MM-DD-title.md
   ```

2. Write your blog post in Markdown format. Start with a title and optional date:
   ```markdown
   # Your Blog Post Title
   
   *November 18, 2025*
   
   Your content here...
   ```

3. Add the filename to the `blogPosts` array in `index.html`:
   ```javascript
   const blogPosts = [
     '2025-11-18-clean-software.md',
     '2025-11-15-why-write.md',
     'your-new-post.md'  // Add here
   ];
   ```

4. Refresh the page - your new post will automatically appear in the blog section!

## Running Locally

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Editing Content

- **Home section**: Edit directly in `index.html` (the `#home` section)
- **About**: Edit `content/about.md`
- **Blog**: Add new `.md` files in `content/posts/` and update the `blogPosts` array
- **Contact**: Edit `content/contact.md`

## Customization

- **Colors**: Edit CSS variables in `index.css` (`:root` section)
- **Fonts**: Change Google Fonts imports in `index.html` and CSS
- **Layout**: Modify section structure in `index.html`

---

*Built with simplicity in mind. No build tools, no dependencies, just plain web technologies.*

export interface Blog {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  featured: boolean;
  coverImage?: string;
  images?: string[];
}

export const blogs: Blog[] = [
  {
    slug: "your-first-blog-post",
    title: "Your First Blog Post Title",
    description: "A brief description of what this blog post is about. Keep it concise and engaging.",
    content: `
# Your First Blog Post Title

Write your introduction here. Explain what the blog post is about and why readers should care.

## Section 1: Main Concept

Explain the main concept or problem you're addressing.

**Key Points:**
• Point one
• Point two
• Point three

## Section 2: Technical Details

Share technical implementation details, code examples, or step-by-step guides.

\`\`\`java
// Add your code examples here
public class Example {
    public void method() {
        System.out.println("Your code here");
    }
}
\`\`\`

## Section 3: Challenges & Solutions

Discuss challenges you faced and how you solved them.

## Conclusion

Summarize the key takeaways and what readers should remember.

**Resources:**
- Link to your project
- Related documentation
- Further reading
    `,
    date: "2024-12-27",
    readTime: "5 min read",
    tags: ["Tutorial", "Backend", "Java"],
    author: "Aryan Raj",
    featured: true
  },
  {
    slug: "second-blog-post",
    title: "Your Second Blog Post",
    description: "Another interesting topic you want to write about",
    content: `
# Your Second Blog Post

Your content goes here...

## Getting Started

Write your blog content here.
    `,
    date: "2024-12-20",
    readTime: "4 min read",
    tags: ["Spring Boot", "Backend"],
    author: "Aryan Raj",
    featured: false
  }
];

export const additionalBlogs = [
  {
    title: "Coming Soon: Another Blog Post",
    description: "Add your blog post description here",
    readTime: "5 min read",
    date: "2024-12-15"
  },
  {
    title: "Coming Soon: Yet Another Post",
    description: "Add your blog post description here",
    readTime: "4 min read",
    date: "2024-12-10"
  }
];

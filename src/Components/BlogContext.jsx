import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', content: 'React is a popular JavaScript library for building user interfaces, particularly for single-page applications where you need a fast, interactive user experience. Created by Facebook, it allows developers to build large web applications that can update and render efficiently in response to data changes.', name: 'Author 1', image: '/images/React.png' },
    { id: 2, title: 'Second Blog', content: 'JavaScript is the programming language of the web, used by millions of developers worldwide. It enables dynamic interactivity on websites when applied to an HTML document. JavaScript is versatile and beginner-friendly, making it a crucial tool for front-end development.', name: 'Author 2', image: '/images/javascript.png' },
    { id: 3, title: 'Third Blog', content: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment. It executes JavaScript code outside of a browser, allowing developers to use JavaScript to write server-side code. This has unified the language and made development faster and more efficient.', name: 'Author 3', image: '/images/node.png' },
    { id: 4, title: 'Fourth Blog', content: 'HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It forms the structure of web content by defining elements like headings, paragraphs, and links. HTML is fundamental to web development and works in conjunction with CSS and JavaScript.', name: 'Author 4', image: '/images/html.png' },
    { id: 5, title: 'Fifth Blog', content: 'CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in HTML. CSS is essential for web design, allowing developers to create visually engaging web pages and user interfaces with layout, color, fonts, and animations.', name: 'Author 5', image: '/images/css.png' },
    { id: 6, title: 'Sixth Blog', content: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed by Google, it provides robust features for building dynamic web applications, including a component-based architecture, dependency injection, and powerful templating.', name: 'Author 6', image: '/images/angular.png' },
    { id: 7, title: 'Seventh Blog', content: 'Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. Known for its simplicity and flexibility, Vue is designed to be incrementally adoptable. Its core library focuses on the view layer, making it easy to integrate with other projects.', name: 'Author 7', image: '/images/vue.png' },
    { id: 8, title: 'Eighth Blog', content: 'Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used in web development, data analysis, artificial intelligence, and scientific computing.', name: 'Author 8', image: '/images/python.png' },
    { id: 9, title: 'Ninth Blog', content: 'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. Ruby is best known for its use in web development, particularly with the Ruby on Rails framework.', name: 'Author 9', image: '/images/ruby.png' },
    { id: 10, title: 'Tenth Blog', content: 'PHP is a popular general-purpose scripting language especially suited to web development. It was originally created by Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group. PHP is a server scripting language and a powerful tool for making dynamic and interactive web pages.', name: 'Author 10', image: '/images/php.png' },
    { id: 11, title: 'Eleventh Blog', content: 'Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere, meaning that compiled Java code can run on all platforms that support Java.', name: 'Author 11', image: '/images/java.png' },
    { id: 12, title: 'Twelfth Blog', content: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. It is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.', name: 'Author 12', image: '/images/kotlin.png' },
    { id: 13, title: 'Thirteenth Blog', content: 'Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.', name: 'Author 13', image: '/images/swift.png' },
    { id: 14, title: 'Fourteenth Blog', content: 'C# is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers.', name: 'Author 14', image: '/images/csharp.png' },
    { id: 15, title: 'Fifteenth Blog', content: 'Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. Go is often used for cloud and server-side applications.', name: 'Author 15', image: '/images/go.png' },
  ]);

  const [people, setPeople] = useState([]);

  const editBlogEntry = (id, updatedEntry) => {
    setBlogs(blogs.map(blog => (blog.id === id ? updatedEntry : blog)));
  };
  
  const deleteBlogEntry = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const addBlog = (blog) => {
    const imageUrl = URL.createObjectURL(blog.image);
    const newBlog = { ...blog, id: blogs.length + 1, image: imageUrl };

    // Update blogs
    setBlogs([...blogs, newBlog]);

    // Update people list
    if (!people.find(person => person.name === blog.name)) {
      setPeople([...people, { name: blog.name, image: imageUrl }]);
    }
  };

  return (
    <BlogContext.Provider value={{ blogs, editBlogEntry, deleteBlogEntry, addBlog, people }}>
      {children}
    </BlogContext.Provider>
  );
};
As normal human beings, we keep learning new things and forgetting them at the same time. Interestingly, our brain is like a very old and inefficient computer. The many things you learned are stow away somewhere archive in your deep deep deep brain. The point is coming back to some old information sometimes / often, and brush the dust off. Now you don't remember the detail, but you know where it is stored and access easily.

I believe, DOM which stands for 'Document Object Model' is something you faced in the beginning as a new programmer and researched but don't remember detail clearly. To learn and use JavaScript, DOM is something you must understand, therefore, let's review DOM manipulation and bring the detail back from the dusty archive.

When writing web pages, one of the most common things to do is manipulate the document structure. This is usually done by using DOM.

First of all, DOM is a structure to manipulate HTML (The HyperText Markup Language) or XML (Extensible Markup Language) from a program. Simply, you can say DOM is a connection point between HTML documents and Javascript. You can change the color of the background, change the font size, or anything you can see on the web page. And it is always a tree structure (class structure) like a family tree of Black from Harry Potter. For example, James Potter (grandfather) is `<body>` tag, Harry Potter (parent) is `<section>` tag inside of `<body>` tag, Aruba's Potter (grandchild / benchmark) is `<p>` tag inside of `<section>` tag ... and go on and go on. We call these element tags 'Node' such as parent node, children node, siblings node, etc.

However, DOM is not Javascript. DOM and DOM method is part of something called the web APIs that stands for Application Programming Interface. (It is like libraries that browsers implement and that can access from our javaScript code.)

For talking about DOM manipulation, the window object and document property are inevitable. The window object represents a window containing a DOM document. A window is a top-level object (a big papa) that has a bunch of properties. And one of the window properties is the document property pointing to the DOM document loaded in the window.
The window object is available to us in any browser window and tab. It has a lot of information about a particular window tab. If you open three tabs in the same browser window, each has a different (javascript) window object. They contain information such as location (URL), size of the screen, etc.

The document property is constructed after the window object. It is a special object that is the entry point to the DOM. It represents the contents on the page. Most of the time, it is HTML or XML. It also contains information such as location (URL), child node (structure representing HTML like `<script>` tag, `<ul>` tag, etc.) Open a console on the browser and type `console.dir(document)`, you can see a whole bunch of information that document property has.  
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qu8w9oxoylcevjwtteq6.png)

Finally, let's see how to access and manipulate DOM. There are many methods to access and manipulate DOM. For example

- SELECTING
- `.getElementByID, TagName, ClassName`
- `.querySelector('Element, ID, ClassName')`
- ADDING
- TEXT: `.textContent (all text)`, `.innerHTML (text except tags)`
- CSS: `.style.propaty='value'`, `.style.cssText = 'propaty: value;'`
- CLASS: `.className`, `.classList`
- ELEMENT: `.appendChild(Element)`

Let's see some examples.

```javascript
document.querySelector(".message").textContent = "Correct Number!";
```

1. Selecting the class 'message' by `.querySelector('.message')`
2. Adding text 'Correct Number!' by `.textContent` instead of original 'start guessing...'

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1nasxe0x882s070at85o.png)
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7rnfa6vd8xxdr53qw6ft.png)

Yay! now you accessed to the document and manipulated the text content!

You can also manipulate by events. Events are a general term for some actions that happen on webpages thus clicking a button, typing into the form, reading a web page, or pointing a mouse. For executing processing these events, we use an event handler. For example,

- onclick
- onkeypress
- onload
- onmouseover
- ondbclick

Let's try using them with `.eventListner`.

```javascript
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
```

1. Selecting the class 'click' by `.querySelector('.check')`
2. Adding `.eventListner('event handler', function())`
3. Setting event handler as click
4. Setting `Concole.log` the value of class 'guess'

Nowadays, JavaScript is a market leader. Some people say

> “Any application that can be written in JavaScript, will eventually be written in JavaScript.”.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bougo5fe3bl3tqr7ko60.png)

The main reason is that it's a light-weighted programming language that can easily be integrated with other frameworks/languages. Moreover, JavaScript has played a significant role in digital transformation by creating interactive web pages using frontend development frameworks. Another key feature is that all the top web browsers, including Google Chrome, Internet Explorer, Firefox, Edge, Safari, and Opera, all support JavaScript. There is more feature but this is why learning JavaScript will be your significant step for getting a job in the future.

Have fun with your coding, or rather I should say enjoy debugging life everyone!

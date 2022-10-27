import React from 'react';

const Blog = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-0">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <div className="grid gap-16 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-2xl">
        <div className="flex bg-white px-12 py-10 rounded shadow-xl">
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
              >
                 What is cors?
              </a>
            </div>
            <p className="bg-gray-100 pr-5 py-1">
              <article className="mb-5 text-gray-700 text-left pl-5">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
              </article>
            </p>
          </div>
        </div>
        <div className="flex bg-white px-12 py-10 rounded shadow-xl">
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
              >
                 Why are you using firebase? 
              </a>
            </div>
            <p className=" bg-gray-100 pr-5 py-1">
              <article className="mb-5 text-gray-700 text-left pl-5">
              The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.

The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.

The Realtime Database is a NoSQL database and as such has different optimizations and functionality compared to a relational database. The Realtime Database API is designed to only allow operations that can be executed quickly. This enables you to build a great realtime experience that can serve millions of users without compromising on responsiveness. Because of this, it is important to think about how users need to access your data and then structure it accordingly.
              </article>
            </p>
          </div>
        </div>
        <div className="flex bg-white px-12 py-10 rounded shadow-xl">
          <div> 
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
              >
                How does the private route work?
              </a>
            </div>
            <p className="bg-gray-100 pr-5 py-1">
              <article className="mb-5 text-gray-700 text-left pl-5">
              Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start
The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
Public and Private routes will also restrict accessing the previously visited routes using the browser back button after logout. I hope you have found this useful. Thank you for reading.
              </article>
            </p>
          </div>
        </div>
        <div className="flex bg-white px-12 py-10 rounded shadow-xl">
          <div> 
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
              >
                What is Node? How does Node work?
              </a>
            </div>
            <p className="bg-gray-100 pr-5 py-1">
              <article className="mb-5 text-gray-700 text-left pl-5">
              Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

Node.js basically works on two concept

Asynchronous
Non-blocking I/O
              </article>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Blog;
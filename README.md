# 🧱 Dev Stack Builder

A React website where you can browse popular development technologies and put together your own stack. Pick a frontend framework, a backend runtime, a database and the tools around them, and see your selection build up in a side panel as you go.

**Live site:** [https://react-87owwtzil-siyams-projects-c05f1af6.vercel.app/](https://react-87owwtzil-siyams-projects-c05f1af6.vercel.app/)

## 🛠️ Technologies used

- React 18 (Vite)
- Tailwind CSS v4
- JavaScript (ES6+)
- React-Toastify
- JSON (local data file)

## ✨ Features

1. **Build a stack.** Add any technology to the "Your Stack" panel with one click. The same technology can't be added twice — the button turns into "✓ Added to Stack" and a warning toast appears if you try.
2. **Remove one or clear everything.** Each item in the panel has an ✕ button, and "Remove All" empties the whole stack at once. Every action confirms with a toast.
3. **Responsive layout.** One column on mobile, two on tablet, three cards plus the stack sidebar on desktop, with a hamburger menu on small screens.

## 🚀 Run it locally

```bash
npm install
npm run dev
```

---

## 📚 React questions

**1. What is JSX, and why is it used in React?**
JSX lets me write HTML-like markup directly inside JavaScript. It gets compiled to normal `React.createElement()` calls. I use it because describing the UI in markup is far easier to read than building elements by hand, and I can drop JavaScript values into it with `{}`.

**2. What is the difference between props and state?**
Props come from the parent and are read-only inside the child - `TechnologyCard` receives `tech` and just displays it. State lives inside a component and can change; when it changes, the component re-renders. `stack` in `App.jsx` is state because it changes as the user adds and removes technologies.

**3. What does the `useState` hook do, and where did you use it in this project?**
It gives a component a value that survives re-renders, plus a function to update it. I used it three times in `App.jsx` - `technologies` for the loaded data, `stack` for the selected items, and `loading` for the spinner - and once in `Navbar.jsx` for whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders, which is the right place for side effects like fetching. Fetching directly in the component body would fire on every render and cause an infinite loop, so I put the `fetch` inside `useEffect` with an empty dependency array `[]` - that makes it run only once, when the app first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The key tells React which element is which between renders. With stable keys React can update only the item that actually changed instead of re-creating the whole list. I use `tech.id`, which is unique per technology.

**6. What is conditional rendering? Show one place you used it.**
It means rendering different JSX depending on a condition. In `YourStack.jsx` I check `stack.length === 0`: if the stack is empty I show the "No technology selected yet" message, otherwise I show the list of items and the "Remove All" button. I also use it in `App.jsx` to show the loading spinner while the data is still being fetched.

**7. How do you pass data from a parent to a child, and how does a child send something back?**
Data goes down as props: `App` passes `tech` and `isAdded` to `TechnologyCard`. To send something back, the parent passes a function as a prop and the child calls it - `App` passes `onAdd`, and the card calls `onAdd(tech)` when the button is clicked, so `App` updates the stack state.

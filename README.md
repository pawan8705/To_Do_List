# ✅ To-Do List App

A clean, interactive task management application built with React and Tailwind CSS — featuring full CRUD operations (add, edit, complete, delete), real-time UI updates via React state management, and a polished responsive interface with task completion tracking.

---

## 📌 Overview

This To-Do List application provides a minimal yet complete task management workflow. Users can create new tasks, mark them as done with a visual strikethrough, edit existing task content inline, and delete individual tasks — all reflected instantly in the UI through React's component state system.

The project focuses on core React fundamentals: controlled components, conditional rendering, state lifting, and component composition — built without any external state management library to keep the architecture clear and understandable.

---

## ✨ Features

- **Add New Tasks** — An input field with an "Add" button lets users type a task and submit it to the list. Submitting with an empty input is prevented via validation, ensuring the task list stays clean.
- **Mark as Complete** — Each task has a checkbox or toggle that marks it as completed. Completed tasks receive a visual strikethrough and a dimmed style to distinguish them from pending tasks at a glance.
- **Edit Existing Tasks** — Tasks can be edited in place. Clicking an edit control puts the task into an editable input mode, allowing the user to modify the text and save the updated version — all without losing the task's position in the list.
- **Delete Tasks** — A delete button on each task removes it from the list permanently. Deletions are reflected instantly in the UI without any page reload.
- **Task Count Display** — The interface shows how many tasks are pending and how many are completed, giving users a quick overview of their progress without counting manually.
- **Controlled Input Components** — All text inputs in the app are controlled React components, with their values bound to state — ensuring consistent, predictable behavior and easy validation.
- **Conditional Rendering** — The edit mode for individual tasks is toggled via per-task boolean state, rendering either the display view or the edit input for each task independently.
- **Empty State Handling** — When no tasks exist, the app displays a friendly empty-state message prompting the user to add their first task — avoiding a blank or confusing interface.
- **Responsive Layout** — Styled with Tailwind CSS, the app layout works correctly across mobile, tablet, and desktop screen sizes without any custom media query CSS.
- **Vite Build Tooling** — Fast development server with HMR via Vite and `@vitejs/plugin-react` for an instant feedback loop during development.
- **ESLint Code Quality** — ESLint enforces React hooks best practices and ensures code quality throughout the component tree.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based UI, `useState` for task state management |
| JavaScript (ES6+) | Task logic — add, edit, delete, complete operations |
| Vite | Development server, HMR, and production bundling |
| Tailwind CSS v4 | Utility-first styling — layout, colors, task states, responsive design |

---

## 📁 Project Structure

```
To_Do_List/
├── public/                  # Static assets (favicon)
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx    # Controlled input + Add button for creating new tasks
│   │   ├── TaskList.jsx     # Maps over task array, renders TaskItem for each
│   │   └── TaskItem.jsx     # Individual task row — complete toggle, edit mode, delete button
│   ├── App.jsx              # Root component — task array state, CRUD handler functions
│   └── main.jsx             # React DOM entry point
├── index.html               # Vite HTML entry point
├── vite.config.js           # Vite + React plugin configuration
├── eslint.config.js         # ESLint rules and plugins
└── package.json             # Dependencies and npm scripts
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

**1. Clone the repository**
```bash
git clone https://github.com/tripathipawan/To_Do_List.git
cd To_Do_List
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Build for production**
```bash
npm run build
```

---

## 🎮 How to Use

1. Type a task in the **input field** at the top and click **Add** (or press Enter) to add it to the list.
2. Click the **checkbox** next to any task to mark it as complete — the task gets a strikethrough style.
3. Click the **edit icon** on a task to enter edit mode — modify the text and confirm to save changes.
4. Click the **delete icon** to remove a task from the list permanently.
5. The task counter updates automatically to reflect current pending and completed counts.

---

## 🧠 Architecture Highlights

| Concern | Implementation |
|---|---|
| Task State | Single `tasks` array in `App.jsx` — each task is an object with `id`, `text`, `completed`, and `isEditing` fields |
| Add Task | Appends a new task object to the array using the spread operator via `setTasks` |
| Complete Toggle | Maps over tasks, flips `completed` boolean on the matched `id` |
| Edit Mode | Toggles `isEditing` boolean per task — `TaskItem` conditionally renders input or text display |
| Delete Task | Filters out the task with the matching `id` and updates state |
| Unique IDs | Tasks are assigned `Date.now()` or `crypto.randomUUID()` as IDs to avoid key conflicts |

---

## 🌱 What I Learned

- Designing a complete CRUD data flow with React's `useState` — no external state library needed
- Building controlled input components for both task creation and inline editing
- Managing per-item edit mode with a boolean flag inside individual task objects
- Using immutable state update patterns (spread, map, filter) for all task operations
- Applying Tailwind CSS to communicate task state visually (strikethrough, opacity, color change)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add: your feature description'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Pawan Tripathi**
- GitHub: [@tripathipawan](https://github.com/tripathipawan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

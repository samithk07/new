// ## Dynamic Task Manager
// *Scenario:* Build a task manager that tracks tasks with priority and status.
// jsx
// const tasks = [
//   { id: 1, title: "Setup Project", priority: 2, completed: true },
//   { id: 2, title: "Write Tests", priority: 3, completed: false },
//   { id: 3, title: "Deploy App", priority: 1, completed: false }
// ];
// *Challenges:*

// - Write a *higher-order function* to *filter tasks* by a condition (e.g., priority or completion).
// - Create a *pure function* that sorts tasks by priority descending.
// - Add a *method to each task object* dynamically to mark it as complete.
// - Use map to create a *summary string* for each task: "Task <id>: <title> [Priority <priority>] Completed: <status>".
// - Store updated tasks in *localStorage* and retrieve them.

 let tasks = [
   { id: 1, title: "Setup Project", priority: 2, completed: true },
   { id: 2, title: "Write Tests", priority: 3, completed: false },
   { id: 3, title: "Deploy App", priority: 1, completed: false }
 ];

 
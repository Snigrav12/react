const employees = [
  {
    id: 1,
    firstname: "John",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup project environment",
        taskDescription: "Install required software and tools for the project.",
        taskDate: "2024-07-01",
        category: "Setup",
      },
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Design database schema",
        taskDescription: "Plan and design the database tables and relationships.",
        taskDate: "2024-07-02",
        category: "Database",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement authentication",
        taskDescription: "Develop login and registration functionality.",
        taskDate: "2024-07-03",
        category: "Backend",
      },
    ],
    taskNumbers: {
      active: 2,
      newtask: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 2,
    firstname: "Jane",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Create API endpoints",
        taskDescription: "Develop RESTful APIs for the application.",
        taskDate: "2024-07-01",
        category: "Backend",
      },
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Write unit tests",
        taskDescription: "Create unit tests for API endpoints.",
        taskDate: "2024-07-02",
        category: "Testing",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD pipeline",
        taskDescription: "Configure continuous integration and deployment.",
        taskDate: "2024-07-03",
        category: "DevOps",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup project repository",
        taskDescription: "Create and configure a GitHub repository for the project.",
        taskDate: "2024-06-28",
        category: "Setup",
      },
    ],
    taskNumbers: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstname: "Alice",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Create frontend components",
        taskDescription: "Design reusable React components.",
        taskDate: "2024-07-01",
        category: "Frontend",
      },
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Integrate third-party library",
        taskDescription: "Set up and configure a third-party library for charts.",
        taskDate: "2024-07-03",
        category: "Integration",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup development environment",
        taskDescription: "Install IDE and configure extensions.",
        taskDate: "2024-06-30",
        category: "Setup",
      },
    ],
    taskNumbers: {
      active: 1,
      newtask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstname: "Bob",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize SQL queries",
        taskDescription: "Improve query performance for large datasets.",
        taskDate: "2024-07-02",
        category: "Database",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        taskTitle: "Debug login issues",
        taskDescription: "Fix issues with user login functionality.",
        taskDate: "2024-07-01",
        category: "Bug Fixing",
      },
    ],
    taskNumbers: {
      active: 1,
      newtask: 0,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstname: "Eve",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        taskTitle: "Create wireframes",
        taskDescription: "Design wireframes for the dashboard UI.",
        taskDate: "2024-07-03",
        category: "Design",
      },
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        taskTitle: "Write integration tests",
        taskDescription: "Develop integration tests for backend APIs.",
        taskDate: "2024-07-04",
        category: "Testing",
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix broken links in documentation",
        taskDescription: "Identify and resolve dead links.",
        taskDate: "2024-06-28",
        category: "Documentation",
      },
    ],
    taskNumbers: {
      active: 1,
      newtask: 1,
      completed: 0,
      failed: 1,
    },
  },
];


const admin = [
  {
    id: 1,
    firstname: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];


  
  export const setlocalstorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
  }

  export const getlocalstorage=()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   return { employees, admin };
  }
  
  
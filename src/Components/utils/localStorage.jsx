const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "aarav@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        id: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription:
          "Create responsive login page using React and Tailwind CSS.",
        taskDate: "2026-06-25",
        category: "Development",
      },

      {
        id: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription:
          "Resolve mobile navbar toggle issue.",
        taskDate: "2026-06-20",
        category: "Bug Fix",
      },

      {
        id: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription:
          "Connect login form with backend API.",
        taskDate: "2026-06-28",
        category: "Backend",
      },
    ],
  },

  {
    id: 2,
    firstName: "Vihaan",
    email: "vihaan@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        id: 4,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription:
          "Create employee dashboard UI.",
        taskDate: "2026-09-15",
        category: "Design",
      },

      {
        id: 5,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Work",
        taskDescription:
          "Integrate employee API.",
        taskDate: "2026-09-16",
        category: "Development",
      },

      {
        id: 6,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription:
          "Test application functionality.",
        taskDate: "2026-09-10",
        category: "Testing",
      },
    ],
  },

  {
    id: 3,
    firstName: "Ananya",
    email: "ananya@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0,
    },

    tasks: [
      {
        id: 7,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Landing Page",
        taskDescription:
          "Create responsive landing page.",
        taskDate: "2026-09-18",
        category: "Frontend",
      },

      {
        id: 8,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Navbar",
        taskDescription:
          "Create responsive navbar.",
        taskDate: "2026-09-19",
        category: "Frontend",
      },

      {
        id: 9,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "React Components",
        taskDescription:
          "Create reusable React components.",
        taskDate: "2026-09-17",
        category: "React",
      },

      {
        id: 10,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription:
          "Setup React project.",
        taskDate: "2026-09-12",
        category: "Setup",
      },
    ],
  },

  {
    id: 4,
    firstName: "Rohan",
    email: "rohan@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        id: 11,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Backend API",
        taskDescription:
          "Create backend API.",
        taskDate: "2026-09-20",
        category: "Backend",
      },

      {
        id: 12,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database",
        taskDescription:
          "Connect database.",
        taskDate: "2026-09-21",
        category: "Database",
      },

      {
        id: 13,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription:
          "Perform API testing.",
        taskDate: "2026-09-15",
        category: "Testing",
      },

      {
        id: 14,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Old Task",
        taskDescription:
          "Task was not completed.",
        taskDate: "2026-09-10",
        category: "Other",
      },
    ],
  },

  {
    id: 5,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",

    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },

    tasks: [
      {
        id: 15,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "React App",
        taskDescription:
          "Build React application.",
        taskDate: "2026-09-20",
        category: "React",
      },

      {
        id: 16,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Design",
        taskDescription:
          "Design application UI.",
        taskDate: "2026-09-21",
        category: "Design",
      },

      {
        id: 17,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription:
          "Write project documentation.",
        taskDate: "2026-09-14",
        category: "Documentation",
      },

      {
        id: 18,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Old Assignment",
        taskDescription:
          "Assignment was not completed.",
        taskDate: "2026-09-10",
        category: "Assignment",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  const existingEmployees = localStorage.getItem("employees");
  const existingAdmin = localStorage.getItem("admin");

  if (!existingEmployees) {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }

  if (!existingAdmin) {
    localStorage.setItem(
      "admin",
      JSON.stringify(admin)
    );
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(
    localStorage.getItem("employees") || "[]"
  );

  const admin = JSON.parse(
    localStorage.getItem("admin") || "[]"
  );

  return {
    employees,
    admin,
  };
};
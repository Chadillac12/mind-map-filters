// Example usage of MindMapFilters

// Sample mind map data
const mindMapData = [
    {
        id: 1,
        text: "Project Planning",
        tags: ["work", "important"],
        createdAt: "2025-03-15T10:30:00Z",
        children: [
            {
                id: 2,
                text: "Define Requirements",
                tags: ["todo", "phase1"],
                createdAt: "2025-03-16T14:20:00Z"
            },
            {
                id: 3,
                text: "Create Timeline",
                tags: ["todo", "phase1"],
                createdAt: "2025-03-17T09:45:00Z"
            }
        ]
    },
    {
        id: 4,
        text: "Personal Goals",
        tags: ["personal", "important"],
        createdAt: "2025-03-10T08:15:00Z",
        children: [
            {
                id: 5,
                text: "Learn JavaScript",
                tags: ["learning", "inprogress"],
                createdAt: "2025-03-11T16:30:00Z"
            },
            {
                id: 6,
                text: "Exercise Routine",
                tags: ["health", "todo"],
                createdAt: "2025-03-12T07:00:00Z"
            }
        ]
    },
    {
        id: 7,
        text: "Shopping List",
        tags: ["personal", "todo"],
        createdAt: "2025-03-20T18:30:00Z",
        children: []
    }
];

// Create a new MindMapFilters instance
const filters = new MindMapFilters(mindMapData);

// Example 1: Find all nodes with the "important" tag
console.log("Important Nodes:");
const importantNodes = filters
    .filterByTags("important")
    .applyFilters();
console.log(importantNodes);

// Reset filters
filters.clearFilters();

// Example 2: Find all tasks (nodes with "todo" tag)
console.log("\nTodo Nodes:");
const todoNodes = filters
    .filterByTags("todo")
    .applyFilters();
console.log(todoNodes);

// Reset filters
filters.clearFilters();

// Example 3: Find nodes with text containing "Project" (case-insensitive)
console.log("\nNodes containing 'Project':");
const projectNodes = filters
    .filterByText("project")
    .applyFilters();
console.log(projectNodes);

// Reset filters
filters.clearFilters();

// Example 4: Find personal tasks (combining filters)
console.log("\nPersonal Todo Nodes:");
const personalTodoNodes = filters
    .filterByTags("personal")
    .filterByTags("todo")
    .applyFilters();
console.log(personalTodoNodes);

// Reset filters
filters.clearFilters();

// Example 5: Find nodes created in the last week
const now = new Date();
const oneWeekAgo = new Date(now);
oneWeekAgo.setDate(now.getDate() - 7);

console.log("\nNodes created in the last week:");
const recentNodes = filters
    .filterByDateRange(oneWeekAgo, now)
    .applyFilters();
console.log(recentNodes);

// Reset filters
filters.clearFilters();

// Example 6: Custom filter - nodes with no children
console.log("\nNodes with no children:");
const noChildrenNodes = filters
    .addFilter(node => !node.children || node.children.length === 0, "No children")
    .applyFilters();
console.log(noChildrenNodes);

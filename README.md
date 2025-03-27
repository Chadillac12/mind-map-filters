# Mind Map Filters

A JavaScript library for filtering mind map data structures. This library provides a simple and flexible way to apply multiple filters to mind map data.

## Features

- Apply multiple filters to mind map data
- Chain filtering operations
- Built-in filters for common use cases:
  - Text content filtering
  - Tag filtering
  - Date range filtering
- Custom filter support
- Works in both browser and Node.js environments

## Installation

### Browser

```html
<script src="mindMapFilters.js"></script>
```

### Node.js

```bash
# Coming soon to npm
```

## Usage

```javascript
// Create a new instance with your mind map data
const data = [
  { id: 1, text: "Project Ideas", tags: ["important", "planning"] },
  { id: 2, text: "Weekly Tasks", tags: ["todo"] },
  { id: 3, text: "Meeting Notes", tags: ["work", "important"] }
];

const filters = new MindMapFilters(data);

// Apply a single filter
const importantNodes = filters
  .filterByTags("important")
  .applyFilters();

// Chain multiple filters
const filteredNodes = filters
  .clearFilters()
  .filterByText("task")
  .filterByTags(["todo", "work"])
  .applyFilters();

// Create a custom filter
filters
  .clearFilters()
  .addFilter(node => node.id > 1, "ID greater than 1")
  .applyFilters();
```

## API

### Constructor

```javascript
const filters = new MindMapFilters(data);
```

### Methods

#### `addFilter(filterFn, name)`
Add a custom filter function

#### `clearFilters()`
Remove all filters

#### `applyFilters()`
Apply all filters to the data and return the filtered results

#### `filterByText(text, caseSensitive = false)`
Filter nodes by text content

#### `filterByTags(tags)`
Filter nodes by tags (string or array of strings)

#### `filterByDateRange(startDate, endDate)`
Filter nodes by creation date range

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

// Mind Map Filters
// A JavaScript library for filtering mind map data

class MindMapFilters {
    constructor(data) {
        this.data = data;
        this.filters = [];
    }

    /**
     * Add a filter function
     * @param {Function} filterFn - Function that takes a node and returns boolean
     * @param {String} name - Optional name for the filter
     */
    addFilter(filterFn, name = '') {
        this.filters.push({
            fn: filterFn,
            name: name
        });
        return this;
    }

    /**
     * Remove all filters
     */
    clearFilters() {
        this.filters = [];
        return this;
    }

    /**
     * Apply all filters to the data
     * @returns {Array} - Filtered data
     */
    applyFilters() {
        if (this.filters.length === 0) {
            return this.data;
        }

        return this.data.filter(node => {
            // Node passes if it passes all filters
            return this.filters.every(filter => filter.fn(node));
        });
    }

    /**
     * Filter by node text content
     * @param {String} text - Text to search for
     * @param {Boolean} caseSensitive - Whether to use case-sensitive matching
     */
    filterByText(text, caseSensitive = false) {
        const searchText = caseSensitive ? text : text.toLowerCase();
        
        return this.addFilter(node => {
            const nodeText = caseSensitive ? node.text : node.text.toLowerCase();
            return nodeText.includes(searchText);
        }, 'Text: ' + text);
    }

    /**
     * Filter by node tags
     * @param {String|Array} tags - Tag or tags to filter by
     */
    filterByTags(tags) {
        const tagArray = Array.isArray(tags) ? tags : [tags];
        
        return this.addFilter(node => {
            if (!node.tags || !Array.isArray(node.tags)) {
                return false;
            }
            return tagArray.some(tag => node.tags.includes(tag));
        }, 'Tags: ' + tagArray.join(', '));
    }

    /**
     * Filter by creation date
     * @param {Date} startDate - Start date (inclusive)
     * @param {Date} endDate - End date (inclusive)
     */
    filterByDateRange(startDate, endDate) {
        return this.addFilter(node => {
            if (!node.createdAt) {
                return false;
            }
            
            const nodeDate = new Date(node.createdAt);
            return nodeDate >= startDate && nodeDate <= endDate;
        }, `Date: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`);
    }
}

// Export for browser and Node.js environments
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = MindMapFilters;
} else {
    window.MindMapFilters = MindMapFilters;
}

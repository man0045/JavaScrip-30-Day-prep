function debounce(func, wait) {
 let timeout;
 return function(...args) {
     clearTimeout(timeout);
     timeout = setTimeout(() => func.apply(this, args), wait);
 };
}

// Usage
const debouncedFunction = debounce(() => console.log('Debounced!'), 300);
window.addEventListener('resize', debouncedFunction);

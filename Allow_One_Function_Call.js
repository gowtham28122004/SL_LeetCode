function once(fn) {
    let called = false; // Track whether the function has been called
    
    return function (...args) {
        if (!called) {
            called = true; // Mark as called
            return fn(...args); // Call and return the result
        }
        return undefined; // Return undefined for subsequent calls
    };
}

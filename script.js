/*
  Part 2: JavaScript Functions
  This section contains all the functional logic, including
  parameters, return values, and demonstrating scope.
*/

// A global variable to demonstrate global scope
let globalMessage = "I am a global variable.";

/**
 * Calculates the area of a rectangle.
 * Demonstrates using parameters and a return value.
 * @param {number} length The length of the rectangle.
 * @param {number} width The width of the rectangle.
 * @returns {number} The calculated area.
 */
function calculateArea(length, width) {
    // A local variable, only accessible inside this function
    const localMessage = "I am a local variable.";
    console.log(globalMessage); // Can access the global variable
    console.log(localMessage); // Can access the local variable
    return length * width;
}

/*
  Part 3: Combining CSS and JS
  This section uses JavaScript to trigger CSS animations dynamically.
*/

/**
 * Toggles a CSS class to trigger an animation.
 * This function is reusable and can be called on any element.
 * @param {string} elementId The ID of the element to animate.
 * @param {string} className The CSS class to toggle.
 */
function toggleAnimation(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        // Toggles the 'active' class on and off
        element.classList.toggle(className);
    }
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the calculation button
    const calcBtn = document.getElementById('calc-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const length = 15;
            const width = 10;
            // Call the function and store the returned value
            const area = calculateArea(length, width);
            
            // Update the UI with the result
            const resultElement = document.getElementById('result-text').querySelector('span');
            resultElement.textContent = `${area} sq units`;
        });
    }

    // Event listener for the animation trigger button
    const triggerAnimBtn = document.getElementById('trigger-anim-btn');
    if (triggerAnimBtn) {
        triggerAnimBtn.addEventListener('click', () => {
            // Call the reusable function to animate the box
            toggleAnimation('animated-box', 'active');
        });
    }
});

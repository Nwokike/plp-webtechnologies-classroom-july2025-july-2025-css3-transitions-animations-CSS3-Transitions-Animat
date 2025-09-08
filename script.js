// Part 2: JavaScript Functions - Scope, Parameters & Return Values

// Function with parameters and return value
function calculateSum(a, b) {
    // Local scope variables
    const result = a + b;
    return result;
}

// Function demonstrating scope
function demonstrateScope() {
    // Local variable
    const localVar = "I'm a local variable";
    return localVar;
}

// Global variable
const globalVar = "I'm a global variable";

// Function using global variable
function useGlobalVariable() {
    return globalVar + " - accessed from function";
}

// Part 3: Combining CSS Animations with JavaScript

// Function to toggle animation class
function toggleAnimation(elementId, className) {
    const element = document.getElementById(elementId);
    element.classList.toggle(className);
}

// Function to change color with a transition
function changeColor(elementId) {
    const element = document.getElementById(elementId);
    const colors = ['#2ecc71', '#e74c3c', '#3498db', '#f39c12', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    element.style.transition = 'background-color 0.5s ease';
    element.style.backgroundColor = randomColor;
}

// Function to flip card
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle('flipped');
}

// Event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Part 2: JavaScript Functions demo
    const calculateButton = document.getElementById('calculate');
    const scopeDemoButton = document.getElementById('scopeDemo');
    
    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value) || 0;
            const num2 = parseFloat(document.getElementById('num2').value) || 0;
            
            // Using the calculateSum function
            const sum = calculateSum(num1, num2);
            
            document.getElementById('sumResult').textContent = 
                `The sum of ${num1} and ${num2} is ${sum}`;
        });
    }
    
    if (scopeDemoButton) {
        scopeDemoButton.addEventListener('click', function() {
            // Demonstrate local scope
            const localResult = demonstrateScope();
            
            // Demonstrate global scope
            const globalResult = useGlobalVariable();
            
            document.getElementById('scopeResult').innerHTML = 
                `<p>${localResult}</p><p>${globalResult}</p>`;
        });
    }
    
    // Part 3: Combining CSS and JS
    const startAnimationBtn = document.getElementById('startAnimation');
    const stopAnimationBtn = document.getElementById('stopAnimation');
    const changeColorBtn = document.getElementById('changeColor');
    const flipCardBtn = document.getElementById('flipCardBtn');
    
    if (startAnimationBtn) {
        startAnimationBtn.addEventListener('click', function() {
            toggleAnimation('animatedElement', 'js-animation');
        });
    }
    
    if (stopAnimationBtn) {
        stopAnimationBtn.addEventListener('click', function() {
            const element = document.getElementById('animatedElement');
            element.classList.remove('js-animation');
        });
    }
    
    if (changeColorBtn) {
        changeColorBtn.addEventListener('click', function() {
            changeColor('animatedElement');
        });
    }
    
    if (flipCardBtn) {
        flipCardBtn.addEventListener('click', function() {
            flipCard('flipCard');
        });
    }
});

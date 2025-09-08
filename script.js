* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f5f7fa;
    padding: 20px;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
}

h1 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    color: #2c3e50;
}

h2 {
    font-size: 1.6rem;
    margin: 20px 0 15px;
    color: #3498db;
}

h3 {
    font-size: 1.2rem;
    margin: 15px 0 10px;
}

section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.demo-container {
    margin: 20px 0;
}

/* Part 1: CSS Transitions and Animations */
.transition-box {
    width: 100px;
    height: 100px;
    background: #3498db;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    margin: 10px;
    transition: all 0.3s ease;
}

.transition-box:hover {
    transform: translateY(-10px);
}

.color-transition:hover {
    background: #e74c3c;
}

.animation-box {
    width: 100px;
    height: 100px;
    background: #9b59b6;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    margin: 10px;
}

.bounce {
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Part 2: JavaScript Functions */
.input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 150px;
}

button {
    padding: 8px 12px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background: #2980b9;
}

.result {
    margin-top: 15px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 4px;
    border-left: 3px solid #3498db;
}

/* Part 3: Combining CSS and JS */
.controls {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.animation-target {
    width: 120px;
    height: 120px;
    background: #2ecc71;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    margin: 15px 0;
    transition: all 0.5s ease;
}

.js-animation {
    animation: jsAnimation 2s infinite alternate;
}

@keyframes jsAnimation {
    0% { transform: translateX(0) rotate(0deg); }
    100% { transform: translateX(80px) rotate(180deg); }
}

.card-container {
    margin-top: 20px;
    perspective: 1000px;
}

.card {
    width: 150px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    margin-bottom: 15px;
}

.card.flipped {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
}

.card-front {
    background: #e74c3c;
}

.card-back {
    background: #3498db;
    transform: rotateY(180deg);
}

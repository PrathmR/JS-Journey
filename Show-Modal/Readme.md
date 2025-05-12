# Modal Pop-up with JavaScript

This project demonstrates a simple implementation of modal functionality using **JavaScript**. It allows users to open a modal window by clicking a button and close it using various interactions, including the **close button**, **clicking outside the modal (on the overlay)**, or **pressing the `Escape` key**.

## 📁 Files Included

- `index.html` – Basic HTML structure containing modal elements and buttons.
- `style.css` – Styling for modal and overlay (assumed present).
- `script.js` – Core JavaScript logic for modal interactivity (**this file**).

## 🚀 Features

- **Open Modal**: Click on any element with the class `.show-modal` to open the modal.
- **Close Modal**:
  - Click on the **close button** (element with class `.close-modal`)
  - Click outside the modal on the **overlay** (element with class `.overlay`)
  - Press the **Escape** key on your keyboard

## 🔧 How It Works

- The script selects all required DOM elements:
  - `.modal`, `.overlay`, `.close-modal`, and all `.show-modal` buttons
- When a `.show-modal` button is clicked:
  - The `hidden` class is **removed** from `.modal` and `.overlay`, making them visible.
- When `.close-modal` or `.overlay` is clicked, or the `Escape` key is pressed:
  - The `hidden` class is **added** back, hiding the modal and overlay.

## 🧠 JavaScript Highlights

- Use of `querySelectorAll` to attach event listeners to multiple buttons.
- Use of `classList.add()` and `classList.remove()` to toggle visibility.
- `keydown` event listener to handle keyboard input for better accessibility.

## 🔍 Example

```javascript
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
```

This block enables the user to press the Escape key to close the modal if it's currently open.

## ✅ Usage

1. Clone or copy the project files.
2. Link the JavaScript in your HTML file:
   ```html
   <script src="script.js" defer></script>
   ```
3. Make sure your `.modal`, `.overlay`, and `.show-modal` elements are structured in your HTML and styled in CSS.


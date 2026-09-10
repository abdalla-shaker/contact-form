# Contact Form (Task 2)

A clean, responsive, and accessible Contact Form web application built with HTML, CSS, and plain JavaScript. This project is part of the **Front-End Web Development Tasks (Level 1 - Task 2)**.

![Live Demo](https://img.shields.io/badge/Live_Demo-abdalla--shaker.github.io%2Fcontact--form-2ea44f?style=for-the-badge&logo=github)

## 🌐 Live Demo

You can view and test the live application here:  
👉 **[https://abdalla-shaker.github.io/contact-form](https://abdalla-shaker.github.io/contact-form)**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Validation & Logic](#validation--logic)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)
- [Author](#author)

---

## 🧐 Overview

The goal of this task is to create a modern, fully functional contact form that operates seamlessly across all screen sizes (mobile, tablet, desktop). It features real-time input validation, error messaging, dynamic state manipulation, and custom submission feedback without external dependencies.

---

## ✨ Features

- **Responsive Design**: Fluid layout built with CSS `flexbox`, viewport units (`dvh`), and proper relative spacing (`rem`).
- **Real-Time Input Validation**:
  - Validates required fields (_Full Name_, _Email_, _Subject_, _Message_) on input change (`change` event listener).
  - RegEx-based email format checking (`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`).
  - Dynamic display and removal of validation error messages.
- **Dynamic Feedback & DOM Manipulation**:
  - Prevents default form submission on error or success.
  - Dynamically replaces the form with a personalized confirmation screen upon successful submission (`OK, {Full Name}! Your email was sent successfully`).
- **Clean UI & Modern Styling**: Smooth focus states, subtle button hover animations, and dark dynamic shadow effects.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic form markup (`<form>`, `<label>`, `<input>`, `<textarea>`, `<button>`).
- **CSS3**: Responsive flexbox layout, custom styling, hover states, transitions, and dynamic positioning.
- **JavaScript (Vanilla ES6+)**: DOM manipulation, event listener bindings (`bind`), `FormData` handling, dynamic element creation, and RegEx validation.

---

## 🔍 Validation & Logic Overview

1. **Empty Field Check (`emptyChecker`)**: Checks if an input is whitespace-only. Automatically generates or removes error message paragraphs depending on the state.
2. **Email Syntax Check (`emailChecker`)**: Utilizes Regular Expressions to verify email structure if the field is non-empty.
3. **Form Submission (`submissionHandler`)**:
   - Collects data using `FormData` and `Object.fromEntries()`.
   - Halts submission if any field fails validation.
   - Clears the form interface and injects a personalized success message into the DOM.

---

## 📁 Project Structure

```text
├── index.html   # Main HTML structure
├── style.css    # Styling & responsive layout
└── script.js    # Validation rules & DOM handling
```

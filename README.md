# TrigEase: Trigonometry Calculator - Web Extension

TrigEase is a browser extension that performs accurate trigonometric computations directly within the browser using JavaScript-based mathematical logic. The project is designed to handle both **degree and radian inputs**, and return precise trigonometric values through a responsive user interface.

At its core, TrigEase applies trigonometric formulas using JavaScript’s Math engine, and formats the output for clarity and correctness. Special handling is implemented for common angles to ensure mathematically exact results where possible.

---

## How the Code Works

1. **Input Handling**
   The user enters an angle value and selects the desired unit (degrees or radians). Event listeners capture these inputs in real time.

2. **Angle Conversion Logic**

   * If the input is in degrees, the value is converted to radians using:

     `radians = degrees × (π / 180)`
   * If the input is already in radians, it is used directly for computation.

3. **Trigonometric Computation**
   The extension calculates the following functions using JavaScript’s `Math` methods and custom logic:

   * sine (sin)
   * cosine (cos)
   * tangent (tan)
   * cotangent (cot)
   * secant (sec)
   * cosecant (cosec/csc)

   Reciprocal functions (sec, cosec, cot) are derived from their primary counterparts to maintain consistency and accuracy.

4. **Common Angle Precision**
   For standard angles such as 30°, 45°, and 60°, the code includes logic to return clean fractional or exact decimal values instead of long floating-point approximations.

5. **Dynamic UI Updates**
   Once calculations are complete, results are instantly rendered in the popup interface without refreshing or reloading the extension.

---

## Features

* Degree and radian modes
* Accurate computation of all six trigonometric functions
* Instant, real-time results

---

## Tech Stack

* HTML for structure
* CSS for layout and styling
* JavaScript for logic and computation
* Browser Extension APIs for integration

---

## Project Structure

* `manifest.json` – Defines extension metadata and permissions
* `popup.html` – User interface layout
* `style.css` – Visual styling
* `script.js` – Trigonometric logic and event handling

---

## Purpose of the Project

TrigEase was built to demonstrate strong fundamentals in mathematical reasoning, and browser extension development. The project emphasizes  clarity, and usability while keeping the codebase simple and maintainable.

---

## Future Improvements

* Graphical visualization of trigonometric functions
* Dark mode support
* Extended mathematical operations

---

## License

This project is licensed under the **MIT License**.

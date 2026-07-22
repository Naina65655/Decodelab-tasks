# Form Validation Using HTML, CSS, and JavaScript

## Project Overview
This project demonstrates a simple user registration form with client-side validation using HTML, CSS, and JavaScript. The form validates user input before submission and displays appropriate error or success messages.

## Features
- User-friendly registration form
- Name validation (required field)
- Email format validation using Regular Expressions (Regex)
- Password validation (minimum 6 characters)
- Error messages for invalid inputs
- Success message for valid submission
- Prevents page refresh during validation using `event.preventDefault()`
- Responsive and clean user interface

## Technologies Used
- HTML
- CSS
- JavaScript 

## Project Structure

```
form-validation/
│── index.html
│── style.css
│── script.js
└── README.md
```

## Validation Rules

### Name
- Cannot be empty.

### Email
- Must be in a valid email format.
- Example:
  - ✅ user@example.com
  - ❌ userexample.com

### Password
- Must contain at least 6 characters.

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in any web browser.
4. Fill in the form and click **Submit**.

## Example Output

### Invalid Input
```
Name is required.
```

```
Please enter a valid email address.
```

```
Password must be at least 6 characters.
```

### Valid Input
```
Form submitted successfully!
```

## Future Improvements
- Confirm password validation
- Show/hide password feature
- Mobile number validation
- Strong password validation
- Store form data using Local Storage
- Connect the form to a backend database

## Author
**Humima Bibi**

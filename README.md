**Braveheart Viking's Phone Number Validator**
Welcome to Braveheart Viking's Phone Number Validator! This web application validates US phone numbers using a simple interface where users can input phone numbers and check if they are in a valid US format.


**Table of Contents**
- Features
- Technologies Used
- Getting Started
- Installation
- Usage
- User Stories
- Project Structure
- Contributing
- License


**Features**
- **Input Validation: **Users can input phone numbers in various formats (e.g., (555) 555-5555, 555-555-5555, 1 555-555-5555), and the application checks for validity against standard US phone number formats.
- **Clear Button:** Users can reset the input field and result by clicking the "Clear" button.
- **Error Handling:** The app provides an alert if the input is empty when the "Check" button is clicked.
- **Custom Navigation Bar:** A custom navigation bar was added for demonstration purposes.


**Technologies Used**
- HTML5: For the structure and layout of the page.
- CSS3: For styling the interface, including mobile responsiveness.
- JavaScript: For handling the phone number validation logic.


**Getting Started**
Follow these instructions to get a copy of the project running on your local machine.


**Installation**
**Clone the repository: **
git clone https://github.com/YourUsername/telephoneNumberValidator.git


**Navigate to the project directory:**
cd telephoneNumberValidator


**Open the project in a web browser:**
Open the index.html file directly in your web browser or serve it through a local server like Live Server in VS Code.


**Usage**
1) **Enter a phone number** in the input field.
2) **Click "Check"** to validate the number. If the number is valid, the result will display "Valid US number: (your number)".
3) **Click "Clear" **to reset the input field and clear the result.
4) **Validation formats supported:**
- 555-555-5555
- (555) 555-5555
- 1 555-555-5555
- 1 (555) 555-5555
- 5555555555
5) If the input does not match any of the valid formats, the result will display "Invalid US number".


**User Stories**
1) When you click on the "Check" button without entering a phone number, an alert should appear with the text "Please provide a phone number."
2) When you click on the "Clear" button, the content within the results-div element should be removed.
3) The following phone number formats are supported and considered valid US numbers:
- 1 555-555-5555
- 1 (555) 555-5555
- 5555555555
- 555-555-5555
- (555) 555-5555
4) Invalid formats are rejected with a clear message.


**Project Structure**
├── index.html         # Main HTML file for the user interface
├── styles.css         # Stylesheet for the project
├── script.js          # JavaScript for validation and event handling
└── README.md          # Project documentation (this file)


**Contributing**
If you wish to contribute to this project:
1) Fork the repository.
2) Create a new branch (git checkout -b feature-branch).
3) Make your changes and commit them (git commit -m 'Add new feature').
4) Push to the branch (git push origin feature-branch).
5) Create a Pull Request.


**License**
This project is licensed under the MIT License. See the LICENSE file for more details.

class Library {
    constructor(firstName, lastName, book) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.book = book;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setBook(book) {
        this.book = book;
    }

    fullDetails() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Book: ${this.book}`;
    }
}

const list = document.querySelector('ul');
const button = document.getElementById('add-entry-button');

button.addEventListener('click', () => {
    // Get input values when the button is clicked
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const book = document.getElementById('Book').value;

    // Create a new Library instance
    const libraryEntry = new Library(firstName, lastName, book);

    // Create list item elements
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = libraryEntry.fullDetails();
    listBtn.textContent = 'Delete';

    // Append elements
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    // Add delete functionality
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    //focus on the first name input

    document.getElementById('first_name').focus();
});

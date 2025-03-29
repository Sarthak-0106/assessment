document.addEventListener("DOMContentLoaded", () => {
    // Select the "Select All" checkbox element
    const selectAll = document.getElementById("select-all");
    // Get all individual checkboxes with the class "page-checkbox"
    const checkboxes = document.querySelectorAll(".page-checkbox");
    // Select the "Done" button element
    const doneButton = document.querySelector(".done-btn");
    // Select the message box element to display results
    const messageBox = document.getElementById("message");

    // Handle "Select All" checkbox change event
    selectAll.addEventListener("change", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAll.checked;
        });
    });

    // Handle individual checkbox change events
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            selectAll.checked = [...checkboxes].every(cb => cb.checked);
        });
    });

    // Handle "Done" button click event
    doneButton.addEventListener("click", () => {
        // Get a list of selected pages
        const selectedPages = [...checkboxes]
            .map((cb, index) => cb.checked ? `Page ${index + 1}` : null)
            .filter(page => page !== null);

        // Display appropriate message based on the selection
        if (selectAll.checked) {
            messageBox.textContent = "All pages selected!";
        } else if (selectedPages.length > 0) {
            messageBox.textContent = `Selected: ${selectedPages.join(", ")}`;
        } else {
            messageBox.textContent = "No pages selected.";
        }
    });
});

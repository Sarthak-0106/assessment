document.addEventListener("DOMContentLoaded", () => {
    const selectAll = document.getElementById("select-all");
    const checkboxes = document.querySelectorAll(".page-checkbox");

    selectAll.addEventListener("change", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAll.checked;
        });
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            selectAll.checked = [...checkboxes].every(cb => cb.checked);
        });
    });
});

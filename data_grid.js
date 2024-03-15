// Data set containing information about users
let dataSet = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    age: 28,
    country: "India",
  },
  {
    id: 2,
    name: "Rohan Patel",
    email: "rohan.patel@example.com",
    age: 35,
    country: "India",
  },
  {
    id: 3,
    name: "Aisha Kapoor",
    email: "aisha.kapoor@example.com",
    age: 22,
    country: "India",
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    age: 42,
    country: "India",
  },
  {
    id: 5,
    name: "Riya Mehta",
    email: "riya.mehta@example.com",
    age: 19,
    country: "India",
  },
  {
    id: 6,
    name: "Aman Khan",
    email: "aman.khan@example.com",
    age: 31,
    country: "India",
  },
  {
    id: 7,
    name: "Sita Devi",
    email: "sita.devi@example.com",
    age: 50,
    country: "India",
  },
  {
    id: 8,
    name: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    age: 25,
    country: "India",
  },
  {
    id: 9,
    name: "Neha Joshi",
    email: "neha.joshi@example.com",
    age: 38,
    country: "India",
  },
  {
    id: 10,
    name: "Arjun Das",
    email: "arjun.das@example.com",
    age: 45,
    country: "India",
  },
  {
    id: 11,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    age: 28,
    country: "India",
  },
  {
    id: 12,
    name: "Rohan Patel",
    email: "rohan.patel@example.com",
    age: 35,
    country: "India",
  },
  {
    id: 13,
    name: "Aisha Kapoor",
    email: "aisha.kapoor@example.com",
    age: 22,
    country: "India",
  },
  {
    id: 14,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    age: 42,
    country: "India",
  },
  {
    id: 15,
    name: "Riya Mehta",
    email: "riya.mehta@example.com",
    age: 19,
    country: "India",
  },
  {
    id: 16,
    name: "Aman Khan",
    email: "aman.khan@example.com",
    age: 31,
    country: "India",
  },
  {
    id: 17,
    name: "Sita Devi",
    email: "sita.devi@example.com",
    age: 50,
    country: "India",
  },
  {
    id: 18,
    name: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    age: 25,
    country: "India",
  },
  {
    id: 19,
    name: "Neha Joshi",
    email: "neha.joshi@example.com",
    age: 38,
    country: "India",
  },
  {
    id: 20,
    name: "Arjun Das",
    email: "arjun.das@example.com",
    age: 45,
    country: "India",
  },
  {
    id: 21,
    name: "Priyanka Gupta",
    email: "priyanka.gupta@example.com",
    age: 29,
    country: "India",
  },
  {
    id: 22,
    name: "Mihir Desai",
    email: "mihir.desai@example.com",
    age: 32,
    country: "India",
  },
  {
    id: 23,
    name: "Kiara Kaur",
    email: "kiara.kaur@example.com",
    age: 21,
    country: "India",
  },
  {
    id: 24,
    name: "Yash Malhotra",
    email: "yash.malhotra@example.com",
    age: 40,
    country: "India",
  },
  {
    id: 25,
    name: "Saanvi Patel",
    email: "saanvi.patel@example.com",
    age: 18,
    country: "India",
  },
  {
    id: 26,
    name: "Kabir Khan",
    email: "kabir.khan@example.com",
    age: 37,
    country: "India",
  },
  {
    id: 27,
    name: "Anjali Devi",
    email: "anjali.devi@example.com",
    age: 48,
    country: "India",
  },
  {
    id: 28,
    name: "Kavita Yadav",
    email: "kavita.yadav@example.com",
    age: 33,
    country: "India",
  },
  {
    id: 29,
    name: "Jay Shah",
    email: "jay.shah@example.com",
    age: 41,
    country: "Singapore",
  },
  {
    id: 30,
    name: "Laila Ahmed",
    email: "laila.ahmed@example.com",
    age: 26,
    country: "Egypt",
  },
  {
    id: 31,
    name: "Omar Hassan",
    email: "omar.hassan@example.com",
    age: 50,
    country: "United Kingdom",
  },
  {
    id: 32,
    name: "Elena Garcia",
    email: "elena.garcia@example.com",
    age: 47,
    country: "Spain",
  },
  {
    id: 33,
    name: "Chen Liu",
    email: "chen.liu@example.com",
    age: 38,
    country: "China",
  },
  {
    id: 34,
    name: "Mohamed Ali",
    email: "mohamed.ali@example.com",
    age: 22,
    country: "Morocco",
  },
  {
    id: 35,
    name: "Maria Sanchez",
    email: "maria.sanchez@example.com",
    age: 44,
    country: "Mexico",
  },
  {
    id: 36,
    name: "David Miller",
    email: "david.miller@example.com",
    age: 30,
    country: "Australia",
  },
  {
    id: 37,
    name: "Anna Schmidt",
    email: "anna.schmidt@example.com",
    age: 28,
    country: "Germany",
  },
  {
    id: 38,
    name: "Ibrahim Yusuf",
    email: "ibrahim.yusuf@example.com",
    age: 42,
    country: "Nigeria",
  },
  {
    id: 39,
    name: "Natalia Petrova",
    email: "natalia.petrova@example.com",
    age: 35,
    country: "Russia",
  },
  {
    id: 40,
    name: "Sophie Dubois",
    email: "sophie.dubois@example.com",
    age: 21,
    country: "France",
  },
  {
    id: 41,
    name: "Hiro Tanaka",
    email: "hiro.tanaka@example.com",
    age: 48,
    country: "Japan",
  },
  {
    id: 42,
    name: "Park Min-seo",
    email: "park.minseo@example.com",
    age: 39,
    country: "South Korea",
  },
  {
    id: 43,
    name: "Leila Santos",
    email: "leila.santos@example.com",
    age: 45,
    country: "Brazil",
  },
  {
    id: 44,
    name: "William Zhang",
    email: "william.zhang@example.com",
    age: 32,
    country: "China",
  },
  {
    id: 45,
    name: "Aisha Mohammed",
    email: "aisha.mohammed@example.com",
    age: 29,
    country: "Kenya",
  },
  {
    id: 46,
    name: "Daniel Garcia",
    email: "daniel.garcia@example.com",
    age: 40,
    country: "Spain",
  },
  {
    id: 47,
    name: "Emma Thompson",
    email: "emma.thompson@example.com",
    age: 37,
    country: "United Kingdom",
  },
  {
    id: 48,
    name: "Max Schmidt",
    email: "max.schmidt@example.com",
    age: 24,
    country: "Germany",
  },
  {
    id: 49,
    name: "Isabelle Dubois",
    email: "isabelle.dubois@example.com",
    age: 42,
    country: "France",
  },
  {
    id: 50,
    name: "Aleksandr Petrov",
    email: "aleksandr.petrov@example.com",
    age: 35,
    country: "Russia",
  },
];

const pageSize = 10; // Number of rows per page
let currentPage = 1; // Current page being displayed
let sortColumn = null; // Column index used for sorting
let sortOrder = "asc"; // Sorting order (asc or desc)

/**
 * Renders the table with given data.
 * @param {Array} pageData - Data to be displayed on the current page.
 */
function renderTable(pageData) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  pageData.forEach((rowData) => {
    const row = document.createElement("tr");
    Object.entries(rowData).forEach(([key, value]) => {
      const cell = document.createElement("td");
      if (key !== "id") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = value;
        input.classList.add("editable");
        input.addEventListener("change", (event) => {
          updateRow(rowData.id, key, event.target.value);
        });
        cell.appendChild(input);
      } else {
        cell.textContent = value;
      }
      row.appendChild(cell);
    });
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
      deleteRow(rowData.id);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
    tableBody.appendChild(row);
  });
  // Initialize resizable columns after rendering table
  new ResizeObserver(() => {
    const resizableColumns = document.querySelectorAll(".resizable-column");
    resizableColumns.forEach((column) => {
      column.style.width = column.offsetWidth + "px";
    });
  }).observe(document.getElementById("data-grid"));
}

/**
 * Updates the row with the given ID and key with the new value.
 * @param {number} id - ID of the row to be updated.
 * @param {string} key - Key of the property to be updated.
 * @param {any} value - New value to be assigned.
 */
function updateRow(id, key, value) {
  const index = dataSet.findIndex((item) => item.id === id);
  if (index !== -1) {
    dataSet[index][key] = value;
  }
}

/**
 * Sorts the table based on the clicked column index.
 * @param {number} columnIndex - Index of the column to sort.
 */
function sortTable(columnIndex) {
  if (columnIndex === sortColumn) {
    sortOrder = sortOrder === "asc" ? "desc" : "asc";
  } else {
    sortColumn = columnIndex;
    sortOrder = "asc";
  }
  dataSet.sort((a, b) => {
    const aValue = Object.values(a)[columnIndex];
    const bValue = Object.values(b)[columnIndex];
    if (typeof aValue === "number") {
      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    } else {
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
  });
  renderTable(getDataForPage());
  updateHeaderStyles(columnIndex);
}

/**
 * Updates the styles of the column headers based on the sorting order.
 * @param {number} columnIndex - Index of the column to update styles.
 */
function updateHeaderStyles(columnIndex) {
  const headers = document.querySelectorAll("th");
  headers.forEach((header, index) => {
    if (index === columnIndex) {
      header.classList.remove("sorted-asc", "sorted-desc");
      if (sortOrder === "asc") {
        header.classList.add("sorted-asc");
      } else {
        header.classList.add("sorted-desc");
      }
    } else {
      header.classList.remove("sorted-asc", "sorted-desc");
    }
  });
}

//Searches the data set based on the search input provided by the user.
function searchData() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredData = dataSet.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm)
    )
  );
  renderTable(filteredData);
}

//Adds a new row to the data set with default values.
function addRow() {
  const newRow = {
    id: dataSet.length + 1,
    name: "New User",
    email: "new@example.com",
    age: 18,
    country: "Unknown",
  };
  dataSet.push(newRow);
  renderTable(getDataForPage());
  renderPagination();
}

/**
 * Deletes the row with the given ID from the data set.
 * @param {number} id - ID of the row to be deleted.
 */
function deleteRow(id) {
  dataSet = dataSet.filter((item) => item.id !== id);
  renderTable(getDataForPage());
  renderPagination();
}

/**
 * Exports the data in the specified format (csv or json).
 * @param {string} format - Format in which the data should be exported.
 */
function exportData(format) {
  let data, filename;
  if (format === "csv") {
    data =
      "data:text/csv;charset=utf-8," +
      dataSet.map((row) => Object.values(row).join(",")).join("\n");
    filename = "data.csv";
  } else if (format === "json") {
    data = "data:text/json;charset=utf-8," + JSON.stringify(dataSet, null, 2);
    filename = "data.json";
  }
  const encodedUri = encodeURI(data);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
}

/**
 * Imports data from the uploaded file.
 * @param {Event} event - File input change event containing the uploaded file.
 */
function importData(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    try {
      const importedData = JSON.parse(content);
      if (Array.isArray(importedData)) {
        dataSet = importedData;
        renderTable(getDataForPage());
        renderPagination();
      } else {
        throw new Error("Invalid file format.");
      }
    } catch (error) {
      alert("Error importing data: " + error.message);
    }
  };
  reader.readAsText(file);
}

/**
 * Retrieves the data for the current page from the data set.
 * @returns {Array} - Data to be displayed on the current page.
 */
function getDataForPage() {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return dataSet.slice(startIndex, endIndex);
}

//Renders pagination controls based on the current page and data set size.
function renderPagination() {
  const totalPages = Math.ceil(dataSet.length / pageSize);
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    if (i === currentPage) {
      li.classList.add("active");
    }
    li.addEventListener("click", () => {
      currentPage = i;
      renderTable(getDataForPage());
      renderPagination();
    });
    paginationElement.appendChild(li);
  }
}

// Initial rendering
renderTable(getDataForPage());
renderPagination();

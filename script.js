// Example chart for Sales Trends
var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 5, 7, 9, 10, 15, 20],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example chart for Reports
var ctx2 = document.getElementById('reportsChart').getContext('2d');
var reportsChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Production vs Sales',
            data: [10, 15, 5, 8, 3, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function handleLogin() {
    const adminId = document.getElementById('admin_id').value;
    const password = document.getElementById('password').value;

    // Simple validation for demonstration purposes
    if (adminId === 'admin' && password === 'zyberly') {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        return false; // Prevent form submission
    } else {
        alert('Invalid Admin ID or Password');
        return false; // Prevent form submission
    }
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Show a green pop-up message
    if (sectionId !== 'register') {
        alert(`You have navigated to the ${sectionId} section.`);
    }
}

function validateForm() {
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{8,12}$/;
    const addressPattern = /^[a-zA-Z0-9\s,.-]+$/;
    const pincodePattern = /^\d{6}$/;

    const customerName = document.getElementById('customer_name').value;
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact_number').value;
    const contactPerson = document.getElementById('contact_person').value;
    const alternateContactNumber = document.getElementById('alternate_contact_number').value;
    const address = document.getElementById('address').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const pincode = document.getElementById('pincode').value;

    if (!namePattern.test(customerName) || !namePattern.test(firstName) || !namePattern.test(lastName) || !namePattern.test(contactPerson) || !namePattern.test(state) || !namePattern.test(city)) {
        alert('Names, state, and city should only contain letters and spaces.');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Email must be a valid email address and contain @ and . symbols. NO OTHER SPECIAL CHARACTERS');
        return false;
    }

    if (!phonePattern.test(contactNumber) || (alternateContactNumber && !phonePattern.test(alternateContactNumber))) {
        alert('Phone numbers must be 8, 10, or 12 digits.');
        return false;
    }

    if (!addressPattern.test(address)) {
        alert('Address can contain letters, numbers, and certain symbols (, . -).');
        return false;
    }

    if (!pincodePattern.test(pincode)) {
        alert('Pincode must be 6 digits.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function createSalesChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales Growth',
                data: [10, 20, 30, 40, 50, 60], // Example data showing growth
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                borderColor: 'rgba(0, 128, 128, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4 // Smooth the line
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales (in units)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

// Call the function to create the chart when the page loads
window.onload = function() {
    createSalesChart();
    // Ensure the main content is shown if already logged in
    if (document.getElementById('main-content').style.display === 'block') {
        showSection('dashboard');
    }
};

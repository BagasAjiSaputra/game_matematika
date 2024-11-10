export function initializeNavbarAlerts() {
    document.addEventListener("DOMContentLoaded", function () {
        const navbarButtons = document.querySelectorAll('button');

        navbarButtons.forEach(button => {
            // Cek apakah id tombol bukan 'hamburg'
            if (button.id !== 'hamburg') {
                button.addEventListener('click', function (event) {
                    event.preventDefault(); 
                    Swal.fire({
                        title: 'Under Development',
                        text: 'This feature is currently under development.',
                        icon: 'info',
                        confirmButtonText: 'OK',
                    });
                });
            }
        });
    });
}

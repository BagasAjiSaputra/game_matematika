// Ambil tombol "ubah"
const ubahButton = document.querySelector('.ubah'); // Use querySelector for a single element

// Tambahkan event listener klik sekali pada tombol "ubah"
ubahButton.addEventListener('click', function(event) {
    event.currentTarget.removeEventListener(event.type, arguments.callee);
    const hlgButtons = document.querySelectorAll('.hlg'); // Ambil semua elemen dengan kelas 'hlg'

    // Toggle display dari setiap tombol 'hlg'
    hlgButtons.forEach(function(button) {
        button.style.display = button.style.display === 'none' ? '' : 'none';
    });

    // Ambil div kedua
    const divKedua = document.querySelector('.balok > div:nth-child(2)');

    // Pindahkan tombol "ubah" ke div kedua
    divKedua.appendChild(ubahButton.parentNode.removeChild(ubahButton));
    alert('behasil di klik')
}, { once: true }); // Listen for the event only once



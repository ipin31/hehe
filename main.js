onload = () =>{
        document.body.classList.remove("container");
};

// main.js

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('triggerButton');
    const birthdayMessage = document.querySelector('.birthday-message');
    const replyButton = document.getElementById('replyButton');

    // Waktu delay sesuai durasi animasi bunga (misalnya 5 detik)
    const animationDuration = 5000; // dalam milidetik (5000ms = 5 detik)

    // Menampilkan tombol setelah animasi selesai
    setTimeout(() => {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
    }, animationDuration);

    button.addEventListener('click', () => {
        // Tampilkan pesan ulang tahun
        birthdayMessage.classList.add('show');
        
        // Hapus tombol
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
    });

    replyButton.addEventListener('click', () => {
        // Mengarahkan ke link saat tombol balas pesan diklik
        window.location.href = 'https://www.instagram.com/direct/t/17851088756715784/';
    });

});




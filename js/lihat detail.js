document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua tombol 'Lihat Detail'
    const buttons = document.querySelectorAll('.btn[data-paket]');
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('x');


const paketDetails = {
    umroh: {
        title: "Umroh Reguler",
        description: `
            <ul>
                <li>Tiket pesawat kelas ekonomi (PP Jakarta - Jeddah/Madinah): Rp 8 juta.</li>
                <li>Akomodasi hotel bintang 4 (10 malam): Rp 10 juta.</li>
                <li>Visa umroh: Rp 2 juta.</li>
                <li>Transportasi bus AC lokal: Rp 1 juta.</li>
                <li>Makan 3 kali sehari dan air zam-zam: Rp 1 juta.</li>
                <li>Bimbingan ibadah oleh pembimbing berpengalaman: Rp 1 juta.</li>
                <li>Asuransi perjalanan: Rp 500 ribu.</li>
            </ul>
            <span class="total-harga">Total Harga: Rp 23,5 juta</span>
        `,
    },
    haji: {
        title: "Haji Plus",
        description: `
            <ul>
                <li>Tiket pesawat kelas bisnis (PP Jakarta - Jeddah/Madinah): Rp 20 juta.</li>
                <li>Akomodasi hotel premium dekat Masjidil Haram (25 malam): Rp 60 juta.</li>
                <li>Visa haji khusus: Rp 5 juta.</li>
                <li>Transportasi VIP selama perjalanan: Rp 5 juta.</li>
                <li>Layanan makan buffet 3 kali sehari: Rp 5 juta.</li>
                <li>Pembimbing ibadah eksklusif selama 24 jam: Rp 3 juta.</li>
                <li>Asuransi perjalanan premium: Rp 2 juta.</li>
                <li>Biaya tambahan fasilitas tenda ber-AC di Arafah dan Mina: Rp 10 juta.</li>
            </ul>
                <span class="total-harga">Total Harga: Rp 110 juta</span>
             `,
    }
};




    // Event untuk membuka modal
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const paket = button.dataset.paket;
            const detail = paketDetails[paket];
    
            // Isi konten modal
            modalTitle.textContent = detail.title; // Gunakan textContent untuk judul
            modalDescription.innerHTML = detail.description; // Gunakan innerHTML untuk deskripsi
    
            // Tampilkan modal
            modal.classList.add('visible');
        });
    });
    

    // Event untuk menutup modal
    closeModal.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah navigasi jika close adalah link
        modal.classList.remove('visible');
    });
});

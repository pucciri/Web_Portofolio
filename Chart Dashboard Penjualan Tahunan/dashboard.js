// ... existing code ...

// Inisialisasi grafik penjualan
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'bar', // Tipe grafik
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Penjualan',
            data: [12000000, 15000000, 18000000, 20000000, 22000000, 25000000, 30000000, 28000000, 32000000, 35000000, 40000000, 45000000],
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

// Inisialisasi grafik distribusi pengguna
const usersCtx = document.getElementById('usersChart').getContext('2d');
const usersChart = new Chart(usersCtx, {
    type: 'pie', // Tipe grafik
    data: {
        labels: ['Pengguna Aktif', 'Pengguna Tidak Aktif'],
        datasets: [{
            label: 'Distribusi Pengguna',
            data: [70, 30], // Persentase pengguna aktif dan tidak aktif
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Distribusi Pengguna'
            }
        }
    }
});

const yearlyRevenueCtx = document.getElementById('yearlyRevenueChart').getContext('2d');
const yearlyRevenueChart = new Chart(yearlyRevenueCtx, {
    type: 'line', // Tipe grafik
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Pendapatan Tahunan',
            data: [12000000, 15000000, 18000000, 20000000, 22000000, 25000000, 30000000, 28000000, 32000000, 35000000, 40000000, 45000000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pendapatan Tahunan'
            }
        }
    }
});

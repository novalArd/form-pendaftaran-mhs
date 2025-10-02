// Inisialisasi variabel global
let currentStep = 1;
const totalSteps = 5;

// DOM Elements
const formSteps = document.querySelectorAll('.form-step');
const stepItems = document.querySelectorAll('.step-item');
const nextButtons = document.querySelectorAll('.btn-next');
const backButtons = document.querySelectorAll('.btn-back');
const submitButton = document.getElementById('submitBtn');
const showDataBtn = document.getElementById('showDataBtn');
const backToFormBtn = document.getElementById('backToFormBtn');
const resetBtn = document.getElementById('resetBtn');
const formContainer = document.querySelector('.form-container');
const dataDisplay = document.getElementById('dataDisplay');
const nomorPendaftaranInput = document.getElementById('nomorPendaftaran');

// Fungsi untuk generate nomor pendaftaran acak
function generateNomorPendaftaran() {
    const prefix = 'PMB';
    const year = new Date().getFullYear();
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}${year}${randomNum}`;
}

// Fungsi untuk menyimpan data ke localStorage
function saveFormData() {
    const formData = {
        // Data Pribadi
        nama: document.getElementById('nama').value,
        jenisKelamin: document.querySelector('input[name="jenisKelamin"]:checked')?.value || '',
        tempatLahir: document.getElementById('tempatLahir').value,
        tanggalLahir: document.getElementById('tanggalLahir').value,
        agama: document.getElementById('agama').value,
        kewarganegaraan: document.getElementById('kewarganegaraan').value,
        alamatDomisili: document.getElementById('alamatDomisili').value,
        alamatAsal: document.getElementById('alamatAsal').value,
        telepon: document.getElementById('telepon').value,
        email: document.getElementById('email').value,
        
        // Data Orang Tua
        namaOrtu: document.getElementById('namaOrtu').value,
        pekerjaanOrtu: document.getElementById('pekerjaanOrtu').value,
        pendidikanOrtu: document.getElementById('pendidikanOrtu').value,
        alamatOrtu: document.getElementById('alamatOrtu').value,
        kontakOrtu: document.getElementById('kontakOrtu').value,
        ktpOrtu: document.getElementById('ktpOrtu').value,
        gajiOrtu: document.getElementById('gajiOrtu').value,
        
        // Data Akademik
        asalSekolah: document.getElementById('asalSekolah').value,
        nomorIjazah: document.getElementById('nomorIjazah').value,
        nilai: document.getElementById('nilai').value,
        programStudi: document.getElementById('programStudi').value,
        jurusan: document.getElementById('jurusan').value,
        jalurPenerimaan: document.querySelector('input[name="jalurPenerimaan"]:checked')?.value || '',
        
        // Data Administratif
        nomorPendaftaran: document.getElementById('nomorPendaftaran').value,
        pernyataan: document.getElementById('pernyataan').checked,
        persetujuanOrtu: document.getElementById('persetujuanOrtu').checked,
        beasiswa: document.getElementById('beasiswa').value
    };
    
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Fungsi untuk memuat data dari localStorage
function loadFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        // Data Pribadi
        document.getElementById('nama').value = formData.nama || '';
        if (formData.jenisKelamin) {
            document.querySelector(`input[name="jenisKelamin"][value="${formData.jenisKelamin}"]`).checked = true;
        }
        document.getElementById('tempatLahir').value = formData.tempatLahir || '';
        document.getElementById('tanggalLahir').value = formData.tanggalLahir || '';
        document.getElementById('agama').value = formData.agama || '';
        document.getElementById('kewarganegaraan').value = formData.kewarganegaraan || '';
        document.getElementById('alamatDomisili').value = formData.alamatDomisili || '';
        document.getElementById('alamatAsal').value = formData.alamatAsal || '';
        document.getElementById('telepon').value = formData.telepon || '';
        document.getElementById('email').value = formData.email || '';
        
        // Data Orang Tua
        document.getElementById('namaOrtu').value = formData.namaOrtu || '';
        document.getElementById('pekerjaanOrtu').value = formData.pekerjaanOrtu || '';
        document.getElementById('pendidikanOrtu').value = formData.pendidikanOrtu || '';
        document.getElementById('alamatOrtu').value = formData.alamatOrtu || '';
        document.getElementById('kontakOrtu').value = formData.kontakOrtu || '';
        document.getElementById('ktpOrtu').value = formData.ktpOrtu || '';
        document.getElementById('gajiOrtu').value = formData.gajiOrtu || '';
        
        // Data Akademik
        document.getElementById('asalSekolah').value = formData.asalSekolah || '';
        document.getElementById('nomorIjazah').value = formData.nomorIjazah || '';
        document.getElementById('nilai').value = formData.nilai || '';
        document.getElementById('programStudi').value = formData.programStudi || '';
        document.getElementById('jurusan').value = formData.jurusan || '';
        if (formData.jalurPenerimaan) {
            document.querySelector(`input[name="jalurPenerimaan"][value="${formData.jalurPenerimaan}"]`).checked = true;
        }
        
        // Data Administratif
        document.getElementById('nomorPendaftaran').value = formData.nomorPendaftaran || generateNomorPendaftaran();
        document.getElementById('pernyataan').checked = formData.pernyataan || false;
        document.getElementById('persetujuanOrtu').checked = formData.persetujuanOrtu || false;
        document.getElementById('beasiswa').value = formData.beasiswa || '';
    } else {
        // Generate nomor pendaftaran
        document.getElementById('nomorPendaftaran').value = generateNomorPendaftaran();
    }
}

// Fungsi untuk menampilkan data di halaman data display
function displayFormData() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        // Data Pribadi
        document.getElementById('displayNama').textContent = formData.nama || '-';
        document.getElementById('displayJenisKelamin').textContent = formData.jenisKelamin || '-';
        document.getElementById('displayTtl').textContent = `${formData.tempatLahir || '-'}, ${formData.tanggalLahir || '-'}`;
        document.getElementById('displayAgama').textContent = formData.agama || '-';
        document.getElementById('displayKewarganegaraan').textContent = formData.kewarganegaraan || '-';
        document.getElementById('displayAlamatDomisili').textContent = formData.alamatDomisili || '-';
        document.getElementById('displayAlamatAsal').textContent = formData.alamatAsal || '-';
        document.getElementById('displayTelepon').textContent = formData.telepon || '-';
        document.getElementById('displayEmail').textContent = formData.email || '-';
        
        // Data Orang Tua
        document.getElementById('displayNamaOrtu').textContent = formData.namaOrtu || '-';
        document.getElementById('displayPekerjaanOrtu').textContent = formData.pekerjaanOrtu || '-';
        document.getElementById('displayPendidikanOrtu').textContent = formData.pendidikanOrtu || '-';
        document.getElementById('displayAlamatOrtu').textContent = formData.alamatOrtu || '-';
        document.getElementById('displayKontakOrtu').textContent = formData.kontakOrtu || '-';
        document.getElementById('displayKtpOrtu').textContent = formData.ktpOrtu || '-';
        document.getElementById('displayGajiOrtu').textContent = formData.gajiOrtu || '-'
        
        // Data Akademik
        document.getElementById('displayAsalSekolah').textContent = formData.asalSekolah || '-';
        document.getElementById('displayNomorIjazah').textContent = formData.nomorIjazah || '-';
        document.getElementById('displayNilai').textContent = formData.nilai || '-';
        document.getElementById('displayProgramStudi').textContent = formData.programStudi || '-';
        document.getElementById('displayJurusan').textContent = formData.jurusan || '-';
        document.getElementById('displayJalurPenerimaan').textContent = formData.jalurPenerimaan || '-';
        
        // Data Administratif
        document.getElementById('displayNomorPendaftaran').textContent = formData.nomorPendaftaran || '-';
        document.getElementById('displayPernyataan').textContent = formData.pernyataan ? 'Ya' : 'Tidak';
        document.getElementById('displayPersetujuanOrtu').textContent = formData.persetujuanOrtu ? 'Ya' : 'Tidak';
        document.getElementById('displayBeasiswa').textContent = formData.beasiswa || '-';
    }
}

// Fungsi untuk berpindah step
function goToStep(step) {
    // validasi step
    if (step > currentStep && !validateStep(currentStep)) {
        return;
    }
    
    // Simpan data sebelum pindah step
    saveFormData();
    
    // Generate nomor pendaftaran
    if (step === 5 && !document.getElementById('nomorPendaftaran').value) {
        document.getElementById('nomorPendaftaran').value = generateNomorPendaftaran();
        saveFormData();
    }
    
    // Sembunyikan step aktif
    formSteps.forEach(formStep => {
        formStep.classList.remove('active');
    });
    
    // Tampilkan step baru
    document.getElementById(`step${step}`).classList.add('active');
    
    // Update sidebar
    stepItems.forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.step) === step) {
            item.classList.add('active');
        }
    });
    
    currentStep = step;
}

// Fungsi untuk validasi step
function validateStep(step) {
    let isValid = true;
    
    switch(step) {
        case 1:
            const nama = document.getElementById('nama');
            const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
            const tempatLahir = document.getElementById('tempatLahir');
            const tanggalLahir = document.getElementById('tanggalLahir');
            const agama = document.getElementById('agama');
            const alamatDomisili = document.getElementById('alamatDomisili');
            const telepon = document.getElementById('telepon');
            const email = document.getElementById('email');
            
            if (!nama.value) {
                alert('Nama lengkap harus diisi');
                nama.focus();
                isValid = false;
            } else if (!jenisKelamin) {
                alert('Jenis kelamin harus dipilih');
                isValid = false;
            } else if (!tempatLahir.value) {
                alert('Tempat lahir harus diisi');
                tempatLahir.focus();
                isValid = false;
            } else if (!tanggalLahir.value) {
                alert('Tanggal lahir harus diisi');
                tanggalLahir.focus();
                isValid = false;
            } else if (!agama.value) {
                alert('Agama harus dipilih');
                agama.focus();
                isValid = false;
            } else if (!alamatDomisili.value) {
                alert('Alamat domisili harus diisi');
                alamatDomisili.focus();
                isValid = false;
            } else if (!telepon.value) {
                alert('Nomor telepon harus diisi');
                telepon.focus();
                isValid = false;
            } else if (!email.value) {
                alert('Email harus diisi');
                email.focus();
                isValid = false;
            }
            break;
            
        case 2:
            const namaOrtu = document.getElementById('namaOrtu');
            const pekerjaanOrtu = document.getElementById('pekerjaanOrtu');
            const pendidikanOrtu = document.getElementById('pendidikanOrtu');
            const alamatOrtu = document.getElementById('alamatOrtu');
            const kontakOrtu = document.getElementById('kontakOrtu');
            const gajiOrtu = document.getElementById('gajiOrtu');
            
            if (!namaOrtu.value) {
                alert('Nama orang tua/wali harus diisi');
                namaOrtu.focus();
                isValid = false;
            } else if (!pekerjaanOrtu.value) {
                alert('Pekerjaan orang tua harus diisi');
                pekerjaanOrtu.focus();
                isValid = false;
            } else if (!pendidikanOrtu.value) {
                alert('Pendidikan orang tua harus dipilih');
                pendidikanOrtu.focus();
                isValid = false;
            } else if (!gajiOrtu.value) {
                alert('Gaji Orang Tua Harus diisi');
                gajiOrtu.focus();
                isValid = false;
            } else if (!alamatOrtu.value) {
                alert('Alamat orang tua harus diisi');
                alamatOrtu.focus();
                isValid = false;
            } else if (!kontakOrtu.value) {
                alert('Kontak orang tua harus diisi');
                kontakOrtu.focus();
                isValid = false;
            }
            break;
            
        case 3:
            const asalSekolah = document.getElementById('asalSekolah');
            const nomorIjazah = document.getElementById('nomorIjazah');
            const nilai = document.getElementById('nilai');
            const programStudi = document.getElementById('programStudi');
            const jurusan = document.getElementById('jurusan');
            const jalurPenerimaan = document.querySelector('input[name="jalurPenerimaan"]:checked');
            
            if (!asalSekolah.value) {
                alert('Asal sekolah harus diisi');
                asalSekolah.focus();
                isValid = false;
            } else if (!nomorIjazah.value) {
                alert('Nomor ijazah/NISN harus diisi');
                nomorIjazah.focus();
                isValid = false;
            } else if (!nilai.value) {
                alert('Nilai harus diisi');
                nilai.focus();
                isValid = false;
            } else if (!programStudi.value) {
                alert('Program studi harus dipilih');
                programStudi.focus();
                isValid = false;
            } else if (!jurusan.value) {
                alert('Jurusan harus dipilih');
                jurusan.focus();
                isValid = false;
            } else if (!jalurPenerimaan) {
                alert('Jalur penerimaan harus dipilih');
                isValid = false;
            }
            break;
            
        case 4:
            const ijazah = document.getElementById('ijazah');
            const ktp = document.getElementById('ktp');
            const foto = document.getElementById('foto');
            const buktiBayar = document.getElementById('buktiBayar');
            
            if (!ijazah.value) {
                alert('Scan ijazah harus diupload');
                ijazah.focus();
                isValid = false;
            } else if (!ktp.value) {
                alert('Scan KTP/Kartu Pelajar harus diupload');
                ktp.focus();
                isValid = false;
            } else if (!foto.value) {
                alert('Foto formal harus diupload');
                foto.focus();
                isValid = false;
            } else if (!buktiBayar.value) {
                alert('Bukti pembayaran harus diupload');
                buktiBayar.focus();
                isValid = false;
            }
            break;
            
        case 5:
            const pernyataan = document.getElementById('pernyataan');
            
            if (!pernyataan.checked) {
                alert('Anda harus menyetujui pernyataan kesesuaian data');
                pernyataan.focus();
                isValid = false;
            }
            break;
    }
    
    return isValid;
}

// Fungsi untuk reset form
function resetForm() {
    if (confirm('Apakah Anda yakin ingin mereset semua data form? Data yang sudah diisi akan hilang.')) {
        // Hapus data dari localStorage
        localStorage.removeItem('formData');
        
        // Reset semua input form
        document.querySelectorAll('input, select, textarea').forEach(input => {
            if (input.type === 'text' || input.type === 'email' || input.type === 'tel' || input.type === 'number') {
                input.value = '';
            } else if (input.type === 'radio' || input.type === 'checkbox') {
                input.checked = false;
            } else if (input.type === 'file') {
                input.value = '';
            } else if (input.tagName === 'SELECT') {
                input.selectedIndex = 0;
            } else if (input.tagName === 'TEXTAREA') {
                input.value = '';
            }
        });
        
        // Set default value untuk kewarganegaraan
        document.getElementById('kewarganegaraan').value = 'Indonesia';
        
        // Generate nomor pendaftaran baru
        document.getElementById('nomorPendaftaran').value = generateNomorPendaftaran();
        
        // Kembali ke step 1
        goToStep(1);
        
        alert('Form telah direset!');
    }
}

// Fungsi untuk menampilkan halaman data
function showDataPage() {
    formContainer.style.display = 'none';
    dataDisplay.classList.add('active');
    displayFormData();
}

// Fungsi untuk kembali ke form
function backToForm() {
    dataDisplay.classList.remove('active');
    formContainer.style.display = 'block';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load data dari localStorage saat halaman dimuat
    loadFormData();
    
    // Event listener untuk tombol next
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            goToStep(nextStep);
        });
    });
    
    // Event listener untuk tombol back
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            goToStep(prevStep);
        });
    });
    
    // Event listener untuk submit
    submitButton.addEventListener('click', function() {
        if (validateStep(5)) {
            saveFormData();
            alert('Pendaftaran berhasil disimpan!');
            showDataPage();
        }
    });
    
    // Event listener untuk tombol reset
    resetBtn.addEventListener('click', resetForm);
    
    // Event listener untuk tombol tampilkan data
    showDataBtn.addEventListener('click', showDataPage);
    
    // Event listener untuk tombol kembali ke form
    backToFormBtn.addEventListener('click', backToForm);
    
    // Event listener untuk klik step di sidebar
    stepItems.forEach(item => {
        item.addEventListener('click', function() {
            const step = parseInt(this.dataset.step);
            if (step <= currentStep) {
                goToStep(step);
            }
        });
    });
    
    // Auto-save saat input berubah
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('change', saveFormData);
    });
});
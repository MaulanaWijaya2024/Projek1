const bukuList = document.getElementById('buku-list');
let bukuData = [];

function tambahBuku() {
  const judul = document.getElementById('judul').value;
  const penulis = document.getElementById('penulis').value;   

  const tahun = document.getElementById('tahun').value;   

  const genre = document.getElementById('genre').value;

  const bukuBaru = {
    judul,
    penulis,
    tahun,
    genre
  };
  bukuData.push(bukuBaru);

  tampilkanBuku();
}

function tampilkanBuku() {
  bukuList.innerHTML = '';
  bukuData.forEach(buku => {
    const li = document.createElement('li');
    li.textContent = `${buku.judul} - ${buku.penulis} (${buku.tahun}) - ${buku.genre}`;
    bukuList.appendChild(li);
  });
}
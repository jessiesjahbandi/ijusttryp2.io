function Iya() {
    document.getElementById("judul").innerText = "Anda Berbohong!";
    document.getElementById("image").src = "./Assets/image 3.png";
    document.getElementById("text-id").innerText = "Anda adalah seorang Teknisi";
    document.getElementById("content-id").style.backgroundColor = "#E12E2E";
    document.getElementById("iya-id").style.backgroundColor = "transparent";
    document.getElementById("tidak-id").style.backgroundColor = "transparent";
    document.getElementById("iya-id").style.display = "none";
    document.getElementById("tidak-id").style.display = "none";
    document.getElementById("text-id").style.marginBottom = "45px";
    document.getElementById("btn-id").style.marginBottom = "45px";
}
function Tidak() {
    document.getElementById("judul").innerText = "Anda Benar!";
    document.getElementById("image").src = "./Assets/image 2.png";
    document.getElementById("text-id").innerText = "Anda adalah seorang Mahasiswa";
    document.getElementById("content-id").style.backgroundColor = "#6FD240";
    document.getElementById("iya-id").style.backgroundColor = "transparent";
    document.getElementById("tidak-id").style.backgroundColor = "transparent";
    document.getElementById("iya-id").style.display = "none";
    document.getElementById("tidak-id").style.display = "none";
    document.getElementById("text-id").style.marginBottom = "45px";
    document.getElementById("btn-id").style.marginBottom = "45px";
}
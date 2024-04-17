<?php
$host = "localhost"; // atau alamat IP server database Anda
$username = "root"; // username untuk mengakses database
$password = ""; // password untuk mengakses database
$dbname = "kelas_a_1046"; // nama database

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo ""; 
} catch(PDOException $e) {
    echo "Koneksi gagal: " . $e->getMessage();
}
<?php
// Database configuration for Neon
define('DB_HOST', 'ep-delicate-forest-a1v6e04b-pooler.ap-southeast-1.aws.neon.tech');
define('DB_NAME', 'hardware-lab-system');
define('DB_USER', 'neondb_owner');
define('DB_PASS', 'npg_Y2tFAmudPp0Q');
define('DB_PORT', '5432');
define('DB_SSL', 'require');

try {
    $dsn = "pgsql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";sslmode=" . DB_SSL;
    $pdo = new PDO($dsn, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Start session
session_start();

// Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

// Redirect if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        header("Location: /login.php");
        exit();
    }
}
?>
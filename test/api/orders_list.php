<?php
require __DIR__.'/../src/db.php';
require __DIR__.'/../src/util.php';

$status = $_GET['status'] ?? 'pending'; // pending/confirmed/paid
try {
  $pdo = pdo();
  $stm = $pdo->prepare("
    SELECT o.id, o.table_id, t.name AS table_name, o.status, o.created_at,
      (SELECT COALESCE(SUM(qty*price),0) FROM order_items WHERE order_id=o.id) AS total
    FROM orders o
    JOIN tables t ON t.id=o.table_id
    WHERE o.status=?
    ORDER BY o.created_at DESC
  ");
  $stm->execute([$status]);
  json_out(['ok'=>true, 'orders'=>$stm->fetchAll()]);
} catch (Throwable $e) {
  json_out(['ok'=>false,'message'=>'Server error'], 500);
}

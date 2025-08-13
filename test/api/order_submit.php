<?php
require __DIR__.'/../src/db.php';
require __DIR__.'/../src/util.php';

$in = json_input();
$orderId = (int)($in['order_id'] ?? 0);
if ($orderId<=0) json_out(['ok'=>false,'message'=>'Thiếu order_id'], 400);

try {
  $pdo = pdo();
  // Xác nhận chỉ khi có ít nhất 1 dòng
  $cnt = $pdo->prepare("SELECT COUNT(*) FROM order_items WHERE order_id=?");
  $cnt->execute([$orderId]);
  if ((int)$cnt->fetchColumn() === 0) json_out(['ok'=>false,'message'=>'Đơn trống'], 400);

  $upd = $pdo->prepare("UPDATE orders SET status='confirmed' WHERE id=? AND status='pending'");
  $upd->execute([$orderId]);

  json_out(['ok'=>true]);
} catch (Throwable $e) {
  json_out(['ok'=>false,'message'=>'Server error'], 500);
}

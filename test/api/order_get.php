<?php
require __DIR__.'/../src/db.php';
require __DIR__.'/../src/util.php';

$orderId = (int)($_GET['order_id'] ?? 0);
if ($orderId<=0) json_out(['ok'=>false,'message'=>'Thiếu order_id'], 400);

try {
  $pdo = pdo();
  $order = $pdo->prepare("SELECT id, table_id, status, created_at FROM orders WHERE id=?");
  $order->execute([$orderId]);
  $ord = $order->fetch();
  if (!$ord) json_out(['ok'=>false,'message'=>'Không tìm thấy đơn'], 404);

  $items = $pdo->prepare("
    SELECT oi.id, oi.item_id, m.name, oi.qty, oi.price, (oi.qty*oi.price) as total
    FROM order_items oi JOIN menu_items m ON m.id=oi.item_id
    WHERE oi.order_id=? ORDER BY oi.id DESC
  ");
  $items->execute([$orderId]);
  $rows = $items->fetchAll();

  $total = array_sum(array_column($rows,'total')) ?: 0;

  json_out(['ok'=>true, 'order'=>$ord, 'items'=>$rows, 'order_total'=>$total]);
} catch (Throwable $e) {
  json_out(['ok'=>false,'message'=>'Server error'], 500);
}

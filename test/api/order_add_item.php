<?php
require __DIR__.'/../src/db.php';
require __DIR__.'/../src/util.php';

$in = json_input();
$orderId = (int)($in['order_id'] ?? 0);
$itemId  = (int)($in['item_id'] ?? 0);
$qty     = max(1, (int)($in['qty'] ?? 1));

if ($orderId<=0 || $itemId<=0) json_out(['ok'=>false,'message'=>'Thiếu order_id/item_id'], 400);

try {
  $pdo = pdo();

  // Kiểm tra đơn còn pending
  $stm = $pdo->prepare("SELECT status FROM orders WHERE id=?");
  $stm->execute([$orderId]);
  $status = $stm->fetchColumn();
  if ($status!=='pending') json_out(['ok'=>false,'message'=>'Đơn không còn mở'], 400);

  // Lấy giá món hiện tại
  $stm = $pdo->prepare("SELECT price FROM menu_items WHERE id=? AND is_active=1");
  $stm->execute([$itemId]);
  $price = $stm->fetchColumn();
  if ($price===false) json_out(['ok'=>false,'message'=>'Món không tồn tại'], 404);

  // Ghi dòng
  $ins = $pdo->prepare("INSERT INTO order_items(order_id,item_id,qty,price) VALUES (?,?,?,?)");
  $ins->execute([$orderId, $itemId, $qty, $price]);

  // Tính tổng
  $sum = $pdo->prepare("SELECT SUM(qty*price) FROM order_items WHERE order_id=?");
  $sum->execute([$orderId]);
  $orderTotal = (int)$sum->fetchColumn();

  json_out(['ok'=>true, 'order_total'=>$orderTotal]);
} catch (Throwable $e) {
  json_out(['ok'=>false, 'message'=>'Server error'], 500);
}

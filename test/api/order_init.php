<?php
require __DIR__.'/../src/db.php';
require __DIR__.'/../src/util.php';

$input = $_GET + json_input(); // nhận JSON hoặc query
$code  = $input['code'] ?? null;   // QR theo code
$table = isset($input['table_id']) ? (int)$input['table_id'] : null; // nếu bạn dùng ?table=ID

try {
  $pdo = pdo();

  if ($code) {
    $stm = $pdo->prepare("SELECT table_id FROM table_tokens WHERE code=? AND is_active=1");
    $stm->execute([$code]);
    $tableId = (int)$stm->fetchColumn();
    if (!$tableId) json_out(['ok'=>false,'message'=>'QR không hợp lệ'], 404);
  } elseif ($table) {
    $tableId = $table;
  } else {
    json_out(['ok'=>false,'message'=>'Thiếu code/table_id'], 400);
  }

  // Chỉ nhận đơn khi bàn mở
  $stm = $pdo->prepare("SELECT is_open FROM tables WHERE id=?");
  $stm->execute([$tableId]);
  $isOpen = (int)$stm->fetchColumn();
  if (!$isOpen) json_out(['ok'=>false,'message'=>'Bàn hiện đang đóng'], 403);

  // 1 bàn 1 đơn pending
  $stm = $pdo->prepare("SELECT id FROM orders WHERE table_id=? AND status='pending' ORDER BY id DESC LIMIT 1");
  $stm->execute([$tableId]);
  $orderId = $stm->fetchColumn();

  if (!$orderId) {
    $ins = $pdo->prepare("INSERT INTO orders(table_id) VALUES (?)");
    $ins->execute([$tableId]);
    $orderId = $pdo->lastInsertId();
  }

  json_out(['ok'=>true, 'order_id'=>(int)$orderId, 'table_id'=>$tableId]);
} catch (Throwable $e) {
  json_out(['ok'=>false,'message'=>'Server error'], 500);
}

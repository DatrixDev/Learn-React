<?php
require __DIR__.'/../src/db.php';
require __DIR__.'/../src/util.php';

try {
  $pdo = pdo();
  $cats = $pdo->query("SELECT id,name FROM categories ORDER BY id")->fetchAll();
  $items = $pdo->query("SELECT id,category_id,name,price FROM menu_items WHERE is_active=1 ORDER BY id")->fetchAll();
  json_out(['ok'=>true, 'categories'=>$cats, 'items'=>$items]);
} catch (Throwable $e) {
  json_out(['ok'=>false, 'message'=>'Server error'], 500);
}

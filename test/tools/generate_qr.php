composer require endroid/qr-code
<?php
require __DIR__.'/../vendor/autoload.php';
require __DIR__.'/../src/db.php';

use Endroid\QrCode\Builder\Builder;

$pdo = pdo();
$rows = $pdo->query("SELECT tt.table_id, t.name, tt.code FROM table_tokens tt JOIN tables t ON t.id=tt.table_id WHERE tt.is_active=1")->fetchAll();

@mkdir(__DIR__.'/qrs', 0777, true);

foreach ($rows as $r) {
  // URL thật của bạn: ví dụ https://yourdomain.com/order.html?code=XXX
  $url = "http://localhost/qr-order-php/public/order.html?code=".urlencode($r['code']);
  $qr = Builder::create()->data($url)->size(500)->margin(20)->build();
  $file = __DIR__."/qrs/table_{$r['table_id']}_{$r['code']}.png";
  file_put_contents($file, $qr->getString());
  echo "Saved: $file\n";
}

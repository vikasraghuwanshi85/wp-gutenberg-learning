<?php
$number = $attributes['number'] ?? 0;
$label = $attributes['label'] ?? '';
?>
<div class="mygb-stats" style="padding:20px;border:2px solid #000;border-radius:12px;text-align:center;">
    <div style="font-size:48px;font-weight:800;"><?php echo esc_html($number); ?>+</div>
    <div style="opacity:0.7;"><?php echo esc_html($label); ?></div>
</div>

<?php
$current_page = 'canon-rf';
$mount_name = 'Canon RF Mount';
$mount_description = 'Canon\'s RF mount, introduced with their mirrorless camera line, offers a range of high-quality fisheye lenses...';

$lenses = [
    [
        'name' => 'Canon RF 5.2mm f/2.8L Dual Fisheye',
        'image' => '../images/canon-rf-5.2mm-f2.8.jpg',
        'focal_length' => '5.2mm',
        'max_aperture' => 'f/2.8',
        'min_focus' => '20cm',
        'filter_size' => 'Rear gelatin'
    ],
    // Add more lenses here
];

include 'mount_template.php';
?>
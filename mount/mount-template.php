<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $mount_name; ?> Fisheye Lenses | Which Fisheye?</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <?php include 'sidebar.php'; ?>
    
    <div class="container">
        <main class="content">
            <h1><?php echo $mount_name; ?> Fisheye Lenses</h1>
            
            <p class="overview"><?php echo $mount_description; ?></p>

            <div class="lens-grid">
                <?php foreach ($lenses as $lens): ?>
                    <div class="lens-box">
                        <img src="<?php echo $lens['image']; ?>" alt="<?php echo $lens['name']; ?>">
                        <h3><?php echo $lens['name']; ?></h3>
                        <div class="lens-stats">
                            <p>Focal Length: <?php echo $lens['focal_length']; ?></p>
                            <p>Maximum Aperture: <?php echo $lens['max_aperture']; ?></p>
                            <p>Minimum Focusing Distance: <?php echo $lens['min_focus']; ?></p>
                            <p>Filter Size: <?php echo $lens['filter_size']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </main>
    </div>
    
    <script src="../scripts.js"></script>
</body>
</html>
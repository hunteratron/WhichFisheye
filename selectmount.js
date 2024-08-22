document.addEventListener('DOMContentLoaded', function() {
    const cameraMountSelect = document.getElementById('cameraMount');
    const lensOptionsSelect = document.getElementById('lensOptions');

    // Define lens options for each camera mount
    const lensOptions = {
        canon: ['Canon 8-15mm f/4L Fisheye USM', 'Sigma 15mm f/2.8 EX DG Diagonal Fisheye'],
        nikon: ['Nikon 8-15mm f/3.5-4.5E ED Fisheye', 'Sigma 15mm f/2.8 EX DG Diagonal Fisheye'],
        sony: ['Sony FE 28mm f/2 + Fisheye Converter', 'Rokinon 12mm f/2.8 ED AS IF NCS UMC Fisheye'],
        fujifilm: ['Samyang 8mm f/2.8 UMC Fisheye II', 'Meike 6.5mm f/2.0 Fisheye'],
        'micro-four-thirds': ['Olympus M.Zuiko Digital ED 8mm f/1.8 Fisheye PRO', 'Panasonic Lumix G Fisheye 8mm f/3.5'],
        panasonic: ['Panasonic Lumix G Fisheye 8mm f/3.5', 'Meike 6.5mm f/2.0 Fisheye'],
        leica: ['Leica Super-Elmar-M 18mm f/3.8 ASPH', 'Voigtlander Super Wide-Heliar 15mm f/4.5 Aspherical III'],
        sigma: ['Sigma 15mm f/2.8 EX DG Diagonal Fisheye', 'Sigma 8mm f/3.5 EX DG Circular Fisheye'],
        pentax: ['Pentax SMC DA 10-17mm f/3.5-4.5 ED IF Fisheye', 'Samyang 8mm f/3.5 UMC CS II Fisheye'],
        hasselblad: ['Reserved for Hasselblad specific lenses'],
        'pl-cine': ['Reserved for PL mount cine lenses']
    };

    cameraMountSelect.addEventListener('change', function() {
        const selectedMount = this.value;
        lensOptionsSelect.innerHTML = '<option value="">Select a lens</option>';
        
        if (selectedMount && lensOptions[selectedMount]) {
            lensOptions[selectedMount].forEach(function(lens) {
                const option = document.createElement('option');
                option.value = lens;
                option.textContent = lens;
                lensOptionsSelect.appendChild(option);
            });
            lensOptionsSelect.style.display = 'block';
        } else {
            lensOptionsSelect.style.display = 'none';
        }
    });
});
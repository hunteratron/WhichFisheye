document.addEventListener('DOMContentLoaded', function() {
    const cameraMountSelect = document.getElementById('cameraMount');
    const lensOptionsSelect = document.getElementById('lensOptions');

    // Define camera mount options for each camera brand
    const mountOptions = {
        canon: ['EF', 'EF-S', 'RF'],
        nikon: ['F', 'Z'],
        sony: ['E', 'A'],
        fujifilm: ['X', 'G'],
        'micro-four-thirds': ['Micro Four Thirds'],
        panasonic: ['L'],
        leica: ['M', 'L'],
        sigma: ['SA'],
        pentax: ['K'],
        hasselblad: ['X', 'H'],
        'pl-cine': ['PL']
    };

    cameraMountSelect.addEventListener('change', function() {
        const selectedBrand = this.value;
        lensOptionsSelect.innerHTML = '<option value="">Select a lens mount</option>';
        
        if (selectedBrand && mountOptions[selectedBrand]) {
            mountOptions[selectedBrand].forEach(function(mount) {
                const option = document.createElement('option');
                option.value = mount;
                option.textContent = mount;
                lensOptionsSelect.appendChild(option);
            });
            lensOptionsSelect.style.display = 'block';
        } else {
            lensOptionsSelect.style.display = 'none';
        }
        updateGoFishButton();
    });
});
function updateGoFishButton() {
    const goFishButton = document.getElementById('goFishButton');
    if (cameraMountSelect.value && lensOptionsSelect.value) {
        goFishButton.style.display = 'block';
    } else {
        goFishButton.style.display = 'none';
    }
}

lensOptionsSelect.addEventListener('change', updateGoFishButton);

document.getElementById('goFishButton').addEventListener('click', function(e) {
    e.preventDefault();
    const brand = cameraMountSelect.value;
    const mount = lensOptionsSelect.value;
    if (brand && mount) {
        // Replace this with actual URL when you create the category pages
        alert(`You would navigate to the ${brand} ${mount} category page`);
    }
});
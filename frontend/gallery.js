// Image Gallery JavaScript
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const imageInfo = document.getElementById('image-info');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;
let visibleImages = [];

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        // Filter images
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        // Update visible images list
        updateVisibleImages();
    });
});

// Get visible (not hidden) images
function updateVisibleImages() {
    visibleImages = Array.from(galleryItems).filter(item => 
        !item.classList.contains('hidden')
    );
}

// Initial visible images
updateVisibleImages();

// Lightbox functionality
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('hidden')) {
            currentImageIndex = visibleImages.indexOf(item);
            showLightbox();
        }
    });
});

// View button click
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = btn.closest('.gallery-item');
        if (!item.classList.contains('hidden')) {
            currentImageIndex = visibleImages.indexOf(item);
            showLightbox();
        }
    });
});

function showLightbox() {
    if (visibleImages.length === 0) return;
    
    const currentItem = visibleImages[currentImageIndex];
    const img = currentItem.querySelector('img');
    const altText = img.getAttribute('alt');
    
    lightboxImg.src = img.src;
    lightboxImg.alt = altText;
    imageInfo.textContent = `Image ${currentImageIndex + 1} of ${visibleImages.length}: ${altText}`;
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function nextImage() {
    if (visibleImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
    showLightbox();
}

function prevImage() {
    if (visibleImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
    showLightbox();
}

// Event listeners
closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Close lightbox when clicking outside
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
    }
});

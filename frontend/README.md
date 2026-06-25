# CodeAlpha Frontend Development Tasks

This project contains **3 complete frontend development tasks** for the CodeAlpha internship program. All projects are built using vanilla HTML, CSS, and JavaScript with no external dependencies.

## 📋 Projects Overview

### 1. 🖼️ Image Gallery
A responsive, interactive image gallery with advanced features.

**Features:**
- Responsive grid layout (desktop, tablet, mobile)
- Category filtering (All, Nature, City, Animals)
- Lightbox modal view with smooth animations
- Image navigation (next/previous buttons)
- Keyboard navigation (Arrow keys for navigation, Escape to close)
- Hover effects and smooth transitions
- Image information display
- Touch-friendly on mobile devices

**Files:**
- `gallery.html` - HTML structure
- `gallery.css` - Styling and responsive design
- `gallery.js` - Interactive functionality

**How to Use:**
1. Open `gallery.html` in your browser
2. Click filter buttons to categorize images
3. Click "View" button or hover on an image to open lightbox
4. Use navigation arrows or buttons to browse images
5. Press Escape or click outside to close lightbox

---

### 2. 🧮 Calculator
A fully functional calculator with arithmetic operations and keyboard support.

**Features:**
- All arithmetic operations (+, -, ×, ÷)
- Clear and Delete functions
- Real-time result display
- Keyboard support (0-9, +, -, *, /, Enter, Backspace, Escape)
- Error handling (divide by zero)
- Responsive design
- Operation display showing previous operand and current operation
- Modern gradient UI

**Files:**
- `calculator.html` - HTML structure
- `calculator.css` - Styling and animations
- `calculator.js` - Calculator logic

**How to Use:**
1. Open `calculator.html` in your browser
2. Click number buttons to input values (or use keyboard)
3. Click operation buttons (+, -, ×, ÷)
4. Click "=" to calculate (or press Enter)
5. Use "DEL" to delete last digit or "C" to clear all
6. Keyboard shortcuts work for all operations

---

### 3. 🎵 Music Player
A feature-rich music player with playlist management and playback controls.

**Features:**
- Play/Pause control
- Next/Previous track navigation
- Shuffle functionality
- Autoplay option
- Progress bar with seeking capability
- Volume control with slider
- Playlist management modal
- Song information display (title, artist, duration)
- Album artwork display
- Responsive design for all devices

**Sample Playlist:**
The player includes 5 sample tracks using royalty-free audio from SoundHelix.

**Files:**
- `music-player.html` - HTML structure
- `music-player.css` - Styling and animations
- `music-player.js` - Player functionality

**How to Use:**
1. Open `music-player.html` in your browser
2. Click the play button (▶) to start playing
3. Use next (⏭) and previous (⏮) buttons to navigate
4. Drag the progress bar to seek within a song
5. Adjust volume with the volume slider
6. Click the shuffle button (🔀) to enable random playback
7. Click the playlist button (📋) to view and select songs
8. Toggle autoplay to automatically play next song

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build tools required

### Installation
1. Clone or download this repository
2. Navigate to the frontend folder
3. Open `index.html` in your browser to see all projects

### File Structure
```
frontend/
├── index.html              # Main landing page
├── index.css               # Landing page styles
│
├── gallery.html            # Image Gallery
├── gallery.css             # Gallery styles
├── gallery.js              # Gallery functionality
│
├── calculator.html         # Calculator
├── calculator.css          # Calculator styles
├── calculator.js           # Calculator logic
│
├── music-player.html       # Music Player
├── music-player.css        # Music player styles
├── music-player.js         # Music player functionality
│
└── README.md               # This file
```

---

## 🎨 Design Features

### Color Scheme
- **Primary Gradient:** Purple to Pink (#667eea → #764ba2)
- **Secondary Gradient:** Dark Blue (#1e3c72 → #2a5298)
- **Accent Colors:** Green, Red, Orange for different actions

### Responsive Design
All projects are fully responsive and work seamlessly on:
- Desktop (1920px and above)
- Tablet (768px - 1024px)
- Mobile (below 768px)

### Animations
- Smooth transitions on hover
- Scale and translate effects
- Gradient background animations
- Loading animations

---

## ⌨️ Keyboard Shortcuts

### Image Gallery
- `→` / `←` - Navigate to next/previous image
- `Esc` - Close lightbox

### Calculator
- `0-9` - Input numbers
- `+`, `-`, `*`, `/` - Operations
- `Enter` / `=` - Calculate
- `Backspace` - Delete last digit
- `Esc` - Clear all

### Music Player
- `Space` - Play/Pause (when focused)
- Click track in playlist to play

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| Mobile  | ✅ All modern |

---

## 💻 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Animations, Gradients
- **JavaScript (ES6+)** - DOM manipulation, Event handling
- **No Dependencies** - Pure vanilla implementation

### Performance
- Optimized CSS with minimal repaints
- Efficient JavaScript event handling
- Lazy-loaded images (where applicable)
- Responsive images and media queries

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Proper color contrast ratios
- Focus states for interactive elements

---

## 🔧 Customization

### Adding Images to Gallery
Edit `gallery.html` and modify the gallery items:
```html
<div class="gallery-item" data-category="nature">
    <img src="your-image-url" alt="Image description">
    <div class="overlay">
        <button class="view-btn">View</button>
    </div>
</div>
```

### Changing Calculator Styling
Modify colors in `calculator.css`:
- `.number-btn` - Number button colors
- `.operator-btn` - Operator button colors
- `.display-screen` - Display colors

### Adding Songs to Music Player
Edit the `playlist` array in `music-player.js`:
```javascript
{
    title: 'Song Title',
    artist: 'Artist Name',
    url: 'path-to-audio-file',
    cover: 'path-to-cover-image'
}
```

---

## ✅ Verification Checklist

### Image Gallery ✓
- [x] Responsive design for all screen sizes
- [x] HTML and CSS layout
- [x] JavaScript navigation
- [x] Next/Previous buttons and lightbox
- [x] Hover effects and transitions
- [x] Category filtering (Bonus)

### Calculator ✓
- [x] HTML, CSS, JavaScript implementation
- [x] All arithmetic operations
- [x] User interface with buttons and display
- [x] User input handling and clearing
- [x] Real-time result display
- [x] Keyboard support (Bonus)

### Music Player ✓
- [x] HTML and CSS interface
- [x] JavaScript audio control
- [x] Play, pause, next, previous buttons
- [x] Song title and artist display
- [x] Progress bar and duration
- [x] Volume control
- [x] Playlist functionality (Bonus)
- [x] Autoplay option (Bonus)

---

## 📄 License
These projects are created as part of the CodeAlpha internship program.

## 🤝 Support
For any issues or questions, please contact CodeAlpha:
- **Website:** www.codealpha.tech
- **Email:** services@codealpha.tech
- **WhatsApp:** +91 9336576683

---

## 📝 Notes
- All projects use sample/placeholder data
- The music player uses sample audio from SoundHelix
- No external APIs or dependencies required
- Can be deployed on GitHub Pages, Netlify, or any static hosting

**Created:** 2026
**Version:** 1.0.0

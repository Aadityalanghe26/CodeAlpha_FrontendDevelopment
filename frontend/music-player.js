// Music Player JavaScript

// Royalty-Free Music Playlist - Working URLs
const playlist = [
    {
        title: 'Sunny Day',
        artist: 'Royalty Free Music',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        cover: 'https://images.pexels.com/photos/3273569/pexels-photo-3273569.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Chill Wave',
        artist: 'Background Music',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        cover: 'https://images.pexels.com/photos/3273570/pexels-photo-3273570.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Morning Coffee',
        artist: 'Relaxing Sounds',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        cover: 'https://images.pexels.com/photos/3273571/pexels-photo-3273571.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Summer Dreams',
        artist: 'Creative Commons',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        cover: 'https://images.pexels.com/photos/3273572/pexels-photo-3273572.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Night Vibes',
        artist: 'Free Music',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        cover: 'https://images.pexels.com/photos/3273573/pexels-photo-3273573.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Peaceful Meditation',
        artist: 'Ambient Music',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        cover: 'https://images.pexels.com/photos/3273574/pexels-photo-3273574.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Focus Mode',
        artist: 'Work Music',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        cover: 'https://images.pexels.com/photos/3273575/pexels-photo-3273575.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Evening Breeze',
        artist: 'Nature Sounds',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
        cover: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Happy Moment',
        artist: 'Uplifting Music',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
        cover: 'https://images.pexels.com/photos/3271868/pexels-photo-3271868.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
        title: 'Smooth Jazz',
        artist: 'Instrumental Music',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
        cover: 'https://images.pexels.com/photos/3407620/pexels-photo-3407620.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
];

// DOM Elements
const audioPlayer = document.getElementById('audio-player');
const albumCover = document.getElementById('album-cover');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const playlistBtn = document.getElementById('playlist-btn');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const progressInput = document.getElementById('progress-input');
const progress = document.getElementById('progress');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const autoplayToggle = document.getElementById('autoplay-toggle');
const playlistModal = document.getElementById('playlist-modal');
const closeModal = document.querySelector('.close-modal');
const playlistItems = document.getElementById('playlist-items');

// Player State
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;

// Initialize
function init() {
    loadTrack(currentTrackIndex);
    renderPlaylist();
    audioPlayer.volume = volumeSlider.value / 100;
}

// Load track
function loadTrack(index) {
    if (index < 0) index = playlist.length - 1;
    if (index >= playlist.length) index = 0;
    
    currentTrackIndex = index;
    const track = playlist[index];
    
    audioPlayer.src = track.url;
    albumCover.src = track.cover;
    songTitle.textContent = track.title;
    songArtist.textContent = track.artist;
    
    updatePlaylistDisplay();
}

// Update playlist display
function updatePlaylistDisplay() {
    const items = document.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
        if (index === currentTrackIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Play/Pause
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playBtn.classList.remove('playing');
        playIcon.textContent = '▶';
        isPlaying = false;
    } else {
        audioPlayer.play();
        playBtn.classList.add('playing');
        playIcon.textContent = '⏸';
        isPlaying = true;
    }
}

// Next track
function nextTrack() {
    if (isShuffle) {
        currentTrackIndex = Math.floor(Math.random() * playlist.length);
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    }
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// Previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// Toggle shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active');
}

// Format time
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update time display
function updateTimeDisplay() {
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    durationDisplay.textContent = formatTime(audioPlayer.duration);
    
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = `${percent || 0}%`;
    progressInput.value = percent || 0;
}

// Render playlist
function renderPlaylist() {
    playlistItems.innerHTML = '';
    playlist.forEach((track, index) => {
        const div = document.createElement('div');
        div.className = 'playlist-item';
        if (index === currentTrackIndex) div.classList.add('active');
        
        div.innerHTML = `
            <div class="playlist-item-info">
                <div>
                    <div class="playlist-item-title">${track.title}</div>
                    <div class="playlist-item-artist">${track.artist}</div>
                </div>
            </div>
        `;
        
        div.addEventListener('click', () => {
            loadTrack(index);
            audioPlayer.play();
            playBtn.classList.add('playing');
            playIcon.textContent = '⏸';
            isPlaying = true;
            playlistModal.classList.remove('active');
        });
        
        playlistItems.appendChild(div);
    });
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
shuffleBtn.addEventListener('click', toggleShuffle);
playlistBtn.addEventListener('click', () => {
    playlistModal.classList.add('active');
});
closeModal.addEventListener('click', () => {
    playlistModal.classList.remove('active');
});
playlistModal.addEventListener('click', (e) => {
    if (e.target === playlistModal) {
        playlistModal.classList.remove('active');
    }
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audioPlayer.volume = value / 100;
    volumeValue.textContent = value + '%';
});

// Progress bar
progressInput.addEventListener('input', (e) => {
    const percent = e.target.value;
    audioPlayer.currentTime = (percent / 100) * audioPlayer.duration;
});

// Audio events
audioPlayer.addEventListener('timeupdate', updateTimeDisplay);
audioPlayer.addEventListener('loadedmetadata', updateTimeDisplay);
audioPlayer.addEventListener('ended', () => {
    if (autoplayToggle.checked) {
        nextTrack();
        audioPlayer.play();
    } else {
        isPlaying = false;
        playBtn.classList.remove('playing');
        playIcon.textContent = '▶';
    }
});

// Initialize player
init();

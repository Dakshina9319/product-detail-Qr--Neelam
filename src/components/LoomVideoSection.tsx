import React, { useState, useRef, useEffect } from 'react';
import {
  CONFIGURED_LOOM_VIDEO_URL,
  DEFAULT_LOOM_POSTER_URL,
  SAMPLE_FALLBACK_VIDEO_URL,
  VIDEO_CHAPTERS,
  VideoChapter,
} from '../config/videoConfig';

export const LoomVideoSection: React.FC = () => {
  // If user configured a video URL in src/config/videoConfig.ts, prioritize it; otherwise sample fallback
  const initialVideoSrc = CONFIGURED_LOOM_VIDEO_URL || SAMPLE_FALLBACK_VIDEO_URL;

  const [videoSrc, setVideoSrc] = useState<string>(initialVideoSrc);
  const [videoName, setVideoName] = useState<string>(
    CONFIGURED_LOOM_VIDEO_URL ? 'Configured Video' : 'Field Master Cut'
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(258); // default ~4:18
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showUrlDialog, setShowUrlDialog] = useState<boolean>(false);
  const [customUrlInput, setCustomUrlInput] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync if code config changes
  useEffect(() => {
    if (CONFIGURED_LOOM_VIDEO_URL) {
      setVideoSrc(CONFIGURED_LOOM_VIDEO_URL);
      setVideoName('Configured Video (from videoConfig.ts)');
    }
  }, []);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If autoplay fails without user gesture
          setIsPlaying(false);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  const handleChapterClick = (chapter: VideoChapter) => {
    if (videoRef.current) {
      videoRef.current.currentTime = chapter.timeSeconds;
      setCurrentTime(chapter.timeSeconds);
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true));
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setVideoSrc(objectUrl);
      setVideoName(`Uploaded: ${file.name}`);
      setIsPlaying(false);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 150);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      setVideoSrc(customUrlInput.trim());
      setVideoName(`Stream: ${customUrlInput.trim().slice(0, 30)}...`);
      setShowUrlDialog(false);
      setIsPlaying(false);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 150);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="w-full mb-12" id="loom-video-section">
      <div className="bg-night-slate text-canvas-base rounded-xl p-5 sm:p-8 shadow-md relative overflow-hidden">
        {/* Section Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-widest text-zari-ochre block mb-1">
              Atelier Documentary · Live Loom Recording
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Watch Murthy S. at the Loom: The Rhythms of Negamam
            </h2>
            <p className="text-xs sm:text-sm text-canvas-base/75 mt-1 max-w-2xl">
              Experience the 32 hours of hand, foot, and shuttle synchronization that formed Saree #NGM1024.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-mono">
              Binaural Shuttle Audio 4K
            </span>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div
          className="relative w-full aspect-video sm:aspect-[21/9] rounded-lg overflow-hidden bg-black/90 shadow-inner group"
          id="loom-video-wrapper"
        >
          {/* Hidden File Input for video upload */}
          <input
            type="file"
            ref={fileInputRef}
            accept="video/mp4,video/webm,video/ogg,video/quicktime"
            className="hidden"
            onChange={handleFileUpload}
          />

          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            src={videoSrc}
            poster={DEFAULT_LOOM_POSTER_URL}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Video Control Overlay */}
          <div
            className={`absolute inset-0 flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-t from-black/85 via-black/20 to-black/40 transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
            }`}
          >
            {/* Top Bar inside Video */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-indigo-blue text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  {videoName}
                </span>
                <span className="text-xs text-white/80 font-mono hidden sm:inline">
                  Recorded in Negamam Village
                </span>
              </div>

              {/* Upload / Switch Video Button Group */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide uppercase transition-all shadow-xs cursor-pointer"
                  title="Upload a local video file (MP4, WebM)"
                >
                  <span className="material-symbols-outlined text-[16px] text-zari-ochre">
                    cloud_upload
                  </span>
                  <span className="hidden sm:inline">Upload / Change Video</span>
                  <span className="sm:hidden">Upload</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowUrlDialog(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 text-white text-xs font-medium transition-all cursor-pointer"
                  title="Paste a remote video URL"
                >
                  <span className="material-symbols-outlined text-[15px]">link</span>
                </button>
              </div>
            </div>

            {/* Big Center Play / Pause Icon Button */}
            <div className="self-center">
              <button
                type="button"
                onClick={handlePlayToggle}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-canvas-base text-night-slate flex items-center justify-center shadow-xl hover:scale-105 hover:bg-white transition-all cursor-pointer"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                <span className="material-symbols-outlined text-4xl sm:text-5xl ml-1 text-indigo-blue">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
            </div>

            {/* Bottom Scrub & Timeline Controls */}
            <div className="space-y-2">
              {/* Scrub input bar */}
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer accent-zari-ochre focus:outline-none"
              />

              <div className="flex items-center justify-between text-[11px] font-mono text-white/90">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePlayToggle}
                    className="hover:text-white cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      {isMuted ? 'volume_off' : 'volume_up'}
                    </span>
                  </button>
                  <span>
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <span className="hidden sm:inline font-sans text-white/80">
                  Scene: Zari Floral Inlay Insertion (or custom recording)
                </span>

                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">1080p HD</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (videoRef.current?.requestFullscreen) {
                        videoRef.current.requestFullscreen();
                      }
                    }}
                    className="hover:text-white cursor-pointer"
                    title="Fullscreen"
                  >
                    <span className="material-symbols-outlined text-sm">fullscreen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Chapters & Artisan Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 pt-6 border-t border-white/10 items-center">
          <div className="lg:col-span-7 bg-white/5 p-4 rounded-lg border border-white/10">
            <span className="text-[10px] uppercase font-bold tracking-wider text-zari-ochre block mb-1">
              Artisan Voice Note
            </span>
            <blockquote className="font-quote italic text-sm sm:text-base text-canvas-base leading-relaxed">
              “The sound of the fly-shuttle is like a heartbeat. When I weave this copper border, each thread must be adjusted with equal tension from my feet on the treadles. One wrong rhythm changes the entire drape of the saree.”
            </blockquote>
            <span className="text-xs font-mono text-canvas-base/60 block mt-2">
              — Murthy S., Weaver Society #184
            </span>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-2 text-xs">
            {VIDEO_CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => handleChapterClick(ch)}
                className="p-2.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 hover:border-zari-ochre/40 flex items-center justify-between text-left transition-all cursor-pointer group"
              >
                <span className="text-canvas-base font-medium group-hover:text-zari-ochre transition-colors">
                  {ch.timeLabel} {ch.title}
                </span>
                <span className="material-symbols-outlined text-sm text-zari-ochre">
                  schedule
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Developer Note Callout for user ease */}
        <div className="mt-4 px-3 py-2 rounded bg-white/5 border border-white/10 flex items-center justify-between text-[11px] text-white/70">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-zari-ochre">info</span>
            <span>
              <strong>Developer note:</strong> You can edit{' '}
              <code className="bg-black/30 px-1 py-0.5 rounded text-amber-200 font-mono">
                src/config/videoConfig.ts
              </code>{' '}
              to set your permanent video URL or use the upload button above.
            </span>
          </div>
        </div>
      </div>

      {/* URL Input Modal */}
      {showUrlDialog && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-silk-cream border border-card-border rounded-xl p-6 max-w-md w-full shadow-xl">
            <h3 className="font-serif text-lg font-bold text-night-slate mb-1">
              Connect Custom Video URL
            </h3>
            <p className="text-xs text-night-slate/70 mb-4">
              Enter the URL of any direct MP4 or WebM video file (e.g. from Cloudflare, S3, or public CDN).
            </p>
            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <input
                type="url"
                required
                placeholder="https://example.com/my-loom-video.mp4"
                value={customUrlInput}
                onChange={(e) => setCustomUrlInput(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-canvas-base border border-card-border text-xs text-night-slate focus:outline-none focus:ring-1 focus:ring-indigo-blue"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowUrlDialog(false)}
                  className="px-3 py-1.5 rounded-lg border border-card-border text-xs font-semibold text-night-slate hover:bg-sand-light"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-indigo-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-dark"
                >
                  Set Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

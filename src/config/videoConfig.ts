/**
 * ============================================================================================
 * 🎥 ATELIER DOCUMENTARY LOOM VIDEO CONFIGURATION
 * ============================================================================================
 * 
 * 💡 HOW TO ATTACH YOUR OWN VIDEO LATER:
 * --------------------------------------------------------------------------------------------
 * 1. OPTION A (Local File):
 *    - Place your video file inside the `/public` directory (e.g. `/public/my-loom-recording.mp4`).
 *    - Set `CONFIGURED_LOOM_VIDEO_URL` below to:
 *      `export const CONFIGURED_LOOM_VIDEO_URL = "/my-loom-recording.mp4";`
 * 
 * 2. OPTION B (Remote / Hosted URL):
 *    - Upload your video to any hosting service, Cloudflare, S3, Vimeo (direct mp4), Google Drive, etc.
 *    - Set `CONFIGURED_LOOM_VIDEO_URL` below to:
 *      `export const CONFIGURED_LOOM_VIDEO_URL = "https://your-domain.com/video.mp4";`
 * 
 * 3. OPTION C (In-App Browser Upload / Preview):
 *    - You can also click the "Upload / Change Video" button directly on the video player in the app
 *      to select any MP4/WebM file from your computer or paste any URL for instant live preview!
 * ============================================================================================
 */

// ⬇️ REPLACE THIS STRING WITH YOUR VIDEO URL OR LOCAL PATH WHEN READY:
export const CONFIGURED_LOOM_VIDEO_URL: string = "";

// Default fallback video poster image (Murthy S. at the pit loom)
export const DEFAULT_LOOM_POSTER_URL: string = 
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmrfUDFw1OPQcxYjHQlu05MVAzuQWeCv_ZkeHlZv3VFb60zhwxXOWG7egWr-r29FMxHRhrvQKPZ5zzM4lU38jQiJ4PX3oFtkml48dgG_zOL_0rsH1m-HQ2AgHojJneadjjDMF_4jZV9YJvXDN-uZNsoEqP5p2JZsAytiWwAYWZzauY6rkzt5dNd52k-pS3OAdAsbWggXiMTFLOxtsz1VeBlgNRPLp1xeUKvdrJ-FJ4h1u6iaDvYqbrnQ";

// High-definition sample craft documentary video fallback if no custom video is provided yet
export const SAMPLE_FALLBACK_VIDEO_URL: string =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export interface VideoChapter {
  id: string;
  timeSeconds: number;
  timeLabel: string;
  title: string;
}

export const VIDEO_CHAPTERS: VideoChapter[] = [
  { id: "warp", timeSeconds: 15, timeLabel: "00:15", title: "Setting the Warp" },
  { id: "butta", timeSeconds: 80, timeLabel: "01:20", title: "Paisley Butta" },
  { id: "density", timeSeconds: 165, timeLabel: "02:45", title: "Border Density" },
  { id: "buyer", timeSeconds: 230, timeLabel: "03:50", title: "Message to Buyer" },
];

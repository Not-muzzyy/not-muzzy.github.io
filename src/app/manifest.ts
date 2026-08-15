import { MetadataRoute } from "next"; 

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest { 
return { 
name: "Mohammed Muzammil C | Cybersecurity & AI Portfolio", 
short_name: "Muzammil C", 
description: 
"Portfolio of Mohammed Muzammil C — Cybersecurity Engineer and AI Systems Developer in Ballari, Karnataka.", 
start_url: "/", 
display: "standalone", 
background_color: "#0a0a0c", 
theme_color: "#0a0a0c", 
icons: [ 
{ src: "/icon.png", sizes: "192x192", type: "image/png" }, 
{ src: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" } 
], 
}; 
}

ROM Organizer Script

This project automates the process of organizing ROM files into categorized subfolders based on file types (e.g., NES, GameBoy, SNES). It helps keep your ROM collection neat and accessible.

Features

Automatically detects and organizes ROM files.
Supports multiple ROM file types such as .nes, .gba, .sfc, and more.

Installation and Usage
1. Install Node.js
pkg install nodejs
2. download the script
Ensure you have the organizeRoms.js file in your designated folder.
3. Navigate to the Download Location
cd ~/storage/downloads
5. Run the Script
node organizeRoms.js
Folder Structure
The organized ROMs will be moved to designated subfolders such as:
OrganizedROMs/
  └── NES/
  └── GameBoy/
  └── SNES/



Supported File Extensions
NES: .nes
GameBoy: .gb, .gba
SNES: .smc, .sfc
N64: .n64, .z64
PlayStation: .bin, .cue
Notes
Ensure you have appropriate permissions to access and move files within Termux or any other terminal you have.

The code is open source so you can change it to however you see fit that works for you.

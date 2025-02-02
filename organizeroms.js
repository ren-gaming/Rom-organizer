const fs = require("fs");
console.log("Script starting...");
const path = require('path');

// Define the source and target directories
const sourceDir = '/storage/emulated/0/Download/ROMs';
const targetDir = '/storage/emulated/0/Download/OrganizedROMs';

// Define file extensions for different consoles
const romCategories = {
    NES: ['.nes'],
    GameBoy: ['.gb', '.gba'],
    SNES: ['.smc', '.sfc'],
    Genesis: ['.gen', '.md'],
    N64: ['.n64', '.z64'],
    PlayStation: ['.bin', '.cue'],
};

// Function to create a folder if it doesn't exist
function createFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${folderPath}`);
    }
}

// Function to move ROM files to their corresponding folders
function organizeROMs() {
    if (!fs.existsSync(sourceDir)) {
        console.log(`Source folder not found: ${sourceDir}`);
        return;
    }

    const files = fs.readdirSync(sourceDir);

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        const filePath = path.join(sourceDir, file);

        // Check if it's a file and has a matching ROM extension
        if (fs.statSync(filePath).isFile()) {
            for (const [console, extensions] of Object.entries(romCategories)) {
                if (extensions.includes(ext)) {
                    const consoleFolder = path.join(targetDir, console);
                    
                    // Create the console folder if it doesn't exist
                    createFolder(consoleFolder);

                    // Move the file to the corresponding folder
                    const newFilePath = path.join(consoleFolder, file);
                    fs.renameSync(filePath, newFilePath);
                    
                    break;
                }
            }
        }
    });

    console.log("ROM organization complete.");
}

// Create the main target folder if it doesn't exist
createFolder(targetDir);

// Start organizing ROMs
organizeROMs();

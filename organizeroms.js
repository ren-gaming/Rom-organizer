const fs = require('fs');
const path = require('path');

// Directory to organize
const romsDirectory = './roms';

// Console categories based on extensions
const fileTypes = {
  'nds': ['.nds'],
  'gameboy': ['.gb', '.gbc'],
  'gba': ['.gba'],
  '3ds': ['.3ds']
};

// Function to organize files into subfolders
function organizeFiles() {
  fs.readdir(romsDirectory, (err, files) => {
    if (err) return console.error(`Error reading directory: ${err}`);

    files.forEach(folder => {
      const folderPath = path.join(romsDirectory, folder);
      if (fs.lstatSync(folderPath).isDirectory()) {
        fs.readdir(folderPath, (err, romFiles) => {
          if (err) return;

          romFiles.forEach(file => {
            const fileExt = path.extname(file).toLowerCase();
            
            // Find target folder for the file extension
            for (const [consoleType, extensions] of Object.entries(fileTypes)) {
              if (extensions.includes(fileExt)) {
                const targetFolder = path.join(folderPath, consoleType);
                
                if (!fs.existsSync(targetFolder)) {
                  fs.mkdirSync(targetFolder);
                }

                // Move file
                const oldPath = path.join(folderPath, file);
                const newPath = path.join(targetFolder, file);

                fs.rename(oldPath, newPath, err => {
                  if (err) console.error(`Error moving file: ${err}`);
                  else console.log(`Moved: ${file} -> ${targetFolder}`);
                });

                break;
              }
            }
          });
        });
      }
    });
  });
}

organizeFiles();

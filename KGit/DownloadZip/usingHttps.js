import https from "https";
import fs from "fs";
import path from "path";
import url from "url";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileUrl = 'https://github.com/KeshavSoft/FileCrud/archive/refs/heads/main.zip';
const outputPath = path.join(__dirname, 'downloaded.zip');

function downloadFile(fileUrl) {
  https.get(fileUrl, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(outputPath);
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => console.log('Download completed.'));
      });
    } else if (response.statusCode === 302 || response.statusCode === 301) {
      const redirectUrl = response.headers.location;
      console.log(`Redirecting to: ${redirectUrl}`);
      downloadFile(redirectUrl); // Follow the redirect
    } else {
      console.log(`Download failed: ${response.statusCode}`);
      response.resume();
    }
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
  });
}

downloadFile(fileUrl);

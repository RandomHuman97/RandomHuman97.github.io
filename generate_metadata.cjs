const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'public/rawposts');
const outputFile = path.join(__dirname, 'public/postsMetadata.json');

const getPostMetadata = () => {
  const metadata = [];

  // Recursive walk
  const walk = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        const relative = path.relative(postsDir, fullPath);
        const parts = relative.split(path.sep);
        // Expected format: [year, month, day, filename.html]
        if (parts.length >= 4) {
          const [year, month, day, filename] = parts;
          const title = filename.replace(/\.html$/, '');
          const firstLine = getFirstLineOfFile(fullPath);

          const isoDate = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
          ).toISOString();

          metadata.push({
            path: relative.replace(/\\/g, "/").split(".html")[0].replaceAll("/", "-"), // normalized path for cross-platform
            title,
            date: isoDate,
            firstLine,
          });
        }
      }
    });
  };

  walk(postsDir);
  return metadata;
};

const getFirstLineOfFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const firstLine = fileContent.split('\n')[0];
  const cleanLine = firstLine.trim().replace(/<!--(.*?)-->/g, "$1"); // remove HTML comments
  return cleanLine || firstLine.trim();
};

const metadata = getPostMetadata();
fs.writeFileSync(outputFile, JSON.stringify(metadata, null, 2));

console.log('build finished!');

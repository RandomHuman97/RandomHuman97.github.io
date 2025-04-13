const fs = require('fs');
const path = require('path');
const postsDir = path.join(__dirname, 'public/rawposts');

const outputFile = path.join(__dirname, 'public/postsMetadata.json');
// get all posts
const getPostMetadata = () => {
  const files = fs.readdirSync(postsDir);
  const metadata = [];
  
  files.forEach(file => {
    if (file.endsWith('.html')) {
      const fullPath = path.join(postsDir, file);
      const stats = fs.statSync(fullPath);
      
      const firstLine = getFirstLineOfFile(fullPath);

      metadata.push({
        filename: file,
        title: file.replace('.html', ''),
        date: stats.ctime.toISOString(),
        firstLine: firstLine, 
      });
    }
  });

  return metadata;
};

const getFirstLineOfFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const firstLine = fileContent.split('\n')[0];

  const cleanLine = firstLine.trim().replace(/<!--(.*?)-->/g, "$1"); //remove comment from first line
  return cleanLine || firstLine.trim();
};

const metadata = getPostMetadata();
fs.writeFileSync(outputFile, JSON.stringify(metadata, null, 2));

console.log('build finished!');

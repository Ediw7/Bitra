const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Switch dark mode hardcoded tailwind classes to dynamic/light ones
    content = content.replace(/text-white/g, 'text-foreground');
    content = content.replace(/border-white/g, 'border-foreground');
    content = content.replace(/bg-white/g, 'bg-foreground');
    content = content.replace(/from-white/g, 'from-foreground');
    content = content.replace(/bg-\[\#141414\]/g, 'bg-white');

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed theme in:', file);
    }
  }
});

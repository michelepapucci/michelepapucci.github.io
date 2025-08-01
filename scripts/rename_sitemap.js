import fs from 'fs';
import path from 'path';

const oldPath = path.resolve('./dist/sitemap-0.xml');
const newPath = path.resolve('./dist/sitemap.xml');

const INDEX = path.resolve('./dist/sitemap-index.xml');


if (fs.existsSync(oldPath)) {
  fs.renameSync(oldPath, newPath);
  console.log('✅ Sitemap renamed to mysitemap.xml');
} else {
  console.warn('⚠️ sitemap.xml not found in dist/');
}


if (fs.existsSync(INDEX)) {
  let content = fs.readFileSync(INDEX, 'utf-8');

  // Replace internal link
  content = content.replace('sitemap-0.xml', 'sitemap.xml');

  // Write to new index file
  fs.writeFileSync(INDEX, content, 'utf-8');
  console.log('✅ Updated sitemap-index internal link');
} else {
  console.warn('⚠️ sitemap-index.xml not found');
}
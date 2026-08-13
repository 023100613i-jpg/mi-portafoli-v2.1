const fs = require('fs');
const path = require('path');

console.log('📸 Copiando imágenes...');

// Función para copiar directorios recursivamente
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ ${entry.name}`);
        }
    }
}

// Copiar la carpeta image completa
const srcImageDir = path.join(__dirname, '..', 'public', 'image');
const destImageDir = path.join(__dirname, '..', 'out', 'image');

if (fs.existsSync(srcImageDir)) {
    console.log('📁 Copiando imágenes de public/image/ a out/image/');
    copyDir(srcImageDir, destImageDir);
    console.log('✅ Imágenes copiadas exitosamente');
} else {
    console.log('❌ No se encontró la carpeta public/image/');
}

// Copiar favicon.png
const faviconSrc = path.join(__dirname, '..', 'public', 'favicon.png');
const faviconDest = path.join(__dirname, '..', 'out', 'favicon.png');
if (fs.existsSync(faviconSrc)) {
    fs.copyFileSync(faviconSrc, faviconDest);
    console.log('✅ favicon.png copiado');
}

const fs = require('fs').promises;
const path = require('path');

const readFile = async (filePath, splitter = '\n') => {
    const out = await fs.readFile(path.join(__dirname, filePath), { encoding: 'utf8' })
    return out.split(splitter);
}

module.exports = readFile;
const fs = require('fs').promises;
const path = require('path');
const { getNode } = require('./general/data')

const readFile = async (filePath, splitter = '\n') => {
    const out = await fs.readFile(path.join(__dirname, filePath), { encoding: 'utf8' })
    return out.split(splitter);
}

const solveBinTree = (dfsFn, bfsFn, recursiveFn) => {
    const node = getNode();
    const dfsVal = dfsFn(node);
    const bfsVal = bfsFn(node);
    const recursiveVal = recursiveFn(node);
    return `dfsVal: ${dfsVal}, bfsVal: ${bfsVal}, recursiveVal: ${recursiveVal}`
}

module.exports = { readFile, solveBinTree };
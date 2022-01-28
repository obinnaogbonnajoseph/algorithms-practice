const fs = require('fs').promises;
import path from 'path';
import { BinTreeNode, getBinTreeRootNode as getNode } from './general/data';

const readFile = async (filePath: string, splitter = '\n') => {
    const out = await fs.readFile(path.join(__dirname, filePath), { encoding: 'utf8' })
    return out.split(splitter);
}

const solveBinTree = (dfsFn: (node: BinTreeNode) => boolean | number,
    bfsFn: (node: BinTreeNode) => boolean | number,
    recursiveFn: (node: BinTreeNode) => boolean | number) => {
    const node = getNode();
    const dfsVal = dfsFn(node);
    const bfsVal = bfsFn(node);
    const recursiveVal = recursiveFn(node);
    return `dfsVal: ${dfsVal}, bfsVal: ${bfsVal}, recursiveVal: ${recursiveVal}`
}

module.exports = { readFile, solveBinTree };
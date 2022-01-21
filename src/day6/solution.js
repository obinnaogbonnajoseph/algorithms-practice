const { readFile } = require('../exports');

const solve = async () => {
    const file = './day6/prob.txt';
    const splitter = '\n\n';
    const peopleAns = await readFile(file, splitter);
    let intCount = 0, uniCount = 0;
    for (let group of peopleAns) {
        intCount += intersectCount(group);
        uniCount += unionCount(group);
    }
    return `intersect count: ${intCount}, union count: ${uniCount}`;
}

const unionCount = (group) => new Set(group.split('\n').join('')).size

const intersectCount = (group) => {
    let count = 0;
    const lines = group.split('\n');
    let intersectionSet = new Set(lines[0]);
    for (let line of lines.slice(1)) {
        const lineSet = new Set(line);
        count += intersect(intersectionSet, lineSet);
    }
    return count;
}

const intersect = (set1, set2) => {
    const set = new Set();
    for (item of set1) {
        if (set2.has(item)) set.add(item)
    }
    return set.size;
}

solve().then(console.log);
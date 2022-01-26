const { graphData } = require('./data')

const depthFirstTraverse = (graph, source) => {
    const stack = [source];
    while (stack.length) {
        const cur = stack.pop();
        console.log(cur);
        stack.push(...graph[cur])
    }
}

console.log(depthFirstTraverse(graphData, 'a'))
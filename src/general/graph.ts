import { Graph, graphData } from './data';

const depthFirstTraverse = (graph: Graph, source: string) => {
    const stack = [source];
    while (stack.length) {
        const cur = stack.pop();
        console.log(cur);
        stack.push(...graph[cur])
    }
}

console.log(depthFirstTraverse(graphData, 'a'))
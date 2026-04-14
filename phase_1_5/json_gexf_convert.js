const Graph = require('graphology');
const gexf = require('graphology-gexf');
const fs = require('fs');

try {
    // 1. Load your raw JSON
    const jsonData = JSON.parse(fs.readFileSync('./graph-data.json', 'utf8'));

    // 2. Initialize the graph
    const graph = new Graph();

    // 3. Import the data
    // Note: If your JSON isn't in standard Graphology format, 
    // we use graph.import(jsonData) assuming it follows the spec.
    graph.import(jsonData);

    // 4. Generate GEXF string
    const gexfString = gexf.write(graph);

    // 5. Save to disk
    fs.writeFileSync('./graph-data.gexf', gexfString);

    console.log('✅ Success! created data.gexf');
    console.log(`Nodes: ${graph.order} | Edges: ${graph.size}`);
} catch (error) {
    console.error('❌ Error during conversion:', error.message);
    console.log('\nTip: Ensure your JSON has "nodes" and "edges" keys.');
}

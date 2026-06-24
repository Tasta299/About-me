document.addEventListener('DOMContentLoaded', async () => {
    const data = await loadData();
    if (data) {
        const nodeData = Parser.getNodeData(data, CONFIG.PROJECT_ID);
        const projectName = Parser.getProjectName(data, CONFIG.PROJECT_ID);
        if (nodeData) {
            Renderer.renderNode(nodeData, projectName);
        } else {
            console.error("Node data not found for ID:", CONFIG.PROJECT_ID);
        }
    } else {
        console.error("Failed to load data for Node.");
    }
});

const Parser = {
    getHubData: function(data) {
        return data && data.hub ? data.hub : null;
    },
    getNodeData: function(data, projectId) {
        return data && data.nodes ? data.nodes[projectId] : null;
    }
};

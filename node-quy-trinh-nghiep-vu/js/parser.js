const Parser = {
    getNodeData: function(data, projectId) {
        return data && data.nodes ? data.nodes[projectId] : null;
    },
    getProjectName: function(data, projectId) {
        if (!data || !data.hub || !data.hub.featured_projects) return "Case Study";
        const proj = data.hub.featured_projects.find(p => p.id === projectId);
        return proj ? proj.name : "Case Study";
    }
};

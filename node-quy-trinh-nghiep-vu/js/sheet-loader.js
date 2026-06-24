async function loadData() {
    try {
        const response = await fetch(CONFIG.DATA_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Could not load data:", error);
        return null;
    }
}

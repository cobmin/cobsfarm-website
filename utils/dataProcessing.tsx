type ReportItem = [string, string, number, string]; // Add string type for the image URL

// Modify sortAndPrepareData to include the experience value
export function sortAndPrepareData(data: ReportItem[]): [string, string, number][] {
    data.sort((a, b) => b[2] - a[2]);
    return data.map(item => [item[0], item[1], item[2]]);
}
export function getDistinctData(data: ReportItem[]): ReportItem[] {
    const unique = new Map<string, ReportItem>();
    data.forEach((item) => {
        unique.set(item[1], item); // Use the NFT as the key to ensure distinct values
    });
    return Array.from(unique.values());
}

export default async function getData(request: string) {
    const res = await fetch(request);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }   

    return res.json();
}

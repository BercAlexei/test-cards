const getResource = async (url) => {
    let res = await fetch(url);
    
    return await res.json();
};

export { getResource };
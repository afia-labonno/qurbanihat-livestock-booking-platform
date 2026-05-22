
// featured animals data fetching:
export const getFeatured = async () => {
    const res = await fetch('https://qurbanihat-server-dkeu.onrender.com/featured');
    const data = await res.json();
    return data;
}

// qurbani Tips data fetching
export const getTips = async()=>{
    const res = await fetch('https://qurbanihat-server-dkeu.onrender.com/qurbaniTips');
    const data = await res.json();
    return data;
}

// animals data fetching
export const getAnimals = async()=>{
    const res = await fetch('https://qurbanihat-server-dkeu.onrender.com/animals');
    const data = await res.json();
    return data ;
}

// get animals by ID - for details page
export const getAnimalsById = async(animalId)=>{
    const res = await fetch(`https://qurbanihat-server-dkeu.onrender.com/animals/${animalId}`);
    const data = await res.json();
    return data ;
}

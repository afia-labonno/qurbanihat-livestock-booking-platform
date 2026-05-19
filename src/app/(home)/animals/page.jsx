
import AnimalsClient from '@/components/shared/AnimalsClient';
import { getAnimals } from '@/lib/data';
import React from 'react';


const AnimalsPage = async () => {
    
    const animals = await getAnimals();
    // console.log("Animals: ", animals);

    
    return (
        <AnimalsClient animals={animals}/> 
    );
};

export default AnimalsPage;
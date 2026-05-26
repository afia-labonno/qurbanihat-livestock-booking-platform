
import AnimalsClient from '@/components/shared/AnimalsClient';
import { getAnimals } from '@/lib/data';
import React from 'react';


const AnimalsPage = async ({searchParams}) => {

    // console.log("params:", params);
    
    const animals = await getAnimals();
    // console.log("Animals: ", animals);

    const params = await searchParams;

    const type = params?.type

    const filteredAnimals = type
            ? animals.filter((animal)=> animal.type.toLowerCase() === type.toLowerCase())
            : animals ; 

    
    return (
        <AnimalsClient animals={filteredAnimals}/> 
    );
};

export default AnimalsPage;
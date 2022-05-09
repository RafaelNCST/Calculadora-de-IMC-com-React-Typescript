export type Levels = {
    title: string;
    color: string;
    icon: "down" | "up";
    imc: number[];
    yourIMC?: number; 
}

export const levels:Levels[] = [
    {title: "Magreza", color:"#96A3AB", icon: "down", imc:[0, 18.5]},
    {title: "Normal", color:"#0EAD69", icon: "up", imc:[18.6, 24.9]},
    {title: "Sobrepeso", color:"#E2B039", icon: "down", imc:[25, 30]},
    {title: "Obesidade", color:"#C3423F", icon: "down", imc:[30.1, 99]}
]

export const calculateIMC = (weight: number, height: number) => {
    const imc = weight / (height ** 2);

    for(let level of levels){
        if(imc >= level.imc[0] && imc <= level.imc[1]){
            let levelCopy = {...level};
            levelCopy.yourIMC = parseFloat(imc.toFixed(2));
            return levelCopy
        }
    }

    return null
}
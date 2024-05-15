// ♂♀ are not allowed in the name of the pokemon
// 

export function formatPokemonName(name: string): string {
    if (name.includes("♀")) {
        return name.replace("♀", "-f");
    } else if (name.includes("♂")) {
        return name.replace("♂", "-m");
    } else if (name.includes(".")) {
        return name.replace(".", "-");
    } else if (name.includes("farfetch'd")) {
        return name.replace("farfetch'd", "farfetchd");
    } else return name;
}

export function waintFor(time: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
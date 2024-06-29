elements.rutherfordium = {
    category: "powders",
    state: "solid",
    tempHigh: 2100,
    stateHigh: "molten_rutherfordium",
    density: 17000,
    color: ["#C0C0C0", "#B3B3B3", "#A6A6A6", "#8C8C8C", "#737373"],
    behavior: [
        "XX|CR:radiation%5 AND CR:fallout%0.3|XX",
        "CR:radiation%5 AND CR:fallout%0.3|XX|CR:radiation%5 AND CR:fallout%0.3",
        "M2|M1 AND CR:radiation%5 AND CR:fallout%0.3|M2",
    ],
}

elements.molten_rutherfordium = {
    category: "states",
    state: "liquid",
    hidden: true,
    tempLow: 2100,
    stateLow: "rutherfordium",
    density: 17000,
}

elements.dubnium = {
    category: "solids",
    state: "solid",
    density: 21600,
    color: ["#495057", "#dee2e6", "#ced4da", "#a61e4d"],
    behavior: [
        "XX|CR:radiation%1|XX",
        "CR:radiation%1|XX|CR:radiation%1",
        "XX|CR:radiation%1|XX",
    ],
}

elements.seaborgium = {
    category: "solids",
    state: "solid",
    density: 23500,
    color: ["#ced4da", "#adb5bd", "#868e96", "#339af0", "#4dabf7", "#4263eb", "#3b5bdb", "#1864ab"],
    behavior: [
        "XX|CR:radiation%1|XX",
        "CR:radiation%1|XX|CR:radiation%1",
        "XX|CR:radiation%1|XX",
    ],
}

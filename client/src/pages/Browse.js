import React, { useState } from "react";
import Data from "../components/Data";
import Card from "../components/Card";
import Buttons from "../components/FilterButtons";

const App = () => {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return (
        <>
            <Buttons
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
            />
            <Card item={item} />
        </>
    );
};

export default App;

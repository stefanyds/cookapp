import { ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import Ingredient from "../Ingredient";
import { Fragment, useState } from "react";
import { Selected } from "../Selected";

export default function Ingredients(){
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if(selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value])
        console.log(selected)
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) },
        ])
    }

    return (
        <Fragment>
            <ScrollView 
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            >
                {
                    Array.from({ length: 10}).map((item, index) => (
                        <Ingredient 
                            key={index} 
                            name="Maçã" 
                            image="" 
                            selected={selected.includes(String(index))}
                            onPress={() => handleToggleSelected(String(index))}
                        />
                    ))
                }
            </ScrollView>

            {selected.length > 0 && (
                <Selected 
                quantity={selected.length} 
                onClear={handleClearSelected}
                />
            )}
    
        </Fragment>
    )
}
import { FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";

import { Recipe } from "@/components/Recipe";
import { Ingredients } from "@/components/Ingredients";

export default function Recipes() {
    return <View style={styles.container}>
        <View style={styles.header}>
            <MaterialIcons name="arrow-back" size={32} onPress={() => router.back}/>
            
            <Text style={styles.title}>Ingredientes</Text>
        </View>


        <FlatList 
                data={['1']}
                keyExtractor={item => item}
                renderItem={() => (
                <Recipe 
                    recipe={{
                        name: "Omelete", 
                        image: "https://img.cybercook.com.br/receitas/105/omelete-classica-1-840x480.jpeg?q=75", 
                        minutes: 10,
                        }} 
                    />
                )}
            />

    </View>
}
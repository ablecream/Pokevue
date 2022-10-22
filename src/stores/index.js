import { defineStore } from "pinia";

import pokemon from "@/store/modules/pokemon";
import species from "@/store/modules/species";

export const useStore = defineStore('main', {
    modules: {
        pokemon, 
        species
    }
});
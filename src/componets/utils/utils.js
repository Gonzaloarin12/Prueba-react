import { useState } from "react";
import DATA from "../mock/data.json";


export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(DATA);
    }, 1000);
    });

}
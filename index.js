const express = require('express');
const app = express();
const port = 3000;

const catalogoAutomoviles = [
    {
        marca: "Toyota",
        modelo: "Corolla",
        anio: 2024,
        precio: 420000,
        color: "Blanco"
    },
    {
        marca: "Nissan",
        modelo: "Sentra",
        anio: 2023,
        precio: 385000,
        color: "Negro"
    },
    {
        marca: "Chevrolet",
        modelo: "Aveo",
        anio: 2024,
        precio: 310000,
        color: "Rojo"
    },
    {
        marca: "Volkswagen",
        modelo: "Jetta",
        anio: 2023,
        precio: 475000,
        color: "Gris"
    },
    {
        marca: "Mazda",
        modelo: "Mazda 3",
        anio: 2024,
        precio: 490000,
        color: "Azul"
    }
];

console.log(catalogoAutomoviles);
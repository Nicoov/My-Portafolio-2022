import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbacklng: 'es',
    resources: {
        es: {
            translation: {
                "title": "Sobre Mi",
                "text": "Hola soy Nicolas ingeniero en informática apasionado en desarrollo front-end, vivo en chile en la región de atacama mas específico en la ciudad de Copiapó. Le encontré un cariño al desarrollo desde que hice mi practica profesional, siempre estoy en constante aprendizaje, dado que no me considero el mejor programador. Mi objetivo es ampliar mis conocimientos y crecer en el ámbito profesional. Cuando no estoy estudiando o programando me gusta estar jugando videojuegos con mis amigos por discord.",
                "tecnologias": "Tecnologías",
                "text-tecn": "Actualmente estas son las tecnologías con las que tengo conocimiento y las cuales me siento cómodo trabajando. Ahora sigo mejorando mi forma de programar y aprendiendo nuevas tecnologías.",
                "proyectos": "Proyectos realizados",
                "about-pro": "En mi práctica profesional trabaje en TenisUp que es una aplicación web y móvil sobre la comunidad del tenis, donde se encuentran torneos, canchas y jugadores.",
                'about-pro-2': "Creación de un bot de discord propio para mostrar la información de doramas como su descripción, valoración e imagen.",
                'about-pro-3': "Creación de un supermercado utilizando JavaScript puro y consultas MySQL para la obtención de los productos.",
                "view": "Ver proyecto",
                "view-2": "Ver codigo",
                "view-3": "Ver codigo",
                "about": "Ingeniero en informática / Front End JR"
            }
        },
        en: {
            translation: {
                "title": "About Me",
                "text": "Hi I'm Nicolas computer engineer passionate about front-end development, I live in chile in the atacama region more specifically in the city of Copiapo. I found a love for development since I did my internship, I am always learning, since I do not consider myself the best programmer. My goal is to expand my knowledge and grow professionally. When I'm not studying or programming I like to be playing videogames with my friends on discord.",
                "tecnologias": "Technologies",
                "text-tecn": "Currently these are the technologies that I am knowledgeable with and comfortable working with. Now I keep improving my way of programming and learning new technologies.",
                "proyectos": "Projects completed",
                "about-pro": "In my internship I worked on TenisUp which is a web and mobile application about the tennis community, where you can find tournaments, courts and players.",
                'about-pro-2': "Creation of an own discord bot to display dorama information such as description, rating and image.",
                'about-pro-3': "Creation of a supermarket using pure JavaScript and MySQL queries to obtain the products.",
                "view": "See proyect",
                "view-2": "View code",
                "view-3": "View code",
                "about": "Computer Engineer / Front End JR"
            }
        }
    }

})
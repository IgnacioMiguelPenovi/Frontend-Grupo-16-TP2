# TP2 - Donuts & Code

## Descripción

**Donuts & Code** es una aplicación web temática de *Los Simpsons*, construida con **React 19** y **Vite 8**. El sitio recrea la casa de la familia Simpson, donde cada integrante del equipo tiene su propia "habitación" con un personaje asociado, un escenario SVG artesanal, perfil personal (bio, películas y discos favoritos), proyectos de GitHub (consumo de API) y un widget interactivo único.

La app incluye navegación SPA con React Router, una sidebar compartida, modo noche/día persistente, un buscador de personajes con filtrado sobre datos locales (JSON) y consulta a una API externa (The Simpsons API), una bitácora visual del avance del proyecto y una página 404 personalizada.

## Sitio publicado

- Vercel: [https://frontend-grupo-16-tp-2.vercel.app/](https://frontend-grupo-16-tp-2.vercel.app/)

## Repositorio 

- Github: [https://github.com/IgnacioMiguelPenovi/Frontend-Grupo-16-TP2.git](https://github.com/IgnacioMiguelPenovi/Frontend-Grupo-16-TP2.git)


## Integrantes

| Nombre y apellido | Perfil de GitHub |
| --- | --- |
| Ignacio Miguel Penovi | [https://github.com/IgnacioMiguelPenovi](https://github.com/IgnacioMiguelPenovi) |
| Eliana Moguilevsky | [https://github.com/ElianaMoguilevsky](https://github.com/ElianaMoguilevsky) |
| Ester Mosquera | [https://github.com/Kira-Blan](https://github.com/Kira-Blan) |
| Celeste Di Leonardo | [https://github.com/mcdileonardo-alt](https://github.com/mcdileonardo-alt) |

## Uso de IA

| Aplicación utilizada | Modelo utilizado |
| --- | --- |
| Antigravity | Claude Opus y Argon |
| Chat GPT | Luna 6 y Terra 5.6 |
| Gemini Notebook | Gemini 2.5 |

<!-- Agreguen las herramientas que usaron. Aplicación y modelo son datos distintos. -->

---

### Índice

- [Descripción](#descripción)
- [Sitio publicado](#sitio-publicado)
- [Integrantes](#integrantes)
- [Uso de IA](#uso-de-ia)
- [Responsabilidades](#responsabilidades)
- [Uso de IA por integrante](#uso-de-ia-por-integrante)

### Responsabilidades

| Integrante | Responsabilidad en el proyecto |
| --- | --- |
| Ignacio Miguel Penovi | Migración de algunos elementos a Vite desde html y desarrollo general. |
| Eliana Moguilevsky | Migración de los elementos de la room de Eliana a React, página 404/fallbacks, estructuración de dataset local (personajes.json), buscador + integración con Api pública (thesimpsonsapi.com), diseño de componente modal, debugging |
| Ester Mosquera | Migración de la portada y de la room de Ester a React, creación de la interacción del buzón de la portada, botón del modo día/noche y creación de la sección Proyectos de GitHub consumiendo su api pública para renderizar los proyectos desde los repositorios y creación del árbol renderizado. |
| Celeste Di Leonardo | Perfil de Maggie en React (contenido, diseño y estilos), carga de los años de los discos y películas, modificación del juego y fork de los repositorios de la cursada. |

### Uso de IA por integrante

| Integrante | Aplicación | Modelo |
| --- | --- | --- |
| Ignacio Miguel Penovi |  Se utilizó para acelerar el proceso de migración a Vite y la creación de estilos en css| Claude Opus y Argon | 
| Ester Mosquera |  Se utilizó para el proceso de migración a React , ajustes en los estilos en css y para crear el árbol renderizado, la sección proyectos en las rooms y el modo noche/día| Claude Opus 4.6 y Chat GPT Luna 6 y Terra 5.6| 
| Eliana Moguilevsky | Se utilizó como copiloto para la migración a React, desarrollo del buscador de personajes (consumo de API pública + JSON local), diseño del modal y debugging general  | Gemini Notebook y Gemini 2.5  | 
| Celeste Di Leonardo | Claude (claude.ai) y Gemini: se utilizaron para armar la estructura, el contenido y los estilos del perfil de Maggie, y para entender, modificar y corregir errores del juego. | Claude Sonnet 5.5 y Gemini 2.5 Pro |

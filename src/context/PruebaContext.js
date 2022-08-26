import { createContext } from "react";
// importamos createContext()

/* Vamos a crear el proveedor decontexto que se va a estar compartiendo entre
   los componentes,son componentes superiores aquellos que vienen directamente
    de React, prestablecidos, como por ejemplo Route NavLink etc (color verde), */

   export const PruebaContext = createContext(null);
  
import { createContext, useContext } from "react";

const appContext = createContext();

function useAppContext() {
    return useContext(appContext)
}

export {appContext, useAppContext}
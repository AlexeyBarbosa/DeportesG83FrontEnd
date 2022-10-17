import { HOST } from "../utils";

export const getEventos = async () => {
    return await fetch(`${HOST}/api/eventos/list`);
}
import { parseCookies } from "nookies";
import { Response } from "./common-interfaces";

export const postMethod = async (url: string, payload: any): Promise<Response | any> => {
    const environment = process.env.NODE_ENV;
    const apiUrl = environment == 'development' ? `${process.env.devlopementDomain}${url}` : `${process.env.productionDomian}${url}`
    const cookies = parseCookies();
    const token = cookies?.access_token;
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? `Bearer ${token}` : '',
            },
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json: any = await response?.json();
        return json;
    } catch (error) {
        console.error('Error in postMethod:', error);
        return {
            data: '',
            status: 'failure',
            message: 'An unexpected error occurred.',
        };
    }
}

export const getMethod = async (url: string, payload: any): Promise<Response | any> => {
    const environment = process.env.NODE_ENV;
    const apiUrl = environment == 'development' ? `${process.env.devlopementDomain}${url}` : `${process.env.productionDomian}${url}`
    const cookies = parseCookies();
    const token = cookies?.access_token;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? `Bearer ${token}` : '',
            },
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json: any = await response?.json();
        return json;
    } catch (error) {
        console.error('Error in postMethod:', error);
        return {
            data: '',
            status: 'failure',
            message: 'An unexpected error occurred.',
        };
    }
}

export const patchMethod = async (url: string, payload: any): Promise<Response | any> => {
    const environment = process.env.NODE_ENV;
    const apiUrl = environment == 'development' ? `${process.env.devlopementDomain}${url}` : `${process.env.productionDomian}${url}`
    const cookies = parseCookies();
    const token = cookies?.access_token;
    try {
        const response = await fetch(apiUrl, {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? `Bearer ${token}` : '',
            },
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json: any = await response?.json();
        return json;
    } catch (error) {
        console.error('Error in postMethod:', error);
        return {
            data: '',
            status: 'failure',
            message: 'An unexpected error occurred.',
        };
    }
}

export const deleteMethod = async (url: string, payload: any): Promise<Response | any> => {
    const environment = process.env.NODE_ENV;
    const apiUrl = environment == 'development' ? `${process.env.devlopementDomain}${url}` : `${process.env.productionDomian}${url}`
    const cookies = parseCookies();
    const token = cookies?.access_token;
    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? `Bearer ${token}` : '',
            },
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json: any = await response?.json();
        return json;
    } catch (error) {
        console.error('Error in postMethod:', error);
        return {
            data: '',
            status: 'failure',
            message: 'An unexpected error occurred.',
        };
    }
}
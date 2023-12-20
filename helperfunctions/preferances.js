import axios from 'axios';
// import * as dotenv from 'dotenv' 
// dotenv.config()

const defaultState = {
    language: 'en',
    system: 'ERISITE',
    theme: 'dark',
    expandedGlobalNavItems: []
};

export const updateUserPreferences = async (state = {}) => {

    const cookies = await browser.getCookies()
    // const hostname = process.env.ENV_NAME === 'PROD' ? '***************************' : '****************************'
    const hostname ='***************************************'
    // const signum = process.env.SIGNUM;
    const signum = 'eunsahr'

    const endpoint = `https://${hostname}/user-management/api/user-info/user-preferences/${signum}`;

    const headers = {
        Cookie: cookies.map(({ name, value }) => [name, value].join('=')).join('; '),
        'Content-Type': 'application/json',
    };

    const data = { version: '1', ...defaultState, ...state };

    await axios.put(endpoint, data, { headers });

    await browser.refresh()
};

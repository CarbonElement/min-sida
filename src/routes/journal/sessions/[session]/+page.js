
/* don't generate these pages at build time as we want to get the latest data from the API when a user navigates here */
export const ssr = false;
export const prerender = false;
/** @type {import('./$types').PageLoad} */
export async function load({ params}) {

    console.log(params.session);

    return { params}; // return the params object so we can use it in the template

}



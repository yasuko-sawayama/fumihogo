/* eslint-disable import/prefer-default-export */

export const pageTitle = (pages, id) => pages.find(page => page.id === Number(id)).title;

/* eslint-disable import/prefer-default-export */

const ROOT_PATH = `${location.protocol}//${location.host}`;

export const redirectToRoot = () => location.href = ROOT_PATH;


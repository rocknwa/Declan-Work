import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const toCamelCase = (obj) => {
  const camelCaseObj = {};
  for (const key in obj) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    camelCaseObj[camelKey] = obj[key];
  }
  return camelCaseObj;
};


// Utility to check if online
export const checkOnline = () => {
  return navigator.onLine;
};

// Utility function to shorten an account address
export function shortenAddress(address) {
  if (!address) return ''; // Handle invalid addresses
  const start = address.slice(0, 6);
  const end = address.slice(-4);
  return `${start}...${end}`;
}
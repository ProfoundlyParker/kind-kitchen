import { writable } from "svelte/store";

// Global state/store for navigation menu on small screens
export const openModal = writable(false);
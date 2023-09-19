//import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.idanggota === '1') {
		return {
			namaanggota: 'Nanda'
		};
	} else if (params.idanggota === '2') {
		return {
			namaanggota: 'Noel'
		};
	}

	throw error(404, 'Not found');
}

export const getImage = (x?: number, y?: number, color?: string): string => {
	if (!x && !y && !color) {
		return `https://placehold.co/100x100`;
	} else if (x && !y) {
		return `https://placehold.co/${x}x${x}`;
	} else if (x && y) {
		return `https://placehold.co/${x}x${y}`;
	} else if (x && y && color) {
		return `https://placehold.co/${x}x${y}/${color}/FFFFFF`;
	} else {
		return 'Не хватает параметров'
	}
}
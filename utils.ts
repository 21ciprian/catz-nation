export const generateOriginArray = (data: any[]) => {
	return Array.from(new Set(data.map(c => c.origin))).sort()
}
export const generateLifespanArray = (data: any[]) => {
	return Array.from(new Set(data.map(c => c.life_span))).sort(
		(a: any, b: any) => Number(a.split('-')[0]) - Number(b.split('-')[0])
	)
}
export const generateWeightArray = (data: any[]) => {
	return Array.from(new Set(data.map(c => c.weight.metric))).sort()
}
export const filterCatsByName = (data: any[], name: string) => {
	return data?.filter(cat =>
		cat?.name?.toLocaleLowerCase().includes(name.toLowerCase())
	)
}
export const filterCatsByOrigin = (data: any[], origin: string) => {
	return data?.filter(cat =>
		cat?.origin?.toLocaleLowerCase().includes(origin.toLowerCase())
	)
}
export const filterCatsByLifespan = (data: any[], lifespan: string) => {
	return data?.filter(cat =>
		cat?.life_span?.toLocaleLowerCase().includes(lifespan.toLowerCase())
	)
}
export const filterCatsByWeight = (data: any[], weight: string) => {
	return data?.filter(cat =>
		cat?.weight?.metric?.toLocaleLowerCase().includes(weight.toLowerCase())
	)
}

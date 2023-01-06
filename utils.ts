import {ICat} from './pages/index'
export const generateOriginArray = (data: ICat[]) => {
	return Array.from(new Set(data.map(c => c.origin))).sort()
}
export const generateLifespanArray = (data: ICat[]) => {
	return Array.from(new Set(data.map(c => c.life_span))).sort(
		(a: any, b: any) => Number(a.split('-')[0]) - Number(b.split('-')[0])
	)
}
export const generateWeightArray = (data: ICat[]) => {
	return Array.from(new Set(data.map(c => c.weight.metric))).sort()
}
export const filterCatsByName = (data: ICat[], name: string) => {
	return data?.filter(cat =>
		cat?.name?.toLocaleLowerCase().includes(name.toLowerCase())
	)
}
export const filterCatsByOrigin = (data: ICat[], origin: string) => {
	return data?.filter(cat =>
		cat?.origin?.toLocaleLowerCase().includes(origin.toLowerCase())
	)
}
export const filterCatsByLifespan = (data: ICat[], lifespan: string) => {
	return data?.filter(cat =>
		cat?.life_span?.toLocaleLowerCase().includes(lifespan.toLowerCase())
	)
}
export const filterCatsByWeight = (data: ICat[], weight: string) => {
	return data?.filter(cat =>
		cat?.weight?.metric?.toLocaleLowerCase().includes(weight.toLowerCase())
	)
}
export const playMeow = (sound: any) => {
	sound.current?.play()
}

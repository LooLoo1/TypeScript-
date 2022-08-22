type ID = string;
type PopularTag = string;
type MaybePopularTag = string | null;

interface UserInterface{
	id: ID;
	name: string;
	surname: string | null;
}

const popularTags: PopularTag[] = ["dragon", "fenix"];

const dragonsTag: MaybePopularTag = "dragon";

let userName: string = "Vitalik";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let someProp: string | number | null | undefined | string[] | object;

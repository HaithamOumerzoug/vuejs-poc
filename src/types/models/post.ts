export default interface Post {
    id: number;
    title: string;
    body: string;
    userId?:number | null; // optional just for now
}
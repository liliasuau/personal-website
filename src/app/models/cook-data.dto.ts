export class CookData {
    public id: number;
    public categoryId: number;
    public src: ImageInfo[] = [];
    public more?: string;
    public title?: string;
    public subtitle?: string;
    public description?: string;
    public options?: string[] = [];
}

export class ImageInfo {
    public id: number;
    public name: string;
    public viewing: boolean;
}
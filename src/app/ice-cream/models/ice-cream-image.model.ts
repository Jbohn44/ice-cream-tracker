class IceCreamImage {
    ImageId?: number;
    IceCreamId?: number;
    Src: string;
    Image: File;
    Description?: string;

    constructor(Fields?: Partial<IceCreamImage>){
        this.ImageId = Fields.ImageId;
        this.IceCreamId = Fields.IceCreamId;
        this.Src = Fields.Src;
        this.Image = Fields.Image;
        this.Description = Fields.Description;

    }
}
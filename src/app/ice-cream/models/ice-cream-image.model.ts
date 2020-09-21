class IceCreamImage {
    ImageId?: number;
    IceCreamId?: number;
    Image: string;
    Description?: string;

    constructor(Fields?: Partial<IceCreamImage>){
        this.ImageId = Fields.ImageId;
        this.IceCreamId = Fields.IceCreamId;
        this.Image = Fields.Image;
        this.Description = Fields.Description;
    }
}
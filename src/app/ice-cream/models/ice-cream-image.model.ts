class IceCreamImage {
    ImageId?: number;
    IceCreamId?: number;
    Image: any;
    Description?: string;

    constructor(Fields?: Partial<IceCreamImage>){
        this.ImageId = Fields.ImageId;
        this.IceCreamId = Fields.IceCreamId;
        this.Image = new Image();
        this.Description = Fields.Description;

    }

    setImage(imageSource) {
        this.Image.src = imageSource;
    }
}
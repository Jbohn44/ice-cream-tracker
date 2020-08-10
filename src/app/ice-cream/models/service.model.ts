export class Service {
    ServiceId?: number;
    ServiceTypeId: number;
    IceCreamId?: number;
    ServiceName?: string;
    constructor(Fields?: Partial<Service>) {
        this.ServiceId = Fields.ServiceId,
            this.ServiceTypeId = Fields.ServiceTypeId,
            this.IceCreamId = Fields.IceCreamId,
            this.ServiceName = Fields.ServiceName
    }
}
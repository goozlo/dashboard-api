import 'reflect-metadata'

function Inject(key: string) {
    return (target: Function) => {
        Reflect.defineMetadata(key, 1, target)
        const meta = Reflect.getMetadata(key, target)
        console.log(meta)
    }
}

function Prop(target: Object, name: string) {

}

@Inject('C')
export class C {
    @Prop prop: number
}

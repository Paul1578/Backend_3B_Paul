import { PedidoProducto } from "../../pedido/entities/pedidoProducto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre:string;
    
    @Column()
    precio:number;

    @Column()
    stock:number; 
    
    @Column()
    imagen:string;

    @Column()
    descripcion:string; 

    @Column()
    estado: boolean;
    
    @ManyToOne(()=> Categoria, (cat)=>cat.producto)
    categoria: Categoria;

    @OneToMany(()=>PedidoProducto, pedprod=>pedprod.pedido )
    pedidoProducto: PedidoProducto[];

}

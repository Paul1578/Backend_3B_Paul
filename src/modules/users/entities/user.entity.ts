import { Persona } from "../../persona/entities/persona.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    mail: string;
    
    @Column()
    password: string;

    @OneToOne(()=>Persona, persona=>persona.user, {cascade:true})
    @JoinColumn()
    persona:Persona;
}

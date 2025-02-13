import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('ViaAuth')
export class ViaAuth{

   @PrimaryGeneratedColumn('increment')
          ViaAuthID: Number;

   @Column({type:"varchar", length: 20,
          nullable:true
    }) ViaAuth: String;
}
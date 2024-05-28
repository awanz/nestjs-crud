import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users'} )
export class User {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({ unique: true })
    username: String;

    @Column()
    password: String;

    @Column({ nullable: true })
    age: Number;

    @Column({ nullable: true })
    is_active: Boolean;
    
    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
    
}
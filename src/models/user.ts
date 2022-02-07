import {    
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    DataType,
    AllowNull,
    Unique,
    Table,
} from 'sequelize-typescript';

@Table({
    tableName: 'y_user',
    timestamps: true
})
export default class User extends Model<User>{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Unique
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment: '이메일'
    })
    email!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
        comment: '비밀번호'
    })
    password!: string;
}
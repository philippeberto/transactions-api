import { Column, DataType, Default, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({
  tableName: 'accounts',
  createdAt: 'created',
  updatedAt: 'updated'
})
export class Account extends Model{
  @PrimaryKey
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column({allowNull: false})
  name: string;

  @Column({allowNull: false})
  subdomain: string;

  
  @Default(0)
  @Column({allowNull: false, type: DataType.DECIMAL({precision: 10, scale: 2})})
  balance: number;
}

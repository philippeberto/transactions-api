import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Account } from 'src/accounts/entities/account.entity'

export enum TransactionCategory {
  CATEGORY1 = 'category1',
  CATEGORY2 = 'category2'
} 
export const TransactionCategoryList: string[] = Object.values(TransactionCategory)

export enum TransactionType {
  CREDIT = 'credit',
  DEBIT = 'debit'
}
export const TransactionTypeList: string[] = Object.values(TransactionType)


@Table({
  tableName: 'transactions',
  createdAt: 'created',
  updatedAt: 'updated'
})
export class Transaction extends Model{
  @PrimaryKey
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4})
  id: string;

  @Column({allowNull: false})
  name: string;

  @Column({allowNull: false})
  description: string;

  @Column({allowNull: false})
  category: TransactionCategory;

  @Column({allowNull: false, type: DataType.DECIMAL({precision: 10, scale: 2})})
  amount: number;

  @Column({allowNull: false})
  type: TransactionType;

  @Column({allowNull: false})
  payment_date: Date;

  @ForeignKey(() => Account)
  @Column({type: DataType.UUID, defaultValue: DataType.UUIDV4, allowNull: false})
  account_id: string;

  @BelongsTo(() => Account)
  account: Account
}

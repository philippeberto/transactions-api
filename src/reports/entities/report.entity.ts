import { BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Account } from 'src/accounts/entities/account.entity'

export enum ReportStatus {
  PENDING = 'pending',
  COMPLETE = 'complete',
  ERROR = 'error'
}

@Table({
  tableName: 'reports',
  createdAt: 'created',
  updatedAt: 'updated'
})
export class Report extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string

  @Column({ allowNull: false })
  start_date: Date

  @Column({ allowNull: false })
  end_date: Date

  @Column //null
  file_url: string

  @Default(ReportStatus.PENDING)
  @Column({ allowNull: false })
  status: ReportStatus

  @ForeignKey(() => Account)
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, allowNull: false })
  account_id: string

  @BelongsTo(() => Account)
  account: Account
}


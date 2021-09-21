import { IsIn, IsISO8601, IsNotEmpty, IsString, MaxLength } from 'class-validator'
import { TransactionCategory, TransactionCategoryList, TransactionType, TransactionTypeList } from '../entities/transaction.entity'

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;

  @IsNotEmpty()
  @IsIn(TransactionCategoryList)
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsIn(TransactionTypeList)
  type: TransactionType;

  @IsNotEmpty()
  @IsISO8601()
  payment_date: Date;
}

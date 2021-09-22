import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { Transaction } from './transactions/entities/transaction.entity'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TransactionsModule } from './transactions/transactions.module'
import { AccountsModule } from './accounts/accounts.module'
import { Account } from './accounts/entities/account.entity'
import { AuthModule } from './auth/auth.module'
import { TenantModule } from './tenant/tenant.module'
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PW,
      database: process.env.DATABASE_NAME,
      models: [Transaction, Account],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        alter: true,
        //force: true
      }
    }),
    TransactionsModule,
    AccountsModule,
    AuthModule,
    TenantModule,
    ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

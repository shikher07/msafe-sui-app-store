import { TransactionType } from '@msafe/sui3-utils';
import { SuiClient } from '@mysten/sui.js/client';
import { TransactionBlock } from '@mysten/sui.js/transactions';
import { SuiSignTransactionBlockInput, WalletAccount } from '@mysten/wallet-standard';

import { Decoder } from './decoder';
import { BorrowIntention, BorrowIntentionData } from './intentions/borrow';
import { BorrowWithBoostIntention, BorrowWithBoostIntentionData } from './intentions/borrow-with-boost';
import { ClaimIncentiveRewardIntention, ClaimIncentiveRewardIntentionData } from './intentions/claim-incentive-reward';
import { DepositCollateralIntention, DepositCollateralIntentionData } from './intentions/deposit-collateral';
import {
  ExtendPeriodAndStakeMoreIntention,
  ExtendPeriodAndStakeMoreIntentionData,
} from './intentions/extend-period-and-stake-more';
import { ExtendStakePeriodIntention, ExtendStakePeriodIntentionData } from './intentions/extend-stake-period';
import { MigrateAndClaimIntention, MigrateAndClaimIntentionData } from './intentions/migrate-and-claim';
import { OpenObligationIntention, OpenObligationIntentionData } from './intentions/open-obligation';
import { RedeemScaIntention, RedeemScaIntentionData } from './intentions/redeem-sca';
import { RenewExpStakePeriodIntention, RenewExpStakePeriodIntentionData } from './intentions/renew-exp-stake-period';
import { RepayIntention, RepayIntentionData } from './intentions/repay';
import { StakeScaIntention, StakeScaIntentionData } from './intentions/stake-sca';
import { StakeSpoolIntention, StakeSpoolIntentionData } from './intentions/stake-spool';
import {
  SupplyAndStakeLendingIntention,
  SupplyAndStakeLendingIntentionData,
} from './intentions/supply-and-stake-lending';
import { SupplyLendingIntention, SupplyLendingIntentionData } from './intentions/supply-lending';
import { UnstakeSpoolIntention, UnstakeSpoolIntentionData } from './intentions/unstake-spool';
import {
  WithdrawAndUnstakeLendingIntention,
  WithdrawAndUnstakeLendingIntentionData,
} from './intentions/withdraw-and-unstake-lending';
import { WithdrawCollateralIntention, WithdrawCollateralIntentionData } from './intentions/withdraw-collateral';
import { WithdrawLendingIntention, WithdrawLendingIntentionData } from './intentions/withdraw-lending';
import { WithdrawStakedScaIntention, WithdrawStakedScaIntentionData } from './intentions/withdraw-staked-sca';
import { ScallopBuilder } from './models';
import { SuiNetworks } from './types';
import { TransactionSubType } from './types/utils';
import { MSafeAppHelper } from '../interface';

export type ScallopIntention =
  | SupplyLendingIntention
  | WithdrawLendingIntention
  | BorrowIntention
  | RepayIntention
  | DepositCollateralIntention
  | WithdrawCollateralIntention
  | OpenObligationIntention
  | StakeSpoolIntention
  | UnstakeSpoolIntention
  | ClaimIncentiveRewardIntention
  | BorrowWithBoostIntention
  | StakeScaIntention
  | ExtendStakePeriodIntention
  | ExtendPeriodAndStakeMoreIntention
  | RenewExpStakePeriodIntention
  | WithdrawStakedScaIntention
  | SupplyAndStakeLendingIntention
  | WithdrawAndUnstakeLendingIntention
  | RedeemScaIntention
  | MigrateAndClaimIntention;

export type ScallopIntentionData =
  | SupplyLendingIntentionData
  | WithdrawLendingIntentionData
  | BorrowIntentionData
  | RepayIntentionData
  | DepositCollateralIntentionData
  | WithdrawCollateralIntentionData
  | OpenObligationIntentionData
  | StakeSpoolIntentionData
  | UnstakeSpoolIntentionData
  | ClaimIncentiveRewardIntentionData
  | BorrowWithBoostIntentionData
  | StakeScaIntentionData
  | ExtendStakePeriodIntentionData
  | ExtendPeriodAndStakeMoreIntentionData
  | RenewExpStakePeriodIntentionData
  | WithdrawStakedScaIntentionData
  | SupplyAndStakeLendingIntentionData
  | WithdrawAndUnstakeLendingIntentionData
  | RedeemScaIntentionData
  | MigrateAndClaimIntentionData;

export class ScallopAppHelper implements MSafeAppHelper<ScallopIntentionData> {
  application = 'scallop';

  async deserialize(
    input: SuiSignTransactionBlockInput & { network: SuiNetworks; suiClient: SuiClient; account: WalletAccount },
  ): Promise<{
    txType: TransactionType;
    txSubType: TransactionSubType;
    intentionData: ScallopIntentionData;
  }> {
    const builder = new ScallopBuilder({
      client: input.suiClient,
      walletAddress: input.account.address,
      networkType: input.network.split(':')[1] as any,
    });
    await builder.init();
    const { transactionBlock } = input;
    const decoder = new Decoder(transactionBlock, builder);
    const result = decoder.decode();
    return {
      txType: TransactionType.Other,
      txSubType: result.type,
      intentionData: result.intentionData,
    };
  }

  async build(input: {
    intentionData: ScallopIntentionData;
    txType: TransactionType;
    txSubType: string;
    suiClient: SuiClient;
    account: WalletAccount;
    network: SuiNetworks;
  }): Promise<TransactionBlock> {
    const { suiClient, account, network } = input;
    let intention: ScallopIntention;
    switch (input.txSubType) {
      case TransactionSubType.SupplyLending:
        intention = SupplyLendingIntention.fromData(input.intentionData as SupplyLendingIntentionData);
        break;
      case TransactionSubType.WithdrawLending:
        intention = WithdrawLendingIntention.fromData(input.intentionData as WithdrawLendingIntentionData);
        break;
      case TransactionSubType.Borrow:
        intention = BorrowIntention.fromData(input.intentionData as BorrowIntentionData);
        break;
      case TransactionSubType.Repay:
        intention = RepayIntention.fromData(input.intentionData as RepayIntentionData);
        break;
      case TransactionSubType.DepositCollateral:
        intention = DepositCollateralIntention.fromData(input.intentionData as DepositCollateralIntentionData);
        break;
      case TransactionSubType.WithdrawCollateral:
        intention = WithdrawCollateralIntention.fromData(input.intentionData as WithdrawCollateralIntentionData);
        break;
      case TransactionSubType.OpenObligation:
        intention = OpenObligationIntention.fromData(input.intentionData as OpenObligationIntentionData);
        break;
      case TransactionSubType.StakeSpool:
        intention = StakeSpoolIntention.fromData(input.intentionData as StakeSpoolIntentionData);
        break;
      case TransactionSubType.UnstakeSpool:
        intention = UnstakeSpoolIntention.fromData(input.intentionData as UnstakeSpoolIntentionData);
        break;
      case TransactionSubType.ClaimIncentiveReward:
        intention = ClaimIncentiveRewardIntention.fromData(input.intentionData as ClaimIncentiveRewardIntentionData);
        break;
      case TransactionSubType.BorrowWithBoost:
        intention = BorrowWithBoostIntention.fromData(input.intentionData as BorrowWithBoostIntentionData);
        break;
      case TransactionSubType.StakeSca:
        intention = StakeScaIntention.fromData(input.intentionData as StakeScaIntentionData);
        break;
      case TransactionSubType.ExtendStakePeriod:
        intention = ExtendStakePeriodIntention.fromData(input.intentionData as ExtendStakePeriodIntentionData);
        break;
      case TransactionSubType.ExtendPeriodAndStakeMore:
        intention = ExtendPeriodAndStakeMoreIntention.fromData(
          input.intentionData as ExtendPeriodAndStakeMoreIntentionData,
        );
        break;
      case TransactionSubType.RenewExpStakePeriod:
        intention = RenewExpStakePeriodIntention.fromData(input.intentionData as RenewExpStakePeriodIntentionData);
        break;
      case TransactionSubType.WithdrawStakedSca:
        intention = WithdrawStakedScaIntention.fromData(input.intentionData as WithdrawStakedScaIntentionData);
        break;
      case TransactionSubType.SupplyAndStakeLending:
        intention = SupplyAndStakeLendingIntention.fromData(input.intentionData as SupplyAndStakeLendingIntentionData);
        break;
      case TransactionSubType.WithdrawAndUnstakeLending:
        intention = WithdrawAndUnstakeLendingIntention.fromData(
          input.intentionData as WithdrawAndUnstakeLendingIntentionData,
        );
        break;
      case TransactionSubType.RedeemSca:
        intention = RedeemScaIntention.fromData(input.intentionData as RedeemScaIntentionData);
        break;
      case TransactionSubType.MigrateAndClaim:
        intention = MigrateAndClaimIntention.fromData(input.intentionData as MigrateAndClaimIntentionData);
        break;
      default:
        throw new Error('not implemented');
    }
    return intention.build({ suiClient, account, network });
  }
}

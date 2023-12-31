/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type JBTokenAmountStruct = {
  token: string;
  value: BigNumberish;
  decimals: BigNumberish;
  currency: BigNumberish;
};

export type JBTokenAmountStructOutput = [
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  token: string;
  value: BigNumber;
  decimals: BigNumber;
  currency: BigNumber;
};

export type JBDidPayData3_1_1Struct = {
  payer: string;
  projectId: BigNumberish;
  currentFundingCycleConfiguration: BigNumberish;
  amount: JBTokenAmountStruct;
  forwardedAmount: JBTokenAmountStruct;
  projectTokenCount: BigNumberish;
  beneficiary: string;
  preferClaimedTokens: boolean;
  memo: string;
  dataSourceMetadata: BytesLike;
  payerMetadata: BytesLike;
};

export type JBDidPayData3_1_1StructOutput = [
  string,
  BigNumber,
  BigNumber,
  JBTokenAmountStructOutput,
  JBTokenAmountStructOutput,
  BigNumber,
  string,
  boolean,
  string,
  string,
  string
] & {
  payer: string;
  projectId: BigNumber;
  currentFundingCycleConfiguration: BigNumber;
  amount: JBTokenAmountStructOutput;
  forwardedAmount: JBTokenAmountStructOutput;
  projectTokenCount: BigNumber;
  beneficiary: string;
  preferClaimedTokens: boolean;
  memo: string;
  dataSourceMetadata: string;
  payerMetadata: string;
};

export type JBDidRedeemData3_1_1Struct = {
  holder: string;
  projectId: BigNumberish;
  currentFundingCycleConfiguration: BigNumberish;
  projectTokenCount: BigNumberish;
  reclaimedAmount: JBTokenAmountStruct;
  forwardedAmount: JBTokenAmountStruct;
  beneficiary: string;
  memo: string;
  dataSourceMetadata: BytesLike;
  redeemerMetadata: BytesLike;
};

export type JBDidRedeemData3_1_1StructOutput = [
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  JBTokenAmountStructOutput,
  JBTokenAmountStructOutput,
  string,
  string,
  string,
  string
] & {
  holder: string;
  projectId: BigNumber;
  currentFundingCycleConfiguration: BigNumber;
  projectTokenCount: BigNumber;
  reclaimedAmount: JBTokenAmountStructOutput;
  forwardedAmount: JBTokenAmountStructOutput;
  beneficiary: string;
  memo: string;
  dataSourceMetadata: string;
  redeemerMetadata: string;
};

export type DeployMyDelegateDataStruct = { allowedRoot: BytesLike };

export type DeployMyDelegateDataStructOutput = [string] & {
  allowedRoot: string;
};

export type JBPayParamsDataStruct = {
  terminal: string;
  payer: string;
  amount: JBTokenAmountStruct;
  projectId: BigNumberish;
  currentFundingCycleConfiguration: BigNumberish;
  beneficiary: string;
  weight: BigNumberish;
  reservedRate: BigNumberish;
  memo: string;
  metadata: BytesLike;
};

export type JBPayParamsDataStructOutput = [
  string,
  string,
  JBTokenAmountStructOutput,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  terminal: string;
  payer: string;
  amount: JBTokenAmountStructOutput;
  projectId: BigNumber;
  currentFundingCycleConfiguration: BigNumber;
  beneficiary: string;
  weight: BigNumber;
  reservedRate: BigNumber;
  memo: string;
  metadata: string;
};

export type JBPayDelegateAllocation3_1_1Struct = {
  delegate: string;
  amount: BigNumberish;
  metadata: BytesLike;
};

export type JBPayDelegateAllocation3_1_1StructOutput = [
  string,
  BigNumber,
  string
] & { delegate: string; amount: BigNumber; metadata: string };

export type JBRedeemParamsDataStruct = {
  terminal: string;
  holder: string;
  projectId: BigNumberish;
  currentFundingCycleConfiguration: BigNumberish;
  tokenCount: BigNumberish;
  totalSupply: BigNumberish;
  overflow: BigNumberish;
  reclaimAmount: JBTokenAmountStruct;
  useTotalOverflow: boolean;
  redemptionRate: BigNumberish;
  memo: string;
  metadata: BytesLike;
};

export type JBRedeemParamsDataStructOutput = [
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  JBTokenAmountStructOutput,
  boolean,
  BigNumber,
  string,
  string
] & {
  terminal: string;
  holder: string;
  projectId: BigNumber;
  currentFundingCycleConfiguration: BigNumber;
  tokenCount: BigNumber;
  totalSupply: BigNumber;
  overflow: BigNumber;
  reclaimAmount: JBTokenAmountStructOutput;
  useTotalOverflow: boolean;
  redemptionRate: BigNumber;
  memo: string;
  metadata: string;
};

export type JBRedemptionDelegateAllocation3_1_1Struct = {
  delegate: string;
  amount: BigNumberish;
  metadata: BytesLike;
};

export type JBRedemptionDelegateAllocation3_1_1StructOutput = [
  string,
  BigNumber,
  string
] & { delegate: string; amount: BigNumber; metadata: string };

export interface MyDelegateInterface extends utils.Interface {
  functions: {
    "didPay((address,uint256,uint256,(address,uint256,uint256,uint256),(address,uint256,uint256,uint256),uint256,address,bool,string,bytes,bytes))": FunctionFragment;
    "didRedeem((address,uint256,uint256,uint256,(address,uint256,uint256,uint256),(address,uint256,uint256,uint256),address,string,bytes,bytes))": FunctionFragment;
    "directory()": FunctionFragment;
    "initialize(uint256,address,(bytes32),address)": FunctionFragment;
    "operatorStore()": FunctionFragment;
    "payParams((address,address,(address,uint256,uint256,uint256),uint256,uint256,address,uint256,uint256,string,bytes))": FunctionFragment;
    "projectId()": FunctionFragment;
    "redeemParams((address,address,uint256,uint256,uint256,uint256,uint256,(address,uint256,uint256,uint256),bool,uint256,string,bytes))": FunctionFragment;
    "root()": FunctionFragment;
    "setRoot(bytes32)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "togglewhitelistEnabled()": FunctionFragment;
    "verify(bytes32[],address)": FunctionFragment;
    "whitelistEnabled()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "didPay"
      | "didRedeem"
      | "directory"
      | "initialize"
      | "operatorStore"
      | "payParams"
      | "projectId"
      | "redeemParams"
      | "root"
      | "setRoot"
      | "supportsInterface"
      | "togglewhitelistEnabled"
      | "verify"
      | "whitelistEnabled"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "didPay",
    values: [JBDidPayData3_1_1Struct]
  ): string;
  encodeFunctionData(
    functionFragment: "didRedeem",
    values: [JBDidRedeemData3_1_1Struct]
  ): string;
  encodeFunctionData(functionFragment: "directory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, DeployMyDelegateDataStruct, string]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payParams",
    values: [JBPayParamsDataStruct]
  ): string;
  encodeFunctionData(functionFragment: "projectId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemParams",
    values: [JBRedeemParamsDataStruct]
  ): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(functionFragment: "setRoot", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "togglewhitelistEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistEnabled",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "didPay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "didRedeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "directory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payParams", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projectId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "togglewhitelistEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistEnabled",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MyDelegate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MyDelegateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    didPay(
      _data: JBDidPayData3_1_1Struct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    didRedeem(
      _data: JBDidRedeemData3_1_1Struct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    directory(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _projectId: BigNumberish,
      _directory: string,
      _deployMyDelegateData: DeployMyDelegateDataStruct,
      controller: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    operatorStore(overrides?: CallOverrides): Promise<[string]>;

    payParams(
      _data: JBPayParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, JBPayDelegateAllocation3_1_1StructOutput[]] & {
        weight: BigNumber;
        memo: string;
        delegateAllocations: JBPayDelegateAllocation3_1_1StructOutput[];
      }
    >;

    projectId(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeemParams(
      _data: JBRedeemParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, JBRedemptionDelegateAllocation3_1_1StructOutput[]] & {
        reclaimAmount: BigNumber;
        memo: string;
        delegateAllocations: JBRedemptionDelegateAllocation3_1_1StructOutput[];
      }
    >;

    root(overrides?: CallOverrides): Promise<[string]>;

    setRoot(
      _root: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    togglewhitelistEnabled(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    verify(
      proof: BytesLike[],
      addr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    whitelistEnabled(overrides?: CallOverrides): Promise<[boolean]>;
  };

  didPay(
    _data: JBDidPayData3_1_1Struct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  didRedeem(
    _data: JBDidRedeemData3_1_1Struct,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  directory(overrides?: CallOverrides): Promise<string>;

  initialize(
    _projectId: BigNumberish,
    _directory: string,
    _deployMyDelegateData: DeployMyDelegateDataStruct,
    controller: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  operatorStore(overrides?: CallOverrides): Promise<string>;

  payParams(
    _data: JBPayParamsDataStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, JBPayDelegateAllocation3_1_1StructOutput[]] & {
      weight: BigNumber;
      memo: string;
      delegateAllocations: JBPayDelegateAllocation3_1_1StructOutput[];
    }
  >;

  projectId(overrides?: CallOverrides): Promise<BigNumber>;

  redeemParams(
    _data: JBRedeemParamsDataStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, JBRedemptionDelegateAllocation3_1_1StructOutput[]] & {
      reclaimAmount: BigNumber;
      memo: string;
      delegateAllocations: JBRedemptionDelegateAllocation3_1_1StructOutput[];
    }
  >;

  root(overrides?: CallOverrides): Promise<string>;

  setRoot(
    _root: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  togglewhitelistEnabled(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  verify(
    proof: BytesLike[],
    addr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  whitelistEnabled(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    didPay(
      _data: JBDidPayData3_1_1Struct,
      overrides?: CallOverrides
    ): Promise<void>;

    didRedeem(
      _data: JBDidRedeemData3_1_1Struct,
      overrides?: CallOverrides
    ): Promise<void>;

    directory(overrides?: CallOverrides): Promise<string>;

    initialize(
      _projectId: BigNumberish,
      _directory: string,
      _deployMyDelegateData: DeployMyDelegateDataStruct,
      controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    operatorStore(overrides?: CallOverrides): Promise<string>;

    payParams(
      _data: JBPayParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, JBPayDelegateAllocation3_1_1StructOutput[]] & {
        weight: BigNumber;
        memo: string;
        delegateAllocations: JBPayDelegateAllocation3_1_1StructOutput[];
      }
    >;

    projectId(overrides?: CallOverrides): Promise<BigNumber>;

    redeemParams(
      _data: JBRedeemParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, JBRedemptionDelegateAllocation3_1_1StructOutput[]] & {
        reclaimAmount: BigNumber;
        memo: string;
        delegateAllocations: JBRedemptionDelegateAllocation3_1_1StructOutput[];
      }
    >;

    root(overrides?: CallOverrides): Promise<string>;

    setRoot(_root: BytesLike, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    togglewhitelistEnabled(overrides?: CallOverrides): Promise<void>;

    verify(
      proof: BytesLike[],
      addr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    whitelistEnabled(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    didPay(
      _data: JBDidPayData3_1_1Struct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    didRedeem(
      _data: JBDidRedeemData3_1_1Struct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    directory(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _projectId: BigNumberish,
      _directory: string,
      _deployMyDelegateData: DeployMyDelegateDataStruct,
      controller: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    operatorStore(overrides?: CallOverrides): Promise<BigNumber>;

    payParams(
      _data: JBPayParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectId(overrides?: CallOverrides): Promise<BigNumber>;

    redeemParams(
      _data: JBRedeemParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    setRoot(
      _root: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    togglewhitelistEnabled(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    verify(
      proof: BytesLike[],
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistEnabled(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    didPay(
      _data: JBDidPayData3_1_1Struct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    didRedeem(
      _data: JBDidRedeemData3_1_1Struct,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    directory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _projectId: BigNumberish,
      _directory: string,
      _deployMyDelegateData: DeployMyDelegateDataStruct,
      controller: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    operatorStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payParams(
      _data: JBPayParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemParams(
      _data: JBRedeemParamsDataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRoot(
      _root: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    togglewhitelistEnabled(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    verify(
      proof: BytesLike[],
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

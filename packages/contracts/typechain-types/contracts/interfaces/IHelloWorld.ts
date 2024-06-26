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
  PromiseOrValue,
} from "../../common";

export interface IHelloWorldInterface extends utils.Interface {
  functions: {
    "addTokenDetails(uint256,string,uint256)": FunctionFragment;
    "hello()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "addTokenDetails" | "hello"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addTokenDetails",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "hello", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addTokenDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hello", data: BytesLike): Result;

  events: {};
}

export interface IHelloWorld extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHelloWorldInterface;

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
    addTokenDetails(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenName: PromiseOrValue<string>,
      tokenPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hello(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addTokenDetails(
    tokenId: PromiseOrValue<BigNumberish>,
    tokenName: PromiseOrValue<string>,
    tokenPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hello(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addTokenDetails(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenName: PromiseOrValue<string>,
      tokenPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    hello(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addTokenDetails(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenName: PromiseOrValue<string>,
      tokenPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hello(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addTokenDetails(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenName: PromiseOrValue<string>,
      tokenPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hello(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

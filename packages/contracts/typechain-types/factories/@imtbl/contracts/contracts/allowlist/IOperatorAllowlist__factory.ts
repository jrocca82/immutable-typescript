/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOperatorAllowlist,
  IOperatorAllowlistInterface,
} from "../../../../../@imtbl/contracts/contracts/allowlist/IOperatorAllowlist";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "isAllowlisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IOperatorAllowlist__factory {
  static readonly abi = _abi;
  static createInterface(): IOperatorAllowlistInterface {
    return new utils.Interface(_abi) as IOperatorAllowlistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOperatorAllowlist {
    return new Contract(address, _abi, signerOrProvider) as IOperatorAllowlist;
  }
}

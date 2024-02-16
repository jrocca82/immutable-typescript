/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IImmutableERC1155Errors,
  IImmutableERC1155ErrorsInterface,
} from "../../../../../../@imtbl/contracts/contracts/errors/Errors.sol/IImmutableERC1155Errors";

const _abi = [
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "PermitExpired",
    type: "error",
  },
] as const;

export class IImmutableERC1155Errors__factory {
  static readonly abi = _abi;
  static createInterface(): IImmutableERC1155ErrorsInterface {
    return new utils.Interface(_abi) as IImmutableERC1155ErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IImmutableERC1155Errors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IImmutableERC1155Errors;
  }
}

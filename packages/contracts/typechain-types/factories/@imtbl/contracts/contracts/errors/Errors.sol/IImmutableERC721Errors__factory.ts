/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IImmutableERC721Errors,
  IImmutableERC721ErrorsInterface,
} from "../../../../../../@imtbl/contracts/contracts/errors/Errors.sol/IImmutableERC721Errors";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "IImmutableERC721IDAboveThreshold",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currentOwner",
        type: "address",
      },
    ],
    name: "IImmutableERC721MismatchedTokenOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "IImmutableERC721MismatchedTransferLengths",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "IImmutableERC721NotOwnerOrOperator",
    type: "error",
  },
  {
    inputs: [],
    name: "IImmutableERC721SendingToZerothAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "IImmutableERC721TokenAlreadyBurned",
    type: "error",
  },
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
  {
    inputs: [],
    name: "SignerCannotBeZerothAddress",
    type: "error",
  },
] as const;

export class IImmutableERC721Errors__factory {
  static readonly abi = _abi;
  static createInterface(): IImmutableERC721ErrorsInterface {
    return new utils.Interface(_abi) as IImmutableERC721ErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IImmutableERC721Errors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IImmutableERC721Errors;
  }
}

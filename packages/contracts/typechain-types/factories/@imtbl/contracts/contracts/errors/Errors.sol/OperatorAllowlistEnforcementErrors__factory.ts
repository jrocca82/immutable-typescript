/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OperatorAllowlistEnforcementErrors,
  OperatorAllowlistEnforcementErrorsInterface,
} from "../../../../../../@imtbl/contracts/contracts/errors/Errors.sol/OperatorAllowlistEnforcementErrors";

const _abi = [
  {
    inputs: [],
    name: "AllowlistDoesNotImplementIOperatorAllowlist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "ApproveTargetNotInAllowlist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ApproverNotInAllowlist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerNotInAllowlist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "TransferFromNotInAllowlist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "TransferToNotInAllowlist",
    type: "error",
  },
] as const;

export class OperatorAllowlistEnforcementErrors__factory {
  static readonly abi = _abi;
  static createInterface(): OperatorAllowlistEnforcementErrorsInterface {
    return new utils.Interface(
      _abi
    ) as OperatorAllowlistEnforcementErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OperatorAllowlistEnforcementErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OperatorAllowlistEnforcementErrors;
  }
}

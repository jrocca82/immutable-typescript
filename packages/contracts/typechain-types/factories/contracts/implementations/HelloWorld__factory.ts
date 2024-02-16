/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  HelloWorld,
  HelloWorldInterface,
} from "../../../contracts/implementations/HelloWorld";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenPrice",
        type: "uint256",
      },
    ],
    name: "addTokenDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
  {
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenDetails",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001c600033610021565b6100cd565b61002b828261002f565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661002b576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100893390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610baf806100dc6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806391d148541161007157806391d1485414610144578063a217fddf14610157578063d53913931461015f578063d547741f14610186578063f70589b614610199578063fc314e31146101ac57600080fd5b806301ffc9a7146100ae57806319ff1d21146100d6578063248a9ca3146100eb5780632f2ff15d1461011c57806336568abe14610131575b600080fd5b6100c16100bc366004610771565b6101cd565b60405190151581526020015b60405180910390f35b6100de610204565b6040516100cd91906107eb565b61010e6100f93660046107fe565b60009081526020819052604090206001015490565b6040519081526020016100cd565b61012f61012a366004610817565b61025c565b005b61012f61013f366004610817565b610286565b6100c1610152366004610817565b610309565b61010e600081565b61010e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61012f610194366004610817565b610332565b61012f6101a7366004610869565b610357565b6101bf6101ba3660046107fe565b6103c9565b6040516100cd92919061092d565b60006001600160e01b03198216637965db0b60e01b14806101fe57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606042606403610235575060408051808201909152600c81526b68656c6c6f20776f726c642160a01b602082015290565b5060408051808201909152600c81526b68656c6c6f20776f726c642160a01b602082015290565b6000828152602081905260409020600101546102778161046d565b610281838361047a565b505050565b6001600160a01b03811633146102fb5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61030582826104fe565b5050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008281526020819052604090206001015461034d8161046d565b61028183836104fe565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66103818161046d565b60408051808201825284815260208082018590526000878152600190915291909120815182919081906103b490826109d7565b50602082015181600101559050505050505050565b6001602052600090815260409020805481906103e49061094f565b80601f01602080910402602001604051908101604052809291908181526020018280546104109061094f565b801561045d5780601f106104325761010080835404028352916020019161045d565b820191906000526020600020905b81548152906001019060200180831161044057829003601f168201915b5050505050908060010154905082565b6104778133610563565b50565b6104848282610309565b610305576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556104ba3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6105088282610309565b15610305576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b61056d8282610309565b6103055761057a816105bc565b6105858360206105ce565b604051602001610596929190610a97565b60408051601f198184030181529082905262461bcd60e51b82526102f2916004016107eb565b60606101fe6001600160a01b03831660145b606060006105dd836002610b22565b6105e8906002610b39565b67ffffffffffffffff81111561060057610600610853565b6040519080825280601f01601f19166020018201604052801561062a576020820181803683370190505b509050600360fc1b8160008151811061064557610645610b4c565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061067457610674610b4c565b60200101906001600160f81b031916908160001a9053506000610698846002610b22565b6106a3906001610b39565b90505b600181111561071b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106106d7576106d7610b4c565b1a60f81b8282815181106106ed576106ed610b4c565b60200101906001600160f81b031916908160001a90535060049490941c9361071481610b62565b90506106a6565b50831561076a5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016102f2565b9392505050565b60006020828403121561078357600080fd5b81356001600160e01b03198116811461076a57600080fd5b60005b838110156107b657818101518382015260200161079e565b50506000910152565b600081518084526107d781602086016020860161079b565b601f01601f19169290920160200192915050565b60208152600061076a60208301846107bf565b60006020828403121561081057600080fd5b5035919050565b6000806040838503121561082a57600080fd5b8235915060208301356001600160a01b038116811461084857600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561087e57600080fd5b83359250602084013567ffffffffffffffff8082111561089d57600080fd5b818601915086601f8301126108b157600080fd5b8135818111156108c3576108c3610853565b604051601f8201601f19908116603f011681019083821181831017156108eb576108eb610853565b8160405282815289602084870101111561090457600080fd5b826020860160208301376000602084830101528096505050505050604084013590509250925092565b60408152600061094060408301856107bf565b90508260208301529392505050565b600181811c9082168061096357607f821691505b60208210810361098357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561028157600081815260208120601f850160051c810160208610156109b05750805b601f850160051c820191505b818110156109cf578281556001016109bc565b505050505050565b815167ffffffffffffffff8111156109f1576109f1610853565b610a05816109ff845461094f565b84610989565b602080601f831160018114610a3a5760008415610a225750858301515b600019600386901b1c1916600185901b1785556109cf565b600085815260208120601f198616915b82811015610a6957888601518255948401946001909101908401610a4a565b5085821015610a875787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610acf81601785016020880161079b565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610b0081602884016020880161079b565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176101fe576101fe610b0c565b808201808211156101fe576101fe610b0c565b634e487b7160e01b600052603260045260246000fd5b600081610b7157610b71610b0c565b50600019019056fea2646970667358221220f4757e40136c95ba35ca25afe97b2ace4f2a36b54d7139cc1d44e22811751e5464736f6c63430008140033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HelloWorld> {
    return super.deploy(overrides || {}) as Promise<HelloWorld>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  override connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}
